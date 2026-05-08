type Product = {
  name: string;
  tag: string;
  price: string;
  rating: number;
  reviews: number;
};

const products: Product[] = [
  {
    name: "That's Tight Tightening Serum",
    tag: "Serum",
    price: "$98",
    rating: 4.9,
    reviews: 412,
  },
  {
    name: "That's Smooth Skin Essence",
    tag: "Essence",
    price: "$72",
    rating: 4.8,
    reviews: 318,
  },
  {
    name: "That's Restored Night Crème",
    tag: "Night Crème",
    price: "$88",
    rating: 4.9,
    reviews: 274,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[oklch(0.61_0.235_350)]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-3.5 w-3.5"
        >
          <path d="M12 2.5 14.6 9l6.9.6-5.2 4.6 1.6 6.8L12 17.5l-5.9 3.5 1.6-6.8L2.5 9.6 9.4 9Z" />
        </svg>
      ))}
    </div>
  );
}

export function HotList() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl tracking-tight text-[oklch(0.16_0.04_280)] sm:text-4xl">
          The <em className="italic text-[oklch(0.61_0.235_350)]">Hot</em> List
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col rounded-2xl bg-[oklch(0.96_0.025_350)] p-5 transition hover:shadow-md"
            >
              <div
                aria-label={`${product.name} product image`}
                className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.96_0.04_350)] to-[oklch(0.91_0.06_350)]"
              >
                <span className="font-serif text-sm italic text-[oklch(0.16_0.04_280)]/40">
                  {product.tag}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Stars rating={product.rating} />
                <span className="text-xs text-[oklch(0.45_0.04_280)]">
                  ({product.reviews})
                </span>
              </div>
              <h3 className="mt-2 font-serif text-lg leading-tight text-[oklch(0.16_0.04_280)]">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-[oklch(0.45_0.04_280)]">
                {product.price}
              </p>
              <button
                type="button"
                className="mt-4 rounded-full border border-[oklch(0.61_0.235_350)] py-2 text-xs font-medium uppercase tracking-wider text-[oklch(0.61_0.235_350)] transition hover:bg-[oklch(0.61_0.235_350)] hover:text-white"
              >
                Quick Add
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
