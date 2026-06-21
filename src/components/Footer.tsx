export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-heading font-black text-2xl gold-text mb-3">TGI</div>
            <p className="text-white/40 text-sm leading-relaxed">
              Das Nummer 1 Sales Team — von Gießen in die Welt.
              Nicht überlegen. TUN.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-white text-sm mb-4">Navigation</div>
            <ul className="space-y-2">
              {[
                ["Geschichte", "#history"],
                ["Worldwide", "#worldwide"],
                ["Team", "#team"],
                ["Sales Agent", "#sales-agent"],
                ["Erfahrung", "#experience"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 text-sm hover:text-[oklch(0.85_0.18_88)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white text-sm mb-4">Kontakt</div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.tgi.li"
                  className="text-white/40 text-sm hover:text-[oklch(0.85_0.18_88)] transition-colors"
                >
                  www.tgi.li
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tgi.li"
                  className="text-white/40 text-sm hover:text-[oklch(0.85_0.18_88)] transition-colors"
                >
                  info@tgi.li
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="#team"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.4)] text-[oklch(0.85_0.18_88)] hover:bg-[oklch(0.78_0.17_85/0.2)] transition-all duration-200"
              >
                Jetzt starten →
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-white/25 text-xs">
          <span>© {new Date().getFullYear()} TGI. Alle Rechte vorbehalten.</span>
          <span className="gold-text font-semibold opacity-60">Nicht überlegen. TUN.</span>
        </div>
      </div>
    </footer>
  );
}
