import type { CursorDef } from "../core/types";
import { Cat } from "./Cat";
import { DotRing } from "./DotRing";
import { NeonTrail } from "./NeonTrail";
import { Orb } from "./Orb";
import { Ripple } from "./Ripple";
import { Square } from "./Square";
import { Starburst } from "./Starburst";

export const cursors: CursorDef[] = [
  {
    id: "dot-ring",
    name: "Dot & Ring",
    description: "A sharp dot with a springy ring that trails behind.",
    states: ["idle", "hover", "text", "click"],
    component: DotRing,
  },
  {
    id: "square",
    name: "Square",
    description: "An outlined square that spins on links and thins out over text.",
    states: ["idle", "hover", "text", "click"],
    component: Square,
  },
  {
    id: "orb",
    name: "Orb",
    description: "A soft glow that swells over clickable things.",
    states: ["idle", "hover"],
    component: Orb,
  },
  {
    id: "starburst",
    name: "Starburst",
    description: "A pinned star with a spinning outline that speeds up over interactive elements.",
    states: ["idle", "hover", "text", "click"],
    component: Starburst,
  },
  {
    id: "neon-trail",
    name: "Neon Trail",
    description: "A glowing tail of dots that stretches behind the pointer.",
    states: ["idle", "hover", "click"],
    component: NeonTrail,
  },
  {
    id: "ripple",
    name: "Ripple",
    description: "A small dot that sends out a wave when you press.",
    states: ["idle", "hover", "text", "click"],
    component: Ripple,
  },
  {
    id: "cat",
    name: "Cat",
    description: "A cat that changes its mood on links, text and clicks.",
    states: ["idle", "hover", "text", "click"],
    component: Cat,
  },
];
