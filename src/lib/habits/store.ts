import { create } from "zustand";
import { persist } from "zustand/middleware";
import { buildSeed } from "./seed";
import type { Completions, Habit, HabitColor, HabitIconId } from "./types";

type HabitDraft = {
  name: string;
  color: HabitColor;
  icon: HabitIconId;
};

type HabitState = {
  habits: Habit[];
  completions: Completions;
  hasSeeded: boolean;
  addHabit: (draft: HabitDraft) => string;
  updateHabit: (id: string, draft: HabitDraft) => void;
  deleteHabit: (id: string) => void;
  toggle: (habitId: string, dateKey: string) => void;
  isDone: (habitId: string, dateKey: string) => boolean;
};

const seed = buildSeed();

export const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: seed.habits,
      completions: seed.completions,
      hasSeeded: true,
      addHabit: (draft) => {
        const id =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `habit-${Date.now()}`;
        const habit: Habit = {
          id,
          name: draft.name.trim(),
          color: draft.color,
          icon: draft.icon,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ habits: [...state.habits, habit] }));
        return id;
      },
      updateHabit: (id, draft) => {
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === id
              ? {
                  ...habit,
                  name: draft.name.trim(),
                  color: draft.color,
                  icon: draft.icon,
                }
              : habit,
          ),
        }));
      },
      deleteHabit: (id) => {
        set((state) => {
          const { [id]: _removed, ...rest } = state.completions;
          return {
            habits: state.habits.filter((habit) => habit.id !== id),
            completions: rest,
          };
        });
      },
      toggle: (habitId, key) => {
        set((state) => {
          const forHabit = { ...(state.completions[habitId] ?? {}) };
          if (forHabit[key]) {
            delete forHabit[key];
          } else {
            forHabit[key] = true;
          }
          return {
            completions: { ...state.completions, [habitId]: forHabit },
          };
        });
      },
      isDone: (habitId, key) => Boolean(get().completions[habitId]?.[key]),
    }),
    {
      name: "lumen-habits-v1",
      skipHydration: true,
      partialize: (state) => ({
        habits: state.habits,
        completions: state.completions,
        hasSeeded: state.hasSeeded,
      }),
    },
  ),
);
