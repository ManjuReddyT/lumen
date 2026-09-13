import { subDays } from "date-fns";
import { dateKey, todayDate } from "./dates";
import type { Completions, Habit } from "./types";

function hash01(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

export function buildSeed(today = todayDate()): { habits: Habit[]; completions: Completions } {
  const createdAt = subDays(today, 48).toISOString();
  const habits: Habit[] = [
    {
      id: "seed-walk",
      name: "Morning walk",
      color: "forest",
      icon: "footprints",
      createdAt,
    },
    {
      id: "seed-read",
      name: "Read 20 minutes",
      color: "clay",
      icon: "book-open",
      createdAt,
    },
    {
      id: "seed-water",
      name: "Drink water",
      color: "ocean",
      icon: "droplets",
      createdAt,
    },
    {
      id: "seed-wind",
      name: "Wind down",
      color: "wine",
      icon: "moon",
      createdAt,
    },
  ];

  const rates: Record<string, number> = {
    "seed-walk": 0.78,
    "seed-read": 0.62,
    "seed-water": 0.86,
    "seed-wind": 0.58,
  };

  const completions: Completions = {};
  for (const habit of habits) {
    const map: Record<string, true> = {};
    for (let i = 1; i <= 42; i += 1) {
      const day = subDays(today, i);
      const key = dateKey(day);
      if (hash01(habit.id + key) < (rates[habit.id] ?? 0.7)) {
        map[key] = true;
      }
    }
    completions[habit.id] = map;
  }

  // A visible current streak on the walk, with today already kept.
  for (let i = 0; i < 6; i += 1) {
    completions["seed-walk"][dateKey(subDays(today, i))] = true;
  }
  // Water is kept today; two rituals left open so the first tap is obvious.
  completions["seed-water"][dateKey(today)] = true;
  delete completions["seed-read"][dateKey(today)];
  delete completions["seed-wind"][dateKey(today)];
  // Break water yesterday so its streak stays modest.
  delete completions["seed-water"][dateKey(subDays(today, 7))];

  return { habits, completions };
}
