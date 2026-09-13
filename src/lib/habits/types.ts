export const HABIT_COLORS = [
  "forest",
  "ocean",
  "clay",
  "sage",
  "wine",
  "slate",
] as const;

export type HabitColor = (typeof HABIT_COLORS)[number];

export const HABIT_ICON_IDS = [
  "footprints",
  "book-open",
  "droplets",
  "moon",
  "leaf",
  "dumbbell",
  "coffee",
  "brain",
  "heart",
  "sun",
  "music",
  "pen-line",
  "bike",
  "utensils",
  "flame",
  "wind",
] as const;

export type HabitIconId = (typeof HABIT_ICON_IDS)[number];

export type Habit = {
  id: string;
  name: string;
  color: HabitColor;
  icon: HabitIconId;
  createdAt: string;
};

export type Completions = Record<string, Record<string, true>>;
