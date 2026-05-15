import { FadeIn } from "./FadeIn";

const partners = [
  "Nike",
  "Zalando",
  "Shell",
  "REWE",
  "Amazon",
  "Booking",
  "MediaMarkt",
  "IKEA",
  "Lufthansa",
  "Apple",
  "H&M",
  "+1000 mehr",
];

export function Partners() {
  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        id="partners"
        className="mx-auto max-w-[1280px]"
        style={{ background: "var(--fxa-card)" }}
      >
        <h2 className="mb-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          Sammle bei allem, was du sowieso kaufst.
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
          Tausende Partner — von der Tankstelle bis zur Luxusmarke.
        </p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="rounded-2xl border px-4 py-7 text-center font-bold text-[var(--fxa-text-muted)] transition hover:border-[var(--fxa-orange)] hover:text-[var(--fxa-orange)]"
              style={{
                background: "var(--fxa-dark)",
                borderColor: "var(--fxa-border)",
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
