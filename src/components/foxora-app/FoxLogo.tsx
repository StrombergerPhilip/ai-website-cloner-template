export function FoxLogo({ size = 32, gradId = "fxa-fg" }: { size?: number; gradId?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8533" />
          <stop offset="100%" stopColor="#E65500" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M32 6 L52 16 L52 30 C52 44 42 54 32 58 C22 54 12 44 12 30 L12 16 Z"
      />
      <path fill="#0F0E0C" d="M22 22 L28 28 L24 32 L22 22 Z M42 22 L36 28 L40 32 L42 22 Z" />
      <circle cx="26" cy="34" r="2.2" fill="#0F0E0C" />
      <circle cx="38" cy="34" r="2.2" fill="#0F0E0C" />
      <path fill="#0F0E0C" d="M30 40 L34 40 L32 43 Z" />
    </svg>
  );
}

export function FoxWordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <FoxLogo size={32} gradId="fxa-fg-mark" />
      <div className="text-[22px] font-black tracking-[-0.5px] text-[var(--fxa-orange)]">
        FOX<span className="text-[var(--fxa-text)]">ORA</span>
      </div>
    </div>
  );
}
