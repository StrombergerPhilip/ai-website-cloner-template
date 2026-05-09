import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative w-full bg-background pt-12 pb-10 md:pt-[72px] md:pb-14">
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center">
        <p className="mb-2 text-[15px] font-normal uppercase tracking-[0.08em] text-muted-foreground md:text-[17px]">
          New
        </p>

        <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.015em] text-foreground md:text-[56px]">
          Product. Reimagined.
        </h1>

        <p className="mt-3 max-w-[640px] text-[19px] font-normal leading-[1.3] text-foreground md:text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br className="hidden md:block" /> elit. Duis aute irure dolor.
        </p>

        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-5 md:mt-6">
          <Link
            href="#"
            className="inline-flex h-[36px] items-center justify-center rounded-full bg-[var(--link)] px-5 text-[14px] font-normal text-[var(--primary-foreground)] transition-colors hover:bg-[oklch(0.5_0.18_264)] md:text-[17px]"
          >
            Buy
          </Link>
          <Link
            href="#"
            className="inline-flex items-center text-[14px] font-normal text-[var(--link)] hover:underline md:text-[17px]"
          >
            <span>Learn more</span>
            <ChevronRightIcon className="ml-1 size-[10px]" />
          </Link>
        </div>

        <div className="mt-10 w-full md:mt-14">
          <div
            aria-hidden="true"
            className="mx-auto aspect-[5/3] w-full max-w-[1120px] overflow-hidden rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.96 0.01 230) 0%, oklch(0.88 0.04 240) 55%, oklch(0.78 0.06 250) 100%)",
            }}
          >
            <div
              className="size-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 60%, oklch(0.99 0 0 / 60%) 0%, transparent 55%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
