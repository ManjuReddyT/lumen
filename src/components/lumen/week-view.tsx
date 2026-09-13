import { ChevronLeft, ChevronRight, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { CheckCell } from "@/components/lumen/check-cell";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { COLOR_STYLES } from "@/lib/habits/colors";
import {
  addDays,
  dateKey,
  format,
  isTodayDay,
  startOfWeek,
  subDays,
  weekDays,
  WEEK_STARTS_ON,
} from "@/lib/habits/dates";
import { getHabitIcon } from "@/lib/habits/icons";
import { getHabitStats } from "@/lib/habits/stats";
import type { Completions, Habit } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type WeekViewProps = {
  habits: Habit[];
  completions: Completions;
  weekAnchor: Date;
  today: Date;
  onWeekAnchorChange: (date: Date) => void;
  onToggle: (habitId: string, key: string) => void;
  onEdit: (habit: Habit) => void;
  onDelete: (habit: Habit) => void;
};

export function WeekView({
  habits,
  completions,
  weekAnchor,
  today,
  onWeekAnchorChange,
  onToggle,
  onEdit,
  onDelete,
}: WeekViewProps) {
  const days = weekDays(weekAnchor);
  const thisWeekStart = startOfWeek(today, { weekStartsOn: WEEK_STARTS_ON });
  const anchorStart = startOfWeek(weekAnchor, { weekStartsOn: WEEK_STARTS_ON });
  const isCurrentWeek = dateKey(thisWeekStart) === dateKey(anchorStart);
  const canGoForward = anchorStart.getTime() < thisWeekStart.getTime();

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {format(days[0], "d MMM")} – {format(days[6], "d MMM")}
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Previous week"
            onClick={() => onWeekAnchorChange(subDays(anchorStart, 7))}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn("min-w-24", isCurrentWeek && "text-fg")}
            onClick={() => onWeekAnchorChange(today)}
          >
            {isCurrentWeek ? "This week" : "Jump to now"}
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Next week"
            disabled={!canGoForward}
            onClick={() => onWeekAnchorChange(addDays(anchorStart, 7))}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mb-2 hidden items-end gap-1.5 px-1 text-xs text-subtle md:flex">
        <div className="w-56 shrink-0">Ritual</div>
        {days.map((day) => (
          <div
            key={dateKey(day)}
            className={cn(
              "flex w-11 shrink-0 flex-col items-center",
              isTodayDay(day, today) && "font-medium text-fg",
            )}
          >
            <span>{format(day, "EEEEE")}</span>
            <span className="tabular-nums">{format(day, "d")}</span>
          </div>
        ))}
        <div className="w-10 shrink-0 text-center">Streak</div>
        <div className="w-9 shrink-0" />
      </div>

      <div className="mb-3 grid grid-cols-7 gap-1.5 md:hidden">
        {days.map((day) => (
          <div
            key={dateKey(day)}
            className={cn(
              "text-center text-xs text-subtle",
              isTodayDay(day, today) && "font-medium text-fg",
            )}
          >
            <div>{format(day, "EEEEE")}</div>
            <div className="tabular-nums">{format(day, "d")}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 md:gap-1">
        {habits.map((habit) => (
          <HabitWeekRow
            key={habit.id}
            habit={habit}
            completions={completions}
            days={days}
            today={today}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

function HabitWeekRow({
  habit,
  completions,
  days,
  today,
  onToggle,
  onEdit,
  onDelete,
}: {
  habit: Habit;
  completions: Completions;
  days: Date[];
  today: Date;
  onToggle: (habitId: string, key: string) => void;
  onEdit: (habit: Habit) => void;
  onDelete: (habit: Habit) => void;
}) {
  const Icon = getHabitIcon(habit.icon);
  const styles = COLOR_STYLES[habit.color];
  const stats = getHabitStats(habit, completions, today);

  return (
    <div className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] md:flex md:items-center md:gap-1.5 md:rounded-none md:bg-transparent md:px-1 md:py-1 md:shadow-none">
      <div className="flex min-w-0 items-center gap-3 md:w-56 md:shrink-0">
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-md",
            styles.soft,
            styles.text,
          )}
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{habit.name}</p>
          <p className="truncate text-xs text-subtle md:hidden">
            {stats.weekDone}/{stats.weekTotal} this week
          </p>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <span
            className={cn(
              "tabular-nums text-sm font-medium",
              stats.currentStreak >= 7 && "text-primary",
            )}
          >
            {stats.currentStreak}
          </span>
          <RowMenu habit={habit} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1.5 md:mt-0 md:flex md:gap-1.5">
        {days.map((day) => (
          <div key={dateKey(day)} className="flex justify-center md:w-11 md:shrink-0">
            <CheckCell
              habit={habit}
              date={day}
              done={Boolean(completions[habit.id]?.[dateKey(day)])}
              onToggle={onToggle}
            />
          </div>
        ))}
      </div>

      <div className="hidden w-10 shrink-0 justify-center md:flex">
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn(
                "tabular-nums text-sm font-medium",
                stats.currentStreak >= 7 ? "text-primary" : "text-fg",
              )}
            >
              {stats.currentStreak}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            Best {stats.longestStreak} · {stats.monthDone}/{stats.monthTotal} this month
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="hidden w-9 shrink-0 justify-end md:flex">
        <RowMenu habit={habit} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}

function RowMenu({
  habit,
  onEdit,
  onDelete,
}: {
  habit: Habit;
  onEdit: (habit: Habit) => void;
  onDelete: (habit: Habit) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${habit.name}`}>
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => onEdit(habit)}>
          <Pencil className="size-3.5" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="danger" onSelect={() => onDelete(habit)}>
          <Trash2 className="size-3.5" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
