import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as Slot, P as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { C as Brain, S as Check, T as Bike, _ as Dumbbell, a as Trash2, b as ChevronRight, c as Pencil, d as Moon, f as Leaf, g as Ellipsis, h as Flame, l as PenLine, m as Footprints, n as Wind, o as Sun, p as Heart, r as Utensils, s as Plus, t as X, u as Music, v as Droplets, w as BookOpen, x as ChevronLeft, y as Coffee } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as endOfWeek, c as endOfMonth, d as startOfWeek, f as addMonths, i as format, l as isSameDay, n as subDays, o as startOfMonth, p as addDays, r as isAfter, s as eachDayOfInterval, t as subMonths, u as startOfDay } from "../_libs/date-fns.mjs";
import { a as Separator2, i as Root2$1, n as Item2, o as Trigger, r as Portal2$1, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BXdXE8UN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-[150ms] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			ghost: "bg-transparent text-muted hover:bg-fg/5 hover:text-fg",
			danger: "bg-danger text-danger-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-fg/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-elevated p-5 text-fg shadow-[var(--shadow-elevated)] duration-[250ms] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 flex size-9 items-center justify-center rounded-sm text-muted transition-colors duration-[150ms] hover:bg-fg/5 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-medium tracking-tight text-fg", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref,
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-[150ms] ease-[var(--ease-out)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
var COLOR_LABELS = {
	forest: "Forest",
	ocean: "Ocean",
	clay: "Clay",
	sage: "Sage",
	wine: "Wine",
	slate: "Slate"
};
var COLOR_STYLES = {
	forest: {
		fill: "bg-habit-forest",
		text: "text-habit-forest",
		ring: "ring-habit-forest",
		soft: "bg-habit-forest/15"
	},
	ocean: {
		fill: "bg-habit-ocean",
		text: "text-habit-ocean",
		ring: "ring-habit-ocean",
		soft: "bg-habit-ocean/15"
	},
	clay: {
		fill: "bg-habit-clay",
		text: "text-habit-clay",
		ring: "ring-habit-clay",
		soft: "bg-habit-clay/15"
	},
	sage: {
		fill: "bg-habit-sage",
		text: "text-habit-sage",
		ring: "ring-habit-sage",
		soft: "bg-habit-sage/15"
	},
	wine: {
		fill: "bg-habit-wine",
		text: "text-habit-wine",
		ring: "ring-habit-wine",
		soft: "bg-habit-wine/15"
	},
	slate: {
		fill: "bg-habit-slate",
		text: "text-habit-slate",
		ring: "ring-habit-slate",
		soft: "bg-habit-slate/15"
	}
};
var HABIT_ICONS = [
	{
		id: "footprints",
		icon: Footprints,
		label: "Walk"
	},
	{
		id: "book-open",
		icon: BookOpen,
		label: "Read"
	},
	{
		id: "droplets",
		icon: Droplets,
		label: "Water"
	},
	{
		id: "moon",
		icon: Moon,
		label: "Rest"
	},
	{
		id: "leaf",
		icon: Leaf,
		label: "Nature"
	},
	{
		id: "dumbbell",
		icon: Dumbbell,
		label: "Train"
	},
	{
		id: "coffee",
		icon: Coffee,
		label: "Coffee"
	},
	{
		id: "brain",
		icon: Brain,
		label: "Focus"
	},
	{
		id: "heart",
		icon: Heart,
		label: "Heart"
	},
	{
		id: "sun",
		icon: Sun,
		label: "Morning"
	},
	{
		id: "music",
		icon: Music,
		label: "Music"
	},
	{
		id: "pen-line",
		icon: PenLine,
		label: "Write"
	},
	{
		id: "bike",
		icon: Bike,
		label: "Ride"
	},
	{
		id: "utensils",
		icon: Utensils,
		label: "Cook"
	},
	{
		id: "flame",
		icon: Flame,
		label: "Fire"
	},
	{
		id: "wind",
		icon: Wind,
		label: "Breathe"
	}
];
var ICON_MAP = Object.fromEntries(HABIT_ICONS.map((item) => [item.id, item.icon]));
function getHabitIcon(id) {
	return ICON_MAP[id] ?? Leaf;
}
var HABIT_COLORS = [
	"forest",
	"ocean",
	"clay",
	"sage",
	"wine",
	"slate"
];
function HabitDialog({ open, habit, onOpenChange, onSubmit }) {
	const isEdit = Boolean(habit);
	const [name, setName] = (0, import_react.useState)("");
	const [color, setColor] = (0, import_react.useState)("forest");
	const [icon, setIcon] = (0, import_react.useState)("footprints");
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setName(habit?.name ?? "");
		setColor(habit?.color ?? "forest");
		setIcon(habit?.icon ?? "footprints");
	}, [open, habit]);
	function handleSubmit(event) {
		event.preventDefault();
		const trimmed = name.trim();
		if (!trimmed) return;
		onSubmit({
			name: trimmed,
			color,
			icon
		});
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isEdit ? "Edit ritual" : "New ritual" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: isEdit ? "Rename it, or give it a new color and mark." : "Give it a name you will recognize at a glance." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "habit-name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "habit-name",
								value: name,
								onChange: (event) => setName(event.target.value),
								placeholder: "Morning walk",
								maxLength: 40,
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Color" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: HABIT_COLORS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setColor(id),
									"aria-label": COLOR_LABELS[id],
									"aria-pressed": color === id,
									className: cn("size-9 rounded-full transition-[transform,box-shadow] duration-[150ms] ease-[var(--ease-out)]", COLOR_STYLES[id].fill, color === id ? "ring-2 ring-fg ring-offset-2 ring-offset-elevated" : "opacity-80 hover:opacity-100")
								}, id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-8 gap-1.5",
								children: HABIT_ICONS.map((item) => {
									const Icon = item.icon;
									const selected = icon === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setIcon(item.id),
										"aria-label": item.label,
										"aria-pressed": selected,
										className: cn("flex size-10 items-center justify-center rounded-sm transition-[background-color,color] duration-[150ms] ease-[var(--ease-out)]", selected ? cn(COLOR_STYLES[color].soft, COLOR_STYLES[color].text) : "text-muted hover:bg-fg/5 hover:text-fg"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-4",
											strokeWidth: 1.75
										})
									}, item.id);
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: !name.trim(),
					children: isEdit ? "Save" : "Add ritual"
				})] })
			]
		}) })
	});
}
function dateKey(date) {
	return format(date, "yyyy-MM-dd");
}
function todayDate() {
	return startOfDay(/* @__PURE__ */ new Date());
}
function isFutureDay(date, today = todayDate()) {
	return isAfter(startOfDay(date), today);
}
function isTodayDay(date, today = todayDate()) {
	return isSameDay(date, today);
}
function weekDays(anchor) {
	const start = startOfWeek(anchor, { weekStartsOn: 1 });
	return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}
function monthGrid(anchor) {
	const start = startOfWeek(startOfMonth(anchor), { weekStartsOn: 1 });
	const end = endOfWeek(endOfMonth(anchor), { weekStartsOn: 1 });
	return eachDayOfInterval({
		start,
		end
	});
}
function monthDays(anchor) {
	return eachDayOfInterval({
		start: startOfMonth(anchor),
		end: endOfMonth(anchor)
	});
}
function isInMonth(date, anchor) {
	return date.getMonth() === anchor.getMonth() && date.getFullYear() === anchor.getFullYear();
}
function CheckCell({ habit, date, done, onToggle, size = "week" }) {
	const key = dateKey(date);
	const future = isFutureDay(date);
	const today = isTodayDay(date);
	const styles = COLOR_STYLES[habit.color];
	const compact = size === "month";
	const large = size === "day";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled: future,
		onClick: () => onToggle(habit.id, key),
		"aria-pressed": done,
		"aria-label": `${habit.name}, ${format(date, "EEEE d MMM")}${done ? ", kept" : ", not kept"}`,
		className: cn("relative flex items-center justify-center rounded-sm transition-[transform,background-color,box-shadow,opacity] duration-[150ms] ease-[var(--ease-out)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", !future && "active:scale-[0.96] hover:opacity-90", future && "cursor-default opacity-30", compact && "aspect-square min-h-0 w-full", !compact && !large && "size-11 md:size-11", large && "size-12", done && styles.fill, !done && "bg-transparent ring-1 ring-inset ring-fg/12", !done && today && !future && cn("ring-2", styles.ring)),
		children: done && !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5 text-primary-fg",
			strokeWidth: 2.75
		}) : null
	});
}
function completedSet(completions, habitId) {
	return new Set(Object.keys(completions[habitId] ?? {}));
}
function currentStreak(completions, habitId, today = todayDate()) {
	const done = completedSet(completions, habitId);
	let cursor = today;
	if (!done.has(dateKey(cursor))) cursor = subDays(cursor, 1);
	let streak = 0;
	while (done.has(dateKey(cursor))) {
		streak += 1;
		cursor = subDays(cursor, 1);
	}
	return streak;
}
function longestStreak(completions, habitId) {
	const keys = Object.keys(completions[habitId] ?? {}).sort();
	if (keys.length === 0) return 0;
	let best = 1;
	let run = 1;
	for (let i = 1; i < keys.length; i += 1) {
		const prev = /* @__PURE__ */ new Date(keys[i - 1] + "T00:00:00");
		const next = /* @__PURE__ */ new Date(keys[i] + "T00:00:00");
		if (dateKey(addDays(prev, 1)) === dateKey(next)) {
			run += 1;
			if (run > best) best = run;
		} else run = 1;
	}
	return best;
}
function countInRange(done, start, end) {
	let total = 0;
	let count = 0;
	let cursor = start;
	while (cursor.getTime() <= end.getTime()) {
		total += 1;
		if (done.has(dateKey(cursor))) count += 1;
		cursor = addDays(cursor, 1);
	}
	return {
		done: count,
		total
	};
}
function getHabitStats(habit, completions, today = todayDate()) {
	const done = completedSet(completions, habit.id);
	const weekStart = startOfWeek(today, { weekStartsOn: 1 });
	const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
	const last30Start = subDays(today, 29);
	const week = countInRange(done, weekStart, today);
	const month = countInRange(done, monthStart, today);
	const last30 = countInRange(done, last30Start, today);
	return {
		currentStreak: currentStreak(completions, habit.id, today),
		longestStreak: longestStreak(completions, habit.id),
		weekDone: week.done,
		weekTotal: week.total,
		monthDone: month.done,
		monthTotal: month.total,
		last30Done: last30.done,
		last30Total: last30.total,
		total: done.size
	};
}
function dayCompletionCount(habits, completions, date) {
	const key = dateKey(date);
	let done = 0;
	for (const habit of habits) if (completions[habit.id]?.[key]) done += 1;
	return {
		done,
		total: habits.length
	};
}
function overallStreak(habits, completions, today = todayDate()) {
	if (habits.length === 0) return 0;
	let cursor = today;
	const key = dateKey(cursor);
	if (!habits.every((h) => completions[h.id]?.[key])) cursor = subDays(cursor, 1);
	let streak = 0;
	while (true) {
		const k = dateKey(cursor);
		if (!habits.every((h) => completions[h.id]?.[k])) break;
		streak += 1;
		cursor = subDays(cursor, 1);
	}
	return streak;
}
function MonthView({ habits, completions, monthAnchor, selectedDate, today, onMonthAnchorChange, onSelectDate, onToggle }) {
	const grid = monthGrid(monthAnchor);
	const thisMonth = startOfMonth(today);
	const anchorMonth = startOfMonth(monthAnchor);
	const canGoForward = anchorMonth.getTime() < thisMonth.getTime();
	const days = monthDays(monthAnchor);
	const weekdayLabels = grid.slice(0, 7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-medium tracking-tight",
					children: format(monthAnchor, "MMMM yyyy")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							"aria-label": "Previous month",
							onClick: () => onMonthAnchorChange(subMonths(anchorMonth, 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => onMonthAnchorChange(today),
							children: "Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							"aria-label": "Next month",
							disabled: !canGoForward,
							onClick: () => onMonthAnchorChange(addMonths(anchorMonth, 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-7 gap-1",
				children: [weekdayLabels.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pb-1 text-center text-xs text-subtle",
					children: format(day, "EEEEE")
				}, `lbl-${day.toISOString()}`)), grid.map((day) => {
					const inMonth = isInMonth(day, monthAnchor);
					const future = isFutureDay(day, today);
					const { done, total } = dayCompletionCount(habits, completions, day);
					const selected = dateKey(day) === dateKey(selectedDate);
					const isToday = isTodayDay(day, today);
					const level = !inMonth || future || total === 0 || done === 0 ? 0 : done / total < .5 ? 1 : done < total ? 2 : 3;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !inMonth || future,
						onClick: () => onSelectDate(day),
						"aria-label": `${format(day, "d MMMM")}${total && !future ? `, ${done} of ${total} kept` : ""}`,
						"aria-pressed": selected,
						className: cn("relative flex aspect-square min-h-11 flex-col items-center justify-center rounded-md text-sm tabular-nums transition-[transform,background-color,box-shadow] duration-[150ms] ease-[var(--ease-out)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", !inMonth && "opacity-0", inMonth && future && "text-subtle", inMonth && !future && level === 0 && "bg-transparent text-muted ring-1 ring-fg/10 ring-inset", inMonth && level === 1 && "bg-primary/20 text-fg", inMonth && level === 2 && "bg-primary/50 text-fg", inMonth && level === 3 && "bg-primary text-primary-fg", selected && inMonth && "ring-2 ring-fg ring-offset-2 ring-offset-bg", isToday && !selected && "font-semibold"),
						children: format(day, "d")
					}, day.toISOString());
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedDayList, {
				habits,
				completions,
				date: selectedDate,
				today,
				onToggle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden md:flex md:flex-col md:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-subtle uppercase",
					children: "The month at a glance"
				}), habits.map((habit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthStrip, {
					habit,
					completions,
					days,
					today,
					onToggle
				}, habit.id))]
			})
		]
	});
}
function SelectedDayList({ habits, completions, date, today, onToggle }) {
	const isToday = isTodayDay(date, today);
	const { done, total } = dayCompletionCount(habits, completions, date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-baseline justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-medium tracking-tight",
			children: isToday ? "Today" : format(date, "EEEE d MMM")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm tabular-nums text-muted",
			children: [
				done,
				"/",
				total,
				" kept"
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: habits.map((habit) => {
			const Icon = getHabitIcon(habit.icon);
			const styles = COLOR_STYLES[habit.color];
			const kept = Boolean(completions[habit.id]?.[dateKey(date)]);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-9 shrink-0 items-center justify-center rounded-sm", styles.soft, styles.text),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate font-medium",
						children: habit.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCell, {
						habit,
						date,
						done: kept,
						onToggle,
						size: "day"
					})
				]
			}, habit.id);
		})
	})] });
}
function MonthStrip({ habit, completions, days, today, onToggle }) {
	const Icon = getHabitIcon(habit.icon);
	const styles = COLOR_STYLES[habit.color];
	const stats = getHabitStats(habit, completions, today);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex size-8 shrink-0 items-center justify-center rounded-sm", styles.soft, styles.text),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-3.5",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "w-36 shrink-0 truncate text-sm",
				children: habit.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid min-w-0 flex-1 grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-0.5",
				children: days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCell, {
					habit,
					date: day,
					done: Boolean(completions[habit.id]?.[dateKey(day)]),
					onToggle,
					size: "month"
				}, day.toISOString()))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "w-12 shrink-0 text-right text-xs tabular-nums text-muted",
				children: [
					stats.monthDone,
					"/",
					stats.monthTotal
				]
			})
		]
	});
}
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-40 overflow-hidden rounded-lg bg-elevated p-1 text-fg shadow-[var(--shadow-elevated)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, variant = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none select-none focus:bg-fg/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-40", variant === "danger" && "text-danger focus:bg-danger/8 focus:text-danger", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger$1;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-sm bg-fg px-2 py-1 text-xs text-bg shadow-[var(--shadow-border)]", className),
	...props
}) }));
TooltipContent.displayName = Content2$2.displayName;
function WeekView({ habits, completions, weekAnchor, today, onWeekAnchorChange, onToggle, onEdit, onDelete }) {
	const days = weekDays(weekAnchor);
	const thisWeekStart = startOfWeek(today, { weekStartsOn: 1 });
	const anchorStart = startOfWeek(weekAnchor, { weekStartsOn: 1 });
	const isCurrentWeek = dateKey(thisWeekStart) === dateKey(anchorStart);
	const canGoForward = anchorStart.getTime() < thisWeekStart.getTime();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					format(days[0], "d MMM"),
					" – ",
					format(days[6], "d MMM")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": "Previous week",
						onClick: () => onWeekAnchorChange(subDays(anchorStart, 7)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: cn("min-w-24", isCurrentWeek && "text-fg"),
						onClick: () => onWeekAnchorChange(today),
						children: isCurrentWeek ? "This week" : "Jump to now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": "Next week",
						disabled: !canGoForward,
						onClick: () => onWeekAnchorChange(addDays(anchorStart, 7)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 hidden items-end gap-1.5 px-1 text-xs text-subtle md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-56 shrink-0",
					children: "Ritual"
				}),
				days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex w-11 shrink-0 flex-col items-center", isTodayDay(day, today) && "font-medium text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format(day, "EEEEE") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: format(day, "d")
					})]
				}, dateKey(day))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-10 shrink-0 text-center",
					children: "Streak"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-9 shrink-0" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 grid grid-cols-7 gap-1.5 md:hidden",
			children: days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("text-center text-xs text-subtle", isTodayDay(day, today) && "font-medium text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: format(day, "EEEEE") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tabular-nums",
					children: format(day, "d")
				})]
			}, dateKey(day)))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3 md:gap-1",
			children: habits.map((habit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HabitWeekRow, {
				habit,
				completions,
				days,
				today,
				onToggle,
				onEdit,
				onDelete
			}, habit.id))
		})
	] });
}
function HabitWeekRow({ habit, completions, days, today, onToggle, onEdit, onDelete }) {
	const Icon = getHabitIcon(habit.icon);
	const styles = COLOR_STYLES[habit.color];
	const stats = getHabitStats(habit, completions, today);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] md:flex md:items-center md:gap-1.5 md:rounded-none md:bg-transparent md:px-1 md:py-1 md:shadow-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3 md:w-56 md:shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-9 shrink-0 items-center justify-center rounded-md", styles.soft, styles.text),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: habit.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-subtle md:hidden",
							children: [
								stats.weekDone,
								"/",
								stats.weekTotal,
								" this week"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-sm font-medium",
							children: stats.currentStreak
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowMenu, {
							habit,
							onEdit,
							onDelete
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-7 gap-1.5 md:mt-0 md:flex md:gap-1.5",
				children: days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center md:w-11 md:shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCell, {
						habit,
						date: day,
						done: Boolean(completions[habit.id]?.[dateKey(day)]),
						onToggle
					})
				}, dateKey(day)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden w-10 shrink-0 justify-center md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-sm font-medium text-fg",
						children: stats.currentStreak
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: [
					"Best ",
					stats.longestStreak,
					" · ",
					stats.monthDone,
					"/",
					stats.monthTotal,
					" this month"
				] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden w-9 shrink-0 justify-end md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowMenu, {
					habit,
					onEdit,
					onDelete
				})
			})
		]
	});
}
function RowMenu({ habit, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": `Actions for ${habit.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onEdit(habit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }), "Edit"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				variant: "danger",
				onSelect: () => onDelete(habit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Delete"]
			})
		]
	})] });
}
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	ref,
	className: cn("fixed inset-0 z-50 bg-fg/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-elevated p-5 text-fg shadow-[var(--shadow-elevated)] duration-[250ms] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("font-display text-xl font-medium tracking-tight", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants({ variant: "danger" }), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "ghost" }), className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
function hash01(input) {
	let h = 2166136261;
	for (let i = 0; i < input.length; i += 1) {
		h ^= input.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0) / 4294967295;
}
function buildSeed(today = todayDate()) {
	const createdAt = subDays(today, 48).toISOString();
	const habits = [
		{
			id: "seed-walk",
			name: "Morning walk",
			color: "forest",
			icon: "footprints",
			createdAt
		},
		{
			id: "seed-read",
			name: "Read 20 minutes",
			color: "clay",
			icon: "book-open",
			createdAt
		},
		{
			id: "seed-water",
			name: "Drink water",
			color: "ocean",
			icon: "droplets",
			createdAt
		},
		{
			id: "seed-wind",
			name: "Wind down",
			color: "wine",
			icon: "moon",
			createdAt
		}
	];
	const rates = {
		"seed-walk": .78,
		"seed-read": .62,
		"seed-water": .86,
		"seed-wind": .58
	};
	const completions = {};
	for (const habit of habits) {
		const map = {};
		for (let i = 1; i <= 42; i += 1) {
			const key = dateKey(subDays(today, i));
			if (hash01(habit.id + key) < (rates[habit.id] ?? .7)) map[key] = true;
		}
		completions[habit.id] = map;
	}
	for (let i = 0; i < 6; i += 1) completions["seed-walk"][dateKey(subDays(today, i))] = true;
	completions["seed-water"][dateKey(today)] = true;
	delete completions["seed-read"][dateKey(today)];
	delete completions["seed-wind"][dateKey(today)];
	delete completions["seed-water"][dateKey(subDays(today, 7))];
	return {
		habits,
		completions
	};
}
var seed = buildSeed();
var useHabitStore = create()(persist((set, get) => ({
	habits: seed.habits,
	completions: seed.completions,
	hasSeeded: true,
	addHabit: (draft) => {
		const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `habit-${Date.now()}`;
		const habit = {
			id,
			name: draft.name.trim(),
			color: draft.color,
			icon: draft.icon,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((state) => ({ habits: [...state.habits, habit] }));
		return id;
	},
	updateHabit: (id, draft) => {
		set((state) => ({ habits: state.habits.map((habit) => habit.id === id ? {
			...habit,
			name: draft.name.trim(),
			color: draft.color,
			icon: draft.icon
		} : habit) }));
	},
	deleteHabit: (id) => {
		set((state) => {
			const { [id]: _removed, ...rest } = state.completions;
			return {
				habits: state.habits.filter((habit) => habit.id !== id),
				completions: rest
			};
		});
	},
	toggle: (habitId, key) => {
		set((state) => {
			const forHabit = { ...state.completions[habitId] ?? {} };
			if (forHabit[key]) delete forHabit[key];
			else forHabit[key] = true;
			return { completions: {
				...state.completions,
				[habitId]: forHabit
			} };
		});
	},
	isDone: (habitId, key) => Boolean(get().completions[habitId]?.[key])
}), {
	name: "lumen-habits-v1",
	skipHydration: true,
	partialize: (state) => ({
		habits: state.habits,
		completions: state.completions,
		hasSeeded: state.hasSeeded
	})
}));
function LumenApp() {
	const habits = useHabitStore((s) => s.habits);
	const completions = useHabitStore((s) => s.completions);
	const addHabit = useHabitStore((s) => s.addHabit);
	const updateHabit = useHabitStore((s) => s.updateHabit);
	const deleteHabit = useHabitStore((s) => s.deleteHabit);
	const toggle = useHabitStore((s) => s.toggle);
	const [today, setToday] = (0, import_react.useState)(() => todayDate());
	const [view, setView] = (0, import_react.useState)("week");
	const [weekAnchor, setWeekAnchor] = (0, import_react.useState)(() => todayDate());
	const [monthAnchor, setMonthAnchor] = (0, import_react.useState)(() => todayDate());
	const [selectedDate, setSelectedDate] = (0, import_react.useState)(() => todayDate());
	const [editor, setEditor] = (0, import_react.useState)(null);
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		useHabitStore.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			const next = todayDate();
			setToday((prev) => dateKey(prev) === dateKey(next) ? prev : next);
		}, 6e4);
		return () => window.clearInterval(id);
	}, []);
	const todayCount = (0, import_react.useMemo)(() => dayCompletionCount(habits, completions, today), [
		habits,
		completions,
		today
	]);
	const weekCount = (0, import_react.useMemo)(() => {
		const days = weekDays(today).filter((day) => !isFutureDay(day, today));
		let done = 0;
		let total = 0;
		for (const day of days) {
			const count = dayCompletionCount(habits, completions, day);
			done += count.done;
			total += count.total;
		}
		return {
			done,
			total
		};
	}, [
		habits,
		completions,
		today
	]);
	const perfect = (0, import_react.useMemo)(() => overallStreak(habits, completions, today), [
		habits,
		completions,
		today
	]);
	function handleSubmit(draft) {
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
	const status = todayCount.total === 0 ? "Add a ritual to begin" : remaining === 0 ? "Every mark kept" : remaining === todayCount.total ? "Nothing marked yet" : `${todayCount.done} of ${todayCount.total} kept`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
		delayDuration: 250,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-dvh bg-bg text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "mx-auto w-full max-w-3xl px-5 pt-8 pb-20 md:pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl tracking-tight text-primary italic",
								children: "Lumen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": "New ritual",
								onClick: () => setEditor("new"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: format(today, "MMMM yyyy")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display mt-1 text-4xl leading-tight font-medium tracking-tight md:text-5xl",
									children: [format(today, "EEEE"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted italic",
										children: [" the ", format(today, "do")]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: status
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRing, {
								done: todayCount.done,
								total: todayCount.total
							})]
						})]
					}), habits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onAdd: () => setEditor("new") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex rounded-lg bg-fg/5 p-1",
								children: ["week", "month"].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setView(id),
									className: cn("h-9 min-w-20 rounded-md px-4 text-sm font-medium capitalize transition-[background-color,color,box-shadow] duration-[150ms] ease-[var(--ease-out)]", view === id ? "bg-elevated text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg"),
									children: id
								}, id))
							})
						}),
						view === "week" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekView, {
							habits,
							completions,
							weekAnchor,
							today,
							onWeekAnchorChange: setWeekAnchor,
							onToggle: toggle,
							onEdit: setEditor,
							onDelete: setDeleting
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthView, {
							habits,
							completions,
							monthAnchor,
							selectedDate,
							today,
							onMonthAnchorChange: setMonthAnchor,
							onSelectDate: setSelectedDate,
							onToggle: toggle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => setEditor("new"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New ritual"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-center text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: weekCount.done
									}),
									" of",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: weekCount.total
									}),
									" marks this week",
									perfect > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										" ",
										"· ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: perfect
										}),
										"-day perfect run"
									] }) : null
								]
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HabitDialog, {
				open: editor !== null,
				habit: editor && editor !== "new" ? editor : null,
				onOpenChange: (open) => {
					if (!open) setEditor(null);
				},
				onSubmit: handleSubmit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: Boolean(deleting),
				onOpenChange: (open) => !open && setDeleting(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this ritual?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: deleting ? `${deleting.name} and its history will be removed from this device.` : null })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					onClick: handleDelete,
					children: "Delete"
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "light",
				position: "bottom-center",
				offset: 24,
				toastOptions: { classNames: {
					toast: "bg-elevated text-fg shadow-[var(--shadow-elevated)] border-border",
					title: "text-fg"
				} }
			})
		]
	});
}
function ProgressRing({ done, total }) {
	const radius = 16;
	const circ = 2 * Math.PI * radius;
	const pct = total === 0 ? 0 : Math.min(1, done / total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative size-14 shrink-0",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			className: "size-14 -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "20",
				r: radius,
				fill: "none",
				className: "stroke-border-strong",
				strokeWidth: "3"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "20",
				r: radius,
				fill: "none",
				className: "stroke-primary",
				strokeWidth: "3",
				strokeLinecap: "round",
				strokeDasharray: circ,
				strokeDashoffset: circ * (1 - pct)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-0 flex items-center justify-center text-xs font-medium tabular-nums",
			children: total === 0 ? "0" : `${done}/${total}`
		})]
	});
}
function EmptyState({ onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 grid grid-cols-7 gap-1.5",
				"aria-hidden": "true",
				children: Array.from({ length: 21 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("size-7 rounded-sm", i === 10 || i === 11 || i === 17 ? "bg-primary" : "ring-1 ring-inset ring-border-strong") }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Begin a ritual"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-muted",
				children: "Name something you want to keep. Mark each day you do it, and watch the week fill in."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-6",
				onClick: onAdd,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New ritual"]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LumenApp, {});
}
//#endregion
export { Home as component };
