import { addDays, startOfWeek } from "date-fns";
import { dateKey, isFutureDay, todayDate, WEEK_STARTS_ON } from "./dates";
import { dayCompletionCount, longestStreak } from "./stats";
import type { Completions, Habit } from "./types";

export const CHAPTERS = [
  { id: "spark", name: "Spark", min: 0 },
  { id: "wick", name: "Wick", min: 12 },
  { id: "lamp", name: "Lamp", min: 40 },
  { id: "lantern", name: "Lantern", min: 80 },
  { id: "beacon", name: "Beacon", min: 140 },
  { id: "hearth", name: "Hearth", min: 220 },
  { id: "lumen", name: "Lumen", min: 320 },
] as const;

export type Chapter = (typeof CHAPTERS)[number];

export type ChapterProgress = {
  current: Chapter;
  next: Chapter | null;
  marks: number;
  inChapter: number;
  span: number;
  ratio: number;
  remaining: number;
};

export type SealId =
  | "first-light"
  | "seven-days"
  | "all-kept"
  | "week-kept"
  | "fifty"
  | "hundred"
  | "deep-streak"
  | "constellation";

export type Seal = {
  id: SealId;
  title: string;
  hint: string;
  earned: boolean;
};

const SEAL_COPY: Record<SealId, { title: string; hint: string }> = {
  "first-light": { title: "First light", hint: "Keep any ritual once." },
  "seven-days": { title: "Seven days", hint: "A seven-day streak on one ritual." },
  "all-kept": { title: "All kept", hint: "Finish every ritual on the same day." },
  "week-kept": { title: "Week kept", hint: "Fill every square in a full week." },
  fifty: { title: "Fifty marks", hint: "Leave fifty marks in the journal." },
  hundred: { title: "A hundred", hint: "Reach one hundred marks." },
  "deep-streak": { title: "Deep streak", hint: "Hold a ritual for fourteen days." },
  constellation: { title: "Constellation", hint: "Keep four rituals at once." },
};

export const SEAL_ORDER: SealId[] = [
  "first-light",
  "seven-days",
  "all-kept",
  "week-kept",
  "fifty",
  "hundred",
  "deep-streak",
  "constellation",
];

export function totalMarks(completions: Completions): number {
  let n = 0;
  for (const map of Object.values(completions)) {
    n += Object.keys(map).length;
  }
  return n;
}

export function getChapterProgress(marks: number): ChapterProgress {
  let current: Chapter = CHAPTERS[0];
  let next: Chapter | null = CHAPTERS[1] ?? null;
  for (let i = 0; i < CHAPTERS.length; i += 1) {
    if (marks >= CHAPTERS[i].min) {
      current = CHAPTERS[i];
      next = CHAPTERS[i + 1] ?? null;
    }
  }
  if (!next) {
    return {
      current,
      next: null,
      marks,
      inChapter: 1,
      span: 1,
      ratio: 1,
      remaining: 0,
    };
  }
  const span = next.min - current.min;
  const inChapter = marks - current.min;
  return {
    current,
    next,
    marks,
    inChapter,
    span,
    ratio: Math.min(1, inChapter / span),
    remaining: Math.max(0, next.min - marks),
  };
}

export function bestStreak(habits: Habit[], completions: Completions): number {
  if (habits.length === 0) return 0;
  return Math.max(0, ...habits.map((habit) => longestStreak(completions, habit.id)));
}

export function countPerfectDays(habits: Habit[], completions: Completions): number {
  if (habits.length === 0) return 0;
  const keys = new Set<string>();
  for (const map of Object.values(completions)) {
    for (const key of Object.keys(map)) keys.add(key);
  }
  let n = 0;
  for (const key of keys) {
    if (habits.every((habit) => completions[habit.id]?.[key])) n += 1;
  }
  return n;
}

function weekIsFilled(
  habits: Habit[],
  completions: Completions,
  weekStart: Date,
  today: Date,
): boolean {
  if (habits.length === 0) return false;
  for (let i = 0; i < 7; i += 1) {
    const day = addDays(weekStart, i);
    if (isFutureDay(day, today)) return false;
    const { done, total } = dayCompletionCount(habits, completions, day);
    if (total === 0 || done < total) return false;
  }
  return true;
}

export function hasFilledWeek(
  habits: Habit[],
  completions: Completions,
  today = todayDate(),
): boolean {
  const thisStart = startOfWeek(today, { weekStartsOn: WEEK_STARTS_ON });
  for (let w = 0; w < 12; w += 1) {
    const start = addDays(thisStart, -7 * w);
    if (weekIsFilled(habits, completions, start, today)) return true;
  }
  return false;
}

export function weekPact(
  habits: Habit[],
  completions: Completions,
  today = todayDate(),
): { done: number; total: number; ratio: number } {
  const start = startOfWeek(today, { weekStartsOn: WEEK_STARTS_ON });
  let done = 0;
  let total = 0;
  for (let i = 0; i < 7; i += 1) {
    const day = addDays(start, i);
    if (isFutureDay(day, today)) continue;
    const count = dayCompletionCount(habits, completions, day);
    done += count.done;
    total += count.total;
  }
  return { done, total, ratio: total === 0 ? 0 : done / total };
}

export function evaluateSeals(
  habits: Habit[],
  completions: Completions,
  today = todayDate(),
): Seal[] {
  const marks = totalMarks(completions);
  const streak = bestStreak(habits, completions);
  const perfect = countPerfectDays(habits, completions);
  const earned: Record<SealId, boolean> = {
    "first-light": marks >= 1,
    "seven-days": streak >= 7,
    "all-kept": perfect >= 1,
    "week-kept": hasFilledWeek(habits, completions, today),
    fifty: marks >= 50,
    hundred: marks >= 100,
    "deep-streak": streak >= 14,
    constellation: habits.length >= 4,
  };
  return SEAL_ORDER.map((id) => ({
    id,
    title: SEAL_COPY[id].title,
    hint: SEAL_COPY[id].hint,
    earned: earned[id],
  }));
}

export function newSeals(before: Seal[], after: Seal[]): Seal[] {
  const prev = new Set(before.filter((seal) => seal.earned).map((seal) => seal.id));
  return after.filter((seal) => seal.earned && !prev.has(seal.id));
}
