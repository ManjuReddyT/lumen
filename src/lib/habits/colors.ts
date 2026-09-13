import type { HabitColor } from "./types";

export const COLOR_LABELS: Record<HabitColor, string> = {
  forest: "Forest",
  ocean: "Ocean",
  clay: "Clay",
  sage: "Sage",
  wine: "Wine",
  slate: "Slate",
};

export const COLOR_STYLES: Record<
  HabitColor,
  { fill: string; text: string; ring: string; soft: string }
> = {
  forest: {
    fill: "bg-habit-forest",
    text: "text-habit-forest",
    ring: "ring-habit-forest",
    soft: "bg-habit-forest/15",
  },
  ocean: {
    fill: "bg-habit-ocean",
    text: "text-habit-ocean",
    ring: "ring-habit-ocean",
    soft: "bg-habit-ocean/15",
  },
  clay: {
    fill: "bg-habit-clay",
    text: "text-habit-clay",
    ring: "ring-habit-clay",
    soft: "bg-habit-clay/15",
  },
  sage: {
    fill: "bg-habit-sage",
    text: "text-habit-sage",
    ring: "ring-habit-sage",
    soft: "bg-habit-sage/15",
  },
  wine: {
    fill: "bg-habit-wine",
    text: "text-habit-wine",
    ring: "ring-habit-wine",
    soft: "bg-habit-wine/15",
  },
  slate: {
    fill: "bg-habit-slate",
    text: "text-habit-slate",
    ring: "ring-habit-slate",
    soft: "bg-habit-slate/15",
  },
};
