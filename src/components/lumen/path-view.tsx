import {
  Bookmark,
  BookMarked,
  CalendarCheck,
  CheckCheck,
  Layers,
  Orbit,
  Repeat,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { COLOR_STYLES } from "@/lib/habits/colors";
import { getHabitIcon } from "@/lib/habits/icons";
import type { ChapterProgress, Seal, SealId } from "@/lib/habits/progress";
import { getHabitStats } from "@/lib/habits/stats";
import type { Completions, Habit } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

const SEAL_ICONS: Record<SealId, LucideIcon> = {
  "first-light": Sun,
  "seven-days": Repeat,
  "all-kept": CheckCheck,
  "week-kept": CalendarCheck,
  fifty: Bookmark,
  hundred: BookMarked,
  "deep-streak": Orbit,
  constellation: Layers,
};

type PathViewProps = {
  habits: Habit[];
  completions: Completions;
  today: Date;
  chapter: ChapterProgress;
  seals: Seal[];
  pact: { done: number; total: number; ratio: number };
  best: number;
  perfectDays: number;
  marks: number;
};

export function PathView({
  habits,
  completions,
  today,
  chapter,
  seals,
  pact,
  best,
  perfectDays,
  marks,
}: PathViewProps) {
  const earnedCount = seals.filter((seal) => seal.earned).length;

  return (
    <div className="flex flex-col gap-8">
      <section>
        <p className="text-xs tracking-wide text-subtle uppercase">Chapter</p>
        <h2 className="font-display mt-1 text-4xl font-medium tracking-tight">
          {chapter.current.name}
        </h2>
        <p className="mt-2 text-sm text-muted">
          <span className="tabular-nums">{marks}</span> light
          {chapter.next ? (
            <>
              {" "}
              · <span className="tabular-nums">{chapter.remaining}</span> to {chapter.next.name}
            </>
          ) : (
            " · the last chapter"
          )}
        </p>
        <Meter value={chapter.ratio} />
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs tracking-wide text-subtle uppercase">This week’s pact</p>
          <p className="text-sm tabular-nums text-muted">
            {pact.done}/{pact.total}
          </p>
        </div>
        <Meter value={pact.ratio} className="mt-3" />
        <p className="mt-2 text-sm text-muted">
          {pact.total === 0
            ? "Add a ritual to begin the week."
            : pact.ratio >= 1
              ? "This week is full."
              : `Keep ${pact.total - pact.done} more to fill the week.`}
        </p>
      </section>

      <section>
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <p className="text-xs tracking-wide text-subtle uppercase">Seals</p>
          <p className="text-sm tabular-nums text-muted">
            {earnedCount}/{seals.length}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {seals.map((seal) => (
            <SealCard key={seal.id} seal={seal} />
          ))}
        </div>
      </section>

      {habits.length > 0 ? (
        <section>
          <p className="mb-3 text-xs tracking-wide text-subtle uppercase">Rituals</p>
          <ul className="flex flex-col gap-2">
            {habits.map((habit) => {
              const Icon = getHabitIcon(habit.icon);
              const styles = COLOR_STYLES[habit.color];
              const stats = getHabitStats(habit, completions, today);
              return (
                <li
                  key={habit.id}
                  className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2.5 shadow-[var(--shadow-border)]"
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
                  <span className="text-xs tabular-nums text-muted">
                    {stats.currentStreak} now · best {stats.longestStreak}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <p className="text-center text-sm text-muted">
        <span className="tabular-nums">{marks}</span> marks ·{" "}
        <span className="tabular-nums">{best}</span>-day best ·{" "}
        <span className="tabular-nums">{perfectDays}</span> perfect{" "}
        {perfectDays === 1 ? "day" : "days"}
      </p>
    </div>
  );
}

function Meter({ value, className }: { value: number; className?: string }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div
      className={cn("mt-4 h-2 overflow-hidden rounded-full bg-fg/8", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
    >
      <div
        className="h-full w-full origin-left rounded-full bg-primary transition-transform duration-[250ms] ease-[var(--ease-smooth-out)]"
        style={{ transform: `scaleX(${pct / 100})` }}
      />
    </div>
  );
}

function SealCard({ seal }: { seal: Seal }) {
  const Icon = SEAL_ICONS[seal.id];
  return (
    <div
      className={cn(
        "flex min-h-28 flex-col rounded-xl p-4",
        seal.earned
          ? "bg-surface shadow-[var(--shadow-border)]"
          : "ring-1 ring-border-strong ring-inset",
      )}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-md",
          seal.earned ? "bg-primary/12 text-primary" : "text-subtle",
        )}
      >
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <p className={cn("mt-3 font-medium", !seal.earned && "text-muted")}>{seal.title}</p>
      <p className="mt-1 text-xs text-subtle">{seal.hint}</p>
    </div>
  );
}
