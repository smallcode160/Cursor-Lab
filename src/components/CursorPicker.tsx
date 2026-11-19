import { useCursor } from "../core/CursorProvider";
import { cursors } from "../cursors/registry";
import { CursorPreview, SystemPreview } from "./CursorPreview";

const baseCard =
  "flex flex-col gap-2 rounded-xl border-2 p-4 text-left transition-colors disabled:opacity-50";

export function CursorPicker() {
  const { activeId, setActiveId, isDesktop } = useCursor();
  const cardClass = (selected: boolean) =>
    `${baseCard} ${selected ? "border-ink bg-white" : "border-ink/15 bg-white/50 hover:border-ink/50"}`;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <button
        className={cardClass(activeId === null)}
        onClick={() => setActiveId(null)}
        disabled={!isDesktop}
      >
        <span className="text-lg font-semibold">System default</span>
        <span className="text-sm text-ink/70">Your normal browser cursor.</span>
        <SystemPreview />
      </button>
      {cursors.map((c) => (
        <button
          key={c.id}
          className={cardClass(activeId === c.id)}
          onClick={() => setActiveId(c.id)}
          disabled={!isDesktop}
        >
          <span className="text-lg font-semibold">{c.name}</span>
          <span className="text-sm text-ink/70">{c.description}</span>
          <CursorPreview def={c} />
          <span className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {c.states.map((s) => (
              <span key={s} className="rounded-md bg-ink/10 px-2 py-0.5 text-xs">
                {s}
              </span>
            ))}
          </span>
        </button>
      ))}
    </div>
  );
}
