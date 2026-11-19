import { CursorProvider, useCursor } from './core/CursorProvider'
import { CursorLayer } from './components/CursorLayer'
import { CursorPicker } from './components/CursorPicker'
import { Playground } from './components/Playground'

function Page() {
  const { isDesktop } = useCursor()

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">Cursor Lab</h1>
        <p className="max-w-xl text-lg text-ink/80">
          Pick a cursor, then move, hover, type and click to see how it reacts.
        </p>
      </header>

      {!isDesktop && (
        <p className="rounded-xl border-2 border-signal bg-white p-4 font-semibold text-signal" role="status">
          Custom cursors need a mouse. Open this page on a desktop or laptop to try them.
        </p>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Choose a cursor</h2>
        <CursorPicker />
      </section>

      <section id="playground" className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Try it</h2>
        <Playground />
      </section>
    </main>
  )
}

export default function App() {
  return (
    <CursorProvider>
      <div className="min-h-screen bg-mist font-sans text-ink">
        <Page />
        <CursorLayer />
      </div>
    </CursorProvider>
  )
}
