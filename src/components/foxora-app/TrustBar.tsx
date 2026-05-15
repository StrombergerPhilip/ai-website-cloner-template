const partners = [
  "Bitpanda Custody",
  "Visa",
  "Mastercard",
  "Solaris Bank",
  "Bundesverband Bitcoin",
];

export function TrustBar() {
  return (
    <div
      className="border-y px-10 py-10"
      style={{
        background: "var(--fxa-card)",
        borderColor: "var(--fxa-border)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 text-center md:text-left">
        <div className="text-[12px] uppercase tracking-[1.5px] text-[var(--fxa-text-muted)] md:flex-shrink-0">
          Vertraut von Partnern wie
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-[15px] font-bold text-[var(--fxa-text-muted)] md:gap-10">
          {partners.map((p) => (
            <span
              key={p}
              className="cursor-default opacity-70 transition hover:text-[var(--fxa-orange)] hover:opacity-100"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
