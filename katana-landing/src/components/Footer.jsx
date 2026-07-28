export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-xs text-slate-500 md:flex-row">
        <div className="font-display tracking-[0.35em] text-slate-300">
          KATANA<span className="text-glow">.</span>
        </div>

        <div className="flex items-center gap-8 uppercase tracking-[0.25em]">
          <a href="#craft" className="transition-colors hover:text-glow">
            Craft
          </a>
          <a href="#features" className="transition-colors hover:text-glow">
            Features
          </a>
          <a href="#legacy" className="transition-colors hover:text-glow">
            Legacy
          </a>
        </div>

        <div>© 2026 Katana Forge. All rights reserved.</div>
      </div>
    </footer>
  )
}
