import type { LucideIcon } from "lucide-react";
import {
  Bike,
  BookOpen,
  Brain,
  Coffee,
  Droplets,
  Dumbbell,
  Flame,
  Footprints,
  Heart,
  Leaf,
  Moon,
  Music,
  PenLine,
  Sun,
  Utensils,
  Wind,
} from "lucide-react";
import type { HabitIconId } from "./types";

export const HABIT_ICONS: { id: HabitIconId; icon: LucideIcon; label: string }[] = [
  { id: "footprints", icon: Footprints, label: "Walk" },
  { id: "book-open", icon: BookOpen, label: "Read" },
  { id: "droplets", icon: Droplets, label: "Water" },
  { id: "moon", icon: Moon, label: "Rest" },
  { id: "leaf", icon: Leaf, label: "Nature" },
  { id: "dumbbell", icon: Dumbbell, label: "Train" },
  { id: "coffee", icon: Coffee, label: "Coffee" },
  { id: "brain", icon: Brain, label: "Focus" },
  { id: "heart", icon: Heart, label: "Heart" },
  { id: "sun", icon: Sun, label: "Morning" },
  { id: "music", icon: Music, label: "Music" },
  { id: "pen-line", icon: PenLine, label: "Write" },
  { id: "bike", icon: Bike, label: "Ride" },
  { id: "utensils", icon: Utensils, label: "Cook" },
  { id: "flame", icon: Flame, label: "Fire" },
  { id: "wind", icon: Wind, label: "Breathe" },
];

const ICON_MAP = Object.fromEntries(HABIT_ICONS.map((item) => [item.id, item.icon])) as Record<
  HabitIconId,
  LucideIcon
>;

export function getHabitIcon(id: HabitIconId): LucideIcon {
  return ICON_MAP[id] ?? Leaf;
}
