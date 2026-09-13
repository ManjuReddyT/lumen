import { Check } from "lucide-react";
import { COLOR_STYLES } from "@/lib/habits/colors";
import { dateKey, format, isFutureDay, isTodayDay } from "@/lib/habits/dates";
import type { Habit } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type CheckCellProps = {
  habit: Habit;
  date: Date;
  done: boolean;
  onToggle: (habitId: string, key: string) => void;
  size?: "week" | "month" | "day";
};

export function CheckCell({
  habit,
  date,
  done,
  onToggle,
  size = "week",
}: CheckCellProps) {
  const key = dateKey(date);
  const future = isFutureDay(date);
  const today = isTodayDay(date);
  const styles = COLOR_STYLES[habit.color];
  const compact = size === "month";
  const large = size === "day";

  return (
    <button
      type="button"
      disabled={future}
      onClick={() => onToggle(habit.id, key)}
      aria-pressed={done}
      aria-label={`${habit.name}, ${format(date, "EEEE d MMM")}${done ? ", kept" : ", not kept"}`}
      className={cn(
        "relative flex items-center justify-center rounded-sm transition-[transform,background-color,box-shadow,opacity] duration-[150ms] ease-[var(--ease-out)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        !future && "active:scale-[0.96] hover:opacity-90",
        future && "cursor-default opacity-30",
        compact && "aspect-square min-h-0 w-full",
        !compact && !large && "size-11 md:size-11",
        large && "size-12",
        done && styles.fill,
        !done && "bg-transparent ring-1 ring-inset ring-fg/12",
        !done && today && !future && cn("ring-2", styles.ring),
      )}
    >
      {done && !compact ? (
        <Check className="size-3.5 text-primary-fg" strokeWidth={2.75} />
      ) : null}
    </button>
  );
}
