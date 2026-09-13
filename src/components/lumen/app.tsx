import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import { HabitDialog } from "@/components/lumen/habit-dialog";
import { MonthView } from "@/components/lumen/month-view";
import { WeekView } from "@/components/lumen/week-view";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  dateKey,
  format,
  isFutureDay,
  todayDate,
  weekDays,
} from "@/lib/habits/dates";
import { dayCompletionCount, overallStreak } from "@/lib/habits/stats";
import { useHabitStore } from "@/lib/habits/store";
import type { Habit, HabitColor, HabitIconId } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type View = "week" | "month";

export function LumenApp() {
  const habits = useHabitStore((s) => s.habits);
  const completions = useHabitStore((s) => s.completions);
  const addHabit = useHabitStore((s) => s.addHabit);
  const updateHabit = useHabitStore((s) => s.updateHabit);
  const deleteHabit = useHabitStore((s) => s.deleteHabit);
  const toggle = useHabitStore((s) => s.toggle);

  const [today, setToday] = useState(() => todayDate());
  const [view, setView] = useState<View>("week");
  const [weekAnchor, setWeekAnchor] = useState(() => todayDate());
  const [monthAnchor, setMonthAnchor] = useState(() => todayDate());
  const [selectedDate, setSelectedDate] = useState(() => todayDate());
  const [editor, setEditor] = useState<Habit | "new" | null>(null);
  const [deleting, setDeleting] = useState<Habit | null>(null);

  useEffect(() => {
    void useHabitStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = todayDate();
      setToday((prev) => (dateKey(prev) === dateKey(next) ? prev : next));
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const todayCount = useMemo(
    () => dayCompletionCount(habits, completions, today),
    [habits, completions, today],
  );
  const weekCount = useMemo(() => {
    const days = weekDays(today).filter((day) => !isFutureDay(day, today));
    let done = 0;
    let total = 0;
    for (const day of days) {
      const count = dayCompletionCount(habits, completions, day);
      done += count.done;
      total += count.total;
    }
    return { done, total };
  }, [habits, completions, today]);
  const perfect = useMemo(
    () => overallStreak(habits, completions, today),
    [habits, completions, today],
  );

  function handleSubmit(draft: { name: string; color: HabitColor; icon: HabitIconId }) {
    if (editor && editor !== "new") {
      updateHabit(editor.id, draft);
      toast("Ritual updated");
      return;
    }
    addHabit(draft);
    toast("Ritual added");
  }

  function handleDelete() {
    if (!deleting) return;
    deleteHabit(deleting.id);
    toast("Ritual removed");
    setDeleting(null);
  }

  const remaining = todayCount.total - todayCount.done;
  const status =
    todayCount.total === 0
      ? "Add a ritual to begin"
      : remaining === 0
        ? "Every mark kept"
        : remaining === todayCount.total
          ? "Nothing marked yet"
          : `${todayCount.done} of ${todayCount.total} kept`;

  return (
    <TooltipProvider delayDuration={250}>
      <div className="min-h-dvh bg-bg text-fg">
        <main className="mx-auto w-full max-w-3xl px-5 pt-8 pb-20 md:pt-12">
          <header className="mb-10">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-display text-xl tracking-tight text-primary italic">Lumen</p>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="New ritual"
                onClick={() => setEditor("new")}
              >
                <Plus className="size-4" />
              </Button>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted">{format(today, "MMMM yyyy")}</p>
                <h1 className="font-display mt-1 text-4xl leading-tight font-medium tracking-tight md:text-5xl">
                  {format(today, "EEEE")}
                  <span className="text-muted italic"> the {format(today, "do")}</span>
                </h1>
                <p className="mt-3 text-sm text-muted">{status}</p>
              </div>
              <ProgressRing done={todayCount.done} total={todayCount.total} />
            </div>
          </header>

          {habits.length === 0 ? (
            <EmptyState onAdd={() => setEditor("new")} />
          ) : (
            <>
              <div className="mb-6 flex justify-center">
                <div className="inline-flex rounded-lg bg-fg/5 p-1">
                  {(["week", "month"] as const).map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setView(id)}
                      className={cn(
                        "h-9 min-w-20 rounded-md px-4 text-sm font-medium capitalize transition-[background-color,color,box-shadow] duration-[150ms] ease-[var(--ease-out)]",
                        view === id
                          ? "bg-elevated text-fg shadow-[var(--shadow-border)]"
                          : "text-muted hover:text-fg",
                      )}
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>

              {view === "week" ? (
                <WeekView
                  habits={habits}
                  completions={completions}
                  weekAnchor={weekAnchor}
                  today={today}
                  onWeekAnchorChange={setWeekAnchor}
                  onToggle={toggle}
                  onEdit={setEditor}
                  onDelete={setDeleting}
                />
              ) : (
                <MonthView
                  habits={habits}
                  completions={completions}
                  monthAnchor={monthAnchor}
                  selectedDate={selectedDate}
                  today={today}
                  onMonthAnchorChange={setMonthAnchor}
                  onSelectDate={setSelectedDate}
                  onToggle={toggle}
                />
              )}

              <div className="mt-8 flex flex-col items-center gap-4">
                <Button variant="outline" onClick={() => setEditor("new")}>
                  <Plus className="size-4" />
                  New ritual
                </Button>
                <p className="text-center text-sm text-muted">
                  <span className="tabular-nums">{weekCount.done}</span> of{" "}
                  <span className="tabular-nums">{weekCount.total}</span> marks this week
                  {perfect > 0 ? (
                    <>
                      {" "}
                      · <span className="tabular-nums">{perfect}</span>-day perfect run
                    </>
                  ) : null}
                </p>
              </div>
            </>
          )}
        </main>
      </div>

      <HabitDialog
        open={editor !== null}
        habit={editor && editor !== "new" ? editor : null}
        onOpenChange={(open) => {
          if (!open) setEditor(null);
        }}
        onSubmit={handleSubmit}
      />

      <AlertDialog open={Boolean(deleting)} onOpenChange={(open) => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this ritual?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleting
                ? `${deleting.name} and its history will be removed from this device.`
                : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster
        theme="light"
        position="bottom-center"
        offset={24}
        toastOptions={{
          classNames: {
            toast: "bg-elevated text-fg shadow-[var(--shadow-elevated)] border-border",
            title: "text-fg",
          },
        }}
      />
    </TooltipProvider>
  );
}

function ProgressRing({ done, total }: { done: number; total: number }) {
  const radius = 16;
  const circ = 2 * Math.PI * radius;
  const pct = total === 0 ? 0 : Math.min(1, done / total);
  return (
    <div className="relative size-14 shrink-0" aria-hidden="true">
      <svg viewBox="0 0 40 40" className="size-14 -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          className="stroke-border-strong"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          className="stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct)}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium tabular-nums">
        {total === 0 ? "0" : `${done}/${total}`}
      </span>
    </div>
  );
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="mb-8 grid grid-cols-7 gap-1.5" aria-hidden="true">
        {Array.from({ length: 21 }, (_, i) => (
          <div
            key={i}
            className={cn(
              "size-7 rounded-sm",
              i === 10 || i === 11 || i === 17
                ? "bg-primary"
                : "ring-1 ring-inset ring-border-strong",
            )}
          />
        ))}
      </div>
      <h2 className="font-display text-2xl font-medium tracking-tight">Begin a ritual</h2>
      <p className="mt-2 max-w-sm text-muted">
        Name something you want to keep. Mark each day you do it, and watch the week fill in.
      </p>
      <Button className="mt-6" onClick={onAdd}>
        <Plus className="size-4" />
        New ritual
      </Button>
    </div>
  );
}
