export function LocaleStrip() {
  return (
    <div className="border-b border-[oklch(0.92_0_0)] bg-[oklch(0.97_0_0)] text-[oklch(0.21_0_0)]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 text-[11px] sm:text-xs">
        <p className="flex-1">
          Wähle ein anderes Land oder eine andere Region aus, um Inhalte für
          deinen Standort zu sehen.
        </p>
        <button
          type="button"
          className="flex items-center gap-1 rounded-md bg-white px-2 py-1 font-medium ring-1 ring-[oklch(0.88_0_0)]"
        >
          Österreich
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <button aria-label="Schließen" type="button" className="p-1">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6 18 18 M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
