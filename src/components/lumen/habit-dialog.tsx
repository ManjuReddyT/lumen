import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COLOR_LABELS, COLOR_STYLES } from "@/lib/habits/colors";
import { HABIT_ICONS } from "@/lib/habits/icons";
import { HABIT_COLORS } from "@/lib/habits/types";
import type { Habit, HabitColor, HabitIconId } from "@/lib/habits/types";
import { cn } from "@/lib/utils";

type HabitDialogProps = {
  open: boolean;
  habit: Habit | null;
  onOpenChange: (open: boolean) => void;
  onSubmit: (draft: { name: string; color: HabitColor; icon: HabitIconId }) => void;
};

export function HabitDialog({ open, habit, onOpenChange, onSubmit }: HabitDialogProps) {
  const isEdit = Boolean(habit);
  const [name, setName] = useState("");
  const [color, setColor] = useState<HabitColor>("forest");
  const [icon, setIcon] = useState<HabitIconId>("footprints");

  useEffect(() => {
    if (!open) return;
    setName(habit?.name ?? "");
    setColor(habit?.color ?? "forest");
    setIcon(habit?.icon ?? "footprints");
  }, [open, habit]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onSubmit({ name: trimmed, color, icon });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit ritual" : "New ritual"}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Rename it, or give it a new color and mark."
                : "Give it a name you will recognize at a glance."}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="habit-name">Name</Label>
              <Input
                id="habit-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Morning walk"
                maxLength={40}
                autoFocus
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Color</Label>
              <div className="flex flex-wrap gap-2">
                {HABIT_COLORS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setColor(id)}
                    aria-label={COLOR_LABELS[id]}
                    aria-pressed={color === id}
                    className={cn(
                      "size-9 rounded-full transition-[transform,box-shadow] duration-[150ms] ease-[var(--ease-out)]",
                      COLOR_STYLES[id].fill,
                      color === id
                        ? "ring-2 ring-fg ring-offset-2 ring-offset-elevated"
                        : "opacity-80 hover:opacity-100",
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Mark</Label>
              <div className="grid grid-cols-8 gap-1.5">
                {HABIT_ICONS.map((item) => {
                  const Icon = item.icon;
                  const selected = icon === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIcon(item.id)}
                      aria-label={item.label}
                      aria-pressed={selected}
                      className={cn(
                        "flex size-10 items-center justify-center rounded-sm transition-[background-color,color] duration-[150ms] ease-[var(--ease-out)]",
                        selected
                          ? cn(COLOR_STYLES[color].soft, COLOR_STYLES[color].text)
                          : "text-muted hover:bg-fg/5 hover:text-fg",
                      )}
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim()}>
              {isEdit ? "Save" : "Add ritual"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
