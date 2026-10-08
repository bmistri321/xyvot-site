export const metadata = {
  title: "Terms of Use — Xyvot",
  description: "Terms of use for the Xyvot website and platform.",
  alternates: { canonical: "https://www.xyvot.com/terms-of-use" },
};

export default function TermsOfUse() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <section className="pt-[150px] sm:pt-[190px] pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
            Legal
          </p>
          <h1 className="mt-6 text-[40px] sm:text-[56px] font-black tracking-[-0.02em] leading-[1.05]">
            Terms of Use
          </h1>
          <p className="mt-4 text-slate-500">Last updated: October 2026</p>
          <div className="mt-12 space-y-10 text-[17px] text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                1. The platform
              </h2>
              <p className="mt-4">
                Xyvot operates an instant commerce platform connecting
                customers, local businesses, and delivery partners. This
                website describes our services; the marketplace, business
                portal, and rider app each carry their own terms presented at
                sign-up.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                2. Using this website
              </h2>
              <p className="mt-4">
                You may browse this site freely. You agree not to misuse it —
                no scraping at abusive rates, no attempts to disrupt the
                service, and no misrepresentation of your identity or
                affiliation with Xyvot.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                3. Delivery estimates
              </h2>
              <p className="mt-4">
                Delivery times shown on this site (such as "15 minutes") are
                targets based on typical conditions. Actual delivery times
                vary with distance, traffic, weather, shop preparation time,
                and rider availability.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                4. Business and rider terms
              </h2>
              <p className="mt-4">
                Merchants and delivery partners are bound by the agreements
                presented during onboarding on business.xyvot.com and
                rider.xyvot.com respectively, including terms on payouts,
                commissions, and service standards.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                5. Intellectual property
              </h2>
              <p className="mt-4">
                The Xyvot name, logo, and site content belong to Xyvot Internet
                Private Limited. You may not copy or reuse them without
                written permission.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                6. Changes
              </h2>
              <p className="mt-4">
                We may update these terms as the platform evolves. Continued
                use of our services after changes take effect constitutes
                acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                7. Contact
              </h2>
              <p className="mt-4">
                Questions about these terms: see our{" "}
                <a href="/contact" className="font-bold text-orange-700 hover:text-orange-800">
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
