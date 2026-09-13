import { addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CheckCell } from "@/components/lumen/check-cell";
import { Button } from "@/components/ui/button";
import { COLOR_STYLES } from "@/lib/habits/colors";
import {
  dateKey,
  format,
  isFutureDay,
  isInMonth,
  isTodayDay,
  monthDays,
  monthGrid,
  startOfMonth,
} from "@/lib/habits/dates";
import { getHabitIcon } from "@/lib/habits/icons";
import { dayCompletionCount, getHabitStats } from "@/lib/habits/stats";
import type { Completions, Habit } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type MonthViewProps = {
  habits: Habit[];
  completions: Completions;
  monthAnchor: Date;
  selectedDate: Date;
  today: Date;
  onMonthAnchorChange: (date: Date) => void;
  onSelectDate: (date: Date) => void;
  onToggle: (habitId: string, key: string) => void;
};

export function MonthView({
  habits,
  completions,
  monthAnchor,
  selectedDate,
  today,
  onMonthAnchorChange,
  onSelectDate,
  onToggle,
}: MonthViewProps) {
  const grid = monthGrid(monthAnchor);
  const thisMonth = startOfMonth(today);
  const anchorMonth = startOfMonth(monthAnchor);
  const canGoForward = anchorMonth.getTime() < thisMonth.getTime();
  const days = monthDays(monthAnchor);
  const weekdayLabels = grid.slice(0, 7);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-display text-xl font-medium tracking-tight">
            {format(monthAnchor, "MMMM yyyy")}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Previous month"
              onClick={() => onMonthAnchorChange(subMonths(anchorMonth, 1))}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onMonthAnchorChange(today)}>
              Today
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Next month"
              disabled={!canGoForward}
              onClick={() => onMonthAnchorChange(addMonths(anchorMonth, 1))}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {weekdayLabels.map((day) => (
            <div key={`lbl-${day.toISOString()}`} className="pb-1 text-center text-xs text-subtle">
              {format(day, "EEEEE")}
            </div>
          ))}
          {grid.map((day) => {
            const inMonth = isInMonth(day, monthAnchor);
            const future = isFutureDay(day, today);
            const { done, total } = dayCompletionCount(habits, completions, day);
            const selected = dateKey(day) === dateKey(selectedDate);
            const isToday = isTodayDay(day, today);
            const level =
              !inMonth || future || total === 0 || done === 0
                ? 0
                : done / total < 0.5
                  ? 1
                  : done < total
                    ? 2
                    : 3;
            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={!inMonth || future}
                onClick={() => onSelectDate(day)}
                aria-label={`${format(day, "d MMMM")}${total && !future ? `, ${done} of ${total} kept` : ""}`}
                aria-pressed={selected}
                className={cn(
                  "relative flex aspect-square min-h-11 flex-col items-center justify-center rounded-md text-sm tabular-nums transition-[transform,background-color,box-shadow] duration-[150ms] ease-[var(--ease-out)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  !inMonth && "opacity-0",
                  inMonth && future && "text-subtle",
                  inMonth &&
                    !future &&
                    level === 0 &&
                    "bg-transparent text-muted ring-1 ring-fg/10 ring-inset",
                  inMonth && level === 1 && "bg-primary/20 text-fg",
                  inMonth && level === 2 && "bg-primary/50 text-fg",
                  inMonth && level === 3 && "bg-primary text-primary-fg",
                  selected && inMonth && "ring-2 ring-fg ring-offset-2 ring-offset-bg",
                  isToday && !selected && "font-semibold",
                )}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>

      <SelectedDayList
        habits={habits}
        completions={completions}
        date={selectedDate}
        today={today}
        onToggle={onToggle}
      />

      <div className="hidden md:flex md:flex-col md:gap-3">
        <p className="text-xs tracking-wide text-subtle uppercase">The month at a glance</p>
        {habits.map((habit) => (
          <MonthStrip
            key={habit.id}
            habit={habit}
            completions={completions}
            days={days}
            today={today}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

function SelectedDayList({
  habits,
  completions,
  date,
  today,
  onToggle,
}: {
  habits: Habit[];
  completions: Completions;
  date: Date;
  today: Date;
  onToggle: (habitId: string, key: string) => void;
}) {
  const isToday = isTodayDay(date, today);
  const { done, total } = dayCompletionCount(habits, completions, date);

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p className="font-display text-lg font-medium tracking-tight">
          {isToday ? "Today" : format(date, "EEEE d MMM")}
        </p>
        <p className="text-sm tabular-nums text-muted">
          {done}/{total} kept
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {habits.map((habit) => {
          const Icon = getHabitIcon(habit.icon);
          const styles = COLOR_STYLES[habit.color];
          const kept = Boolean(completions[habit.id]?.[dateKey(date)]);
          return (
            <li
              key={habit.id}
              className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]"
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-sm",
                  styles.soft,
                  styles.text,
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1 truncate font-medium">{habit.name}</span>
              <CheckCell
                habit={habit}
                date={date}
                done={kept}
                onToggle={onToggle}
                size="day"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MonthStrip({
  habit,
  completions,
  days,
  today,
  onToggle,
}: {
  habit: Habit;
  completions: Completions;
  days: Date[];
  today: Date;
  onToggle: (habitId: string, key: string) => void;
}) {
  const Icon = getHabitIcon(habit.icon);
  const styles = COLOR_STYLES[habit.color];
  const stats = getHabitStats(habit, completions, today);

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-sm",
          styles.soft,
          styles.text,
        )}
      >
        <Icon className="size-3.5" strokeWidth={1.75} />
      </span>
      <p className="w-36 shrink-0 truncate text-sm">{habit.name}</p>
      <div className="grid min-w-0 flex-1 grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-0.5">
        {days.map((day) => (
          <CheckCell
            key={day.toISOString()}
            habit={habit}
            date={day}
            done={Boolean(completions[habit.id]?.[dateKey(day)])}
            onToggle={onToggle}
            size="month"
          />
        ))}
      </div>
      <p className="w-12 shrink-0 text-right text-xs tabular-nums text-muted">
        {stats.monthDone}/{stats.monthTotal}
      </p>
    </div>
  );
}
