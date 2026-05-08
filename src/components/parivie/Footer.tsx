function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-white/90 transition hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        {children}
      </svg>
    </a>
  );
}

const footerLinks = [
  "Customer Service",
  "Shipping & Returns",
  "Privacy Policy",
  "Terms of Service",
  "Accessibility",
  "Do Not Sell My Info",
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.61_0.235_350)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-center font-serif text-4xl tracking-[0.15em] sm:text-5xl">
          PARÍVIE
        </p>
        <h3 className="mt-10 text-center font-serif text-xl">
          Join the VIP list for exclusive updates,
          <br />
          perks, and more.
        </h3>
        <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row sm:gap-0">
          <input
            type="email"
            placeholder="Email address"
            className="h-11 flex-1 rounded-l-md border border-r-0 border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 sm:rounded-l-md sm:rounded-r-none"
          />
          <button
            type="submit"
            className="h-11 rounded-r-md bg-white px-6 text-sm font-medium uppercase tracking-wide text-[oklch(0.61_0.235_350)] transition hover:bg-white/90"
          >
            Sign up
          </button>
        </form>
        <div className="mt-8 flex justify-center gap-5">
          <SocialIcon label="Instagram">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </SocialIcon>
          <SocialIcon label="TikTok">
            <path d="M14 4v10a4 4 0 1 1-4-4" />
            <path d="M14 4c0 2.5 2 4 4 4" />
          </SocialIcon>
          <SocialIcon label="YouTube">
            <rect x="3" y="6" width="18" height="12" rx="3" />
            <path d="m11 10 4 2-4 2z" fill="currentColor" stroke="none" />
          </SocialIcon>
          <SocialIcon label="Facebook">
            <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h2.4l.6-3H14V8.5a.5.5 0 0 1 .5-.5Z" />
          </SocialIcon>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          {footerLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-white/85 transition hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[11px] text-white/70">
          © {new Date().getFullYear()} Parívie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
