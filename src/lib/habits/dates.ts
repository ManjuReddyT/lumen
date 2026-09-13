import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";

export const WEEK_STARTS_ON = 1 as const;

export function dateKey(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function parseKey(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function todayDate(): Date {
  return startOfDay(new Date());
}

export function isFutureDay(date: Date, today = todayDate()): boolean {
  return isAfter(startOfDay(date), today);
}

export function isTodayDay(date: Date, today = todayDate()): boolean {
  return isSameDay(date, today);
}

export function weekDays(anchor: Date): Date[] {
  const start = startOfWeek(anchor, { weekStartsOn: WEEK_STARTS_ON });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function monthGrid(anchor: Date): Date[] {
  const start = startOfWeek(startOfMonth(anchor), { weekStartsOn: WEEK_STARTS_ON });
  const end = endOfWeek(endOfMonth(anchor), { weekStartsOn: WEEK_STARTS_ON });
  return eachDayOfInterval({ start, end });
}

export function monthDays(anchor: Date): Date[] {
  return eachDayOfInterval({
    start: startOfMonth(anchor),
    end: endOfMonth(anchor),
  });
}

export function daysBack(from: Date, count: number): Date[] {
  const end = startOfDay(from);
  const start = subDays(end, count - 1);
  return eachDayOfInterval({ start, end });
}

export function isInMonth(date: Date, anchor: Date): boolean {
  return (
    date.getMonth() === anchor.getMonth() && date.getFullYear() === anchor.getFullYear()
  );
}

export function isBeforeDay(date: Date, other: Date): boolean {
  return isBefore(startOfDay(date), startOfDay(other));
}

export { format, addDays, subDays, startOfMonth, startOfWeek };
