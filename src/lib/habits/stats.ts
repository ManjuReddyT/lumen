import { addDays, startOfWeek, subDays } from "date-fns";
import { dateKey, todayDate, WEEK_STARTS_ON } from "./dates";
import type { Completions, Habit } from "./types";

export type HabitStats = {
  currentStreak: number;
  longestStreak: number;
  weekDone: number;
  weekTotal: number;
  monthDone: number;
  monthTotal: number;
  last30Done: number;
  last30Total: number;
  total: number;
};

function completedSet(completions: Completions, habitId: string): Set<string> {
  return new Set(Object.keys(completions[habitId] ?? {}));
}

export function currentStreak(
  completions: Completions,
  habitId: string,
  today = todayDate(),
): number {
  const done = completedSet(completions, habitId);
  let cursor = today;
  if (!done.has(dateKey(cursor))) {
    cursor = subDays(cursor, 1);
  }
  let streak = 0;
  while (done.has(dateKey(cursor))) {
    streak += 1;
    cursor = subDays(cursor, 1);
  }
  return streak;
}

export function longestStreak(completions: Completions, habitId: string): number {
  const keys = Object.keys(completions[habitId] ?? {}).sort();
  if (keys.length === 0) return 0;
  let best = 1;
  let run = 1;
  for (let i = 1; i < keys.length; i += 1) {
    const prev = new Date(keys[i - 1] + "T00:00:00");
    const next = new Date(keys[i] + "T00:00:00");
    const expected = addDays(prev, 1);
    if (dateKey(expected) === dateKey(next)) {
      run += 1;
      if (run > best) best = run;
    } else {
      run = 1;
    }
  }
  return best;
}

function countInRange(
  done: Set<string>,
  start: Date,
  end: Date,
): { done: number; total: number } {
  let total = 0;
  let count = 0;
  let cursor = start;
  while (cursor.getTime() <= end.getTime()) {
    total += 1;
    if (done.has(dateKey(cursor))) count += 1;
    cursor = addDays(cursor, 1);
  }
  return { done: count, total };
}

export function getHabitStats(
  habit: Habit,
  completions: Completions,
  today = todayDate(),
): HabitStats {
  const done = completedSet(completions, habit.id);
  const weekStart = startOfWeek(today, { weekStartsOn: WEEK_STARTS_ON });
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const last30Start = subDays(today, 29);
  const week = countInRange(done, weekStart, today);
  const month = countInRange(done, monthStart, today);
  const last30 = countInRange(done, last30Start, today);
  return {
    currentStreak: currentStreak(completions, habit.id, today),
    longestStreak: longestStreak(completions, habit.id),
    weekDone: week.done,
    weekTotal: week.total,
    monthDone: month.done,
    monthTotal: month.total,
    last30Done: last30.done,
    last30Total: last30.total,
    total: done.size,
  };
}

export function dayCompletionCount(
  habits: Habit[],
  completions: Completions,
  date: Date,
): { done: number; total: number } {
  const key = dateKey(date);
  let done = 0;
  for (const habit of habits) {
    if (completions[habit.id]?.[key]) done += 1;
  }
  return { done, total: habits.length };
}

export function overallStreak(habits: Habit[], completions: Completions, today = todayDate()): number {
  if (habits.length === 0) return 0;
  let cursor = today;
  const key = dateKey(cursor);
  const completeToday = habits.every((h) => completions[h.id]?.[key]);
  if (!completeToday) cursor = subDays(cursor, 1);
  let streak = 0;
  while (true) {
    const k = dateKey(cursor);
    const all = habits.every((h) => completions[h.id]?.[k]);
    if (!all) break;
    streak += 1;
    cursor = subDays(cursor, 1);
  }
  return streak;
}
