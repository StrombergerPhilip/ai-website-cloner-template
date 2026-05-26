import { AppleEyebrow, ProductTile } from "./ProductTile";

function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex w-full max-w-md items-center justify-center text-center text-xs italic opacity-60">
      <span className="rounded-md bg-current/5 px-3 py-1.5">
        [{label} photo placeholder]
      </span>
    </div>
  );
}

export function ProductGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-2 px-4 pt-2 sm:grid-cols-2">
        <ProductTile
          eyebrow="iPhone"
          headline={<>Meet the latest iPhone lineup</>}
          ctas={[
            { label: "Learn more", variant: "secondary" },
            { label: "Shop iPhone" },
          ]}
          bgClassName="bg-[oklch(0.97_0_0)]"
          visual={<VisualPlaceholder label="iPhone Pro lineup" />}
        />
        <ProductTile
          eyebrowLogo={<AppleEyebrow>Watch Series 11</AppleEyebrow>}
          headline={<>The ultimate way to watch your health</>}
          ctas={[
            { label: "Learn more", variant: "secondary" },
            { label: "Buy" },
          ]}
          bgClassName="bg-[oklch(0.16_0_0)]"
          invert
          visual={<VisualPlaceholder label="Watch Series 11" />}
        />
        <ProductTile
          eyebrowLogo={<AppleEyebrow>Watch</AppleEyebrow>}
          headline={
            <>Radiate Pride with the vibrant new Pride Edition Sport Loop</>
          }
          ctas={[
            { label: "Learn more", variant: "secondary" },
            { label: "Buy" },
          ]}
          bgClassName="bg-gradient-to-br from-[oklch(0.5_0.25_330)] via-[oklch(0.65_0.22_25)] to-[oklch(0.85_0.2_85)]"
          invert
          visual={<VisualPlaceholder label="Pride Edition Sport Loop" />}
        />
        <ProductTile
          eyebrow="MacBook Neo"
          headline={<>Amazing Mac. Surprising price.</>}
          ctas={[
            { label: "Learn more", variant: "secondary" },
            { label: "Buy" },
          ]}
          bgClassName="bg-[oklch(0.97_0_0)]"
          visual={<VisualPlaceholder label="MacBook Neo" />}
        />
        <ProductTile
          eyebrowLogo={<AppleEyebrow>Business</AppleEyebrow>}
          headline={
            <>The tools you need to run and grow your business. All in one place.</>
          }
          ctas={[{ label: "Learn more", variant: "secondary" }]}
          bgClassName="bg-[oklch(0.16_0_0)]"
          invert
          visual={<VisualPlaceholder label="Business app icons grid" />}
        />
        <ProductTile
          eyebrow="iPad air"
          headline={<>Now supercharged by M4.</>}
          ctas={[
            { label: "Learn more", variant: "secondary" },
            { label: "Buy" },
          ]}
          bgClassName="bg-[oklch(0.97_0_0)]"
          visual={<VisualPlaceholder label="iPad Air" />}
        />
        <ProductTile
          eyebrowLogo={<AppleEyebrow>Trade In</AppleEyebrow>}
          headline={
            <>Get up to $195–$685 in credit when you trade in iPhone 12 or higher.</>
          }
          ctas={[{ label: "Get your estimate", variant: "secondary" }]}
          bgClassName="bg-[oklch(0.97_0_0)]"
          aspect="wide"
          visual={<VisualPlaceholder label="Trade-in iPhone art" />}
        />
        <ProductTile
          eyebrowLogo={<AppleEyebrow>Card</AppleEyebrow>}
          headline={<>Get up to 3% Daily Cash back with every purchase.</>}
          ctas={[{ label: "Apply now", variant: "secondary" }]}
          bgClassName="bg-[oklch(0.97_0_0)]"
          aspect="wide"
          visual={<VisualPlaceholder label="Apple Card" />}
        />
      </div>
    </section>
  );
}
