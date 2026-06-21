export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[oklch(0.08_0.005_270)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.78 0.17 85 / 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, oklch(1 0 0 / 0.03) 79px, oklch(1 0 0 / 0.03) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, oklch(1 0 0 / 0.03) 79px, oklch(1 0 0 / 0.03) 80px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.78_0.17_85/0.4)] bg-[oklch(0.78_0.17_85/0.08)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.17_85)] pulse-gold" />
          <span className="text-xs font-semibold text-[oklch(0.85_0.18_88)] tracking-widest uppercase">
            Das Nummer 1 Sales Team
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-heading font-black leading-[0.92] tracking-tight mb-6">
          <span className="block text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            Nicht
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl gold-shimmer">
            überlegen.
          </span>
          <span className="block text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            TUN.
          </span>
        </h1>

        {/* Subline */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
          Wir bauen dein Team — du verdienst von der Produktivität.
          <br className="hidden sm:block" />
          Keine Erfahrung nötig. Nur der Wille, es zu tun.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#team"
            className="px-8 py-4 rounded-full font-heading font-bold text-base bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] hover:bg-[oklch(0.85_0.18_88)] transition-all duration-200 shadow-[0_0_30px_oklch(0.78_0.17_85/0.4)]"
          >
            Komm ins Team
          </a>
          <a
            href="#history"
            className="px-8 py-4 rounded-full font-heading font-bold text-base border border-white/20 text-white hover:border-[oklch(0.78_0.17_85/0.6)] hover:text-[oklch(0.85_0.18_88)] transition-all duration-200"
          >
            Unsere Geschichte
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-white/60 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
