export function Playground() {
  return (
    <div className="grid gap-6 rounded-2xl border-2 border-ink/15 bg-white p-6 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <p className="text-ink/80">
          This paragraph is plain text, so it keeps the idle cursor. Click and hold anywhere to see the click state.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-lg bg-ink px-5 py-2.5 font-semibold text-white">Primary button</button>
          <button className="rounded-lg border-2 border-ink px-5 py-2.5 font-semibold">Secondary</button>
          <a href="#playground" className="self-center font-semibold text-signal underline underline-offset-4">
            A link
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="rounded-lg border-2 border-ink/20 px-4 py-2.5 outline-none focus:border-signal"
          placeholder="Type something here"
        />
        <textarea
          rows={3}
          className="rounded-lg border-2 border-ink/20 px-4 py-2.5 outline-none focus:border-signal"
          placeholder="Or write a longer note"
        />
      </div>
    </div>
  )
}
