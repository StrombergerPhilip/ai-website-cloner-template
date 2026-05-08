const linkColumns: { heading: string; links: string[] }[] = [
  {
    heading: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Accessories", "Gift Cards"],
  },
  {
    heading: "Apple Wallet",
    links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    heading: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    heading: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Order Status"],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    heading: "For Education",
    links: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    heading: "For Healthcare",
    links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
  },
  {
    heading: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity Justice"],
  },
  {
    heading: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.97_0_0)] text-[oklch(0.4_0_0)]">
      <div className="mx-auto max-w-6xl px-4 py-7 text-[11px] leading-relaxed">
        <ol className="list-decimal space-y-3 pl-4">
          <li>
            Features and availability vary by country/region. See the
            configuration of any eligible iPhone in our store. Trade-in values
            will vary based on the condition, year, and configuration of your
            eligible trade-in device. You must be at least the age of majority
            to be eligible to trade in for credit. Not all devices are eligible
            for credit. In-store trade-in requires presentation of a valid
            photo ID.
          </li>
          <li>
            A subscription is required for Apple Arcade, Apple Fitness+,
            Apple TV+, and Apple Music.
          </li>
        </ol>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[oklch(0.88_0_0)] pt-7 sm:grid-cols-3 lg:grid-cols-5">
          {linkColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-semibold text-[oklch(0.21_0_0)]">
                {col.heading}
              </p>
              <ul className="mt-2 space-y-1">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[oklch(0.88_0_0)] pt-5 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-3">
            {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:underline">
                  {l}
                </a>
              </li>
            ))}
            <li>Österreich</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
