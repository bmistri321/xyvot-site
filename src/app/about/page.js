import Link from "next/link";

const SHOP_URL = "https://shop.xyvot.com";
const BUSINESS_URL = "https://business.xyvot.com";

export const metadata = {
  title: "About Xyvot — Instant Commerce for Local Businesses",
  description:
    "Xyvot is building instant commerce for neighbourhoods: 15-minute grocery delivery for customers, a complete online platform for local shops, and honest delivery work for riders.",
  alternates: { canonical: "https://www.xyvot.com/about" },
};

export default function About() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* ============ HERO ============ */}
      <section className="pt-[150px] sm:pt-[190px] pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
            About
          </p>
          <h1 className="mt-6 text-[44px] sm:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[1.0] max-w-4xl">
            Commerce that starts on your street<span className="text-orange-600">.</span>
          </h1>
          <p className="mt-8 text-xl sm:text-[22px] text-slate-600 leading-relaxed max-w-2xl">
            Xyvot exists for one reason: the neighbourhood shop deserves the
            same technology as the biggest retailers. We give local merchants
            the tools to sell online, customers the speed of 15-minute
            delivery, and riders honest work close to home.
          </p>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="py-16 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              The idea
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-slate-700 leading-relaxed max-w-3xl">
            <p>
              Every neighbourhood has shops the whole street relies on — the
              kirana store that knows your family, the dairy that keeps your
              usual order ready, the pharmacy that delivers when you're sick.
              These shops run on trust built over years.
            </p>
            <p>
              But technology skipped them. While giant platforms built
              instant delivery on the backs of distant warehouses, the shop
              around the corner — faster, fresher, and already nearby — had
              no way to compete online.
            </p>
            <p>
              Xyvot changes that. We put the neighbourhood shop on the
              internet with everything it needs: a storefront, billing,
              inventory, and riders at the door. Customers get their
              groceries in 15 minutes from shops they already trust. Riders
              get short trips and transparent pay in their own area.
            </p>
            <p className="text-slate-950 font-bold text-xl">
              Nobody should have to choose between supporting local shops and
              getting modern convenience. With Xyvot, you get both.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES (bento) ============ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
            What we believe
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              [
                "Local first",
                "The neighbourhood shop is the backbone of Indian retail. Technology should strengthen it, not replace it.",
              ],
              [
                "Speed with honesty",
                "15-minute delivery means nothing without fair prices, real tracking, and secure handoffs. We do both.",
              ],
              [
                "Everyone earns",
                "Shops keep their margins, riders see transparent payouts, customers pay honest prices. No one gets squeezed.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white border border-slate-200 p-9"
              >
                <h3 className="text-2xl font-black tracking-tight">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
            What we do
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200">
            {[
              [
                "For customers",
                "Groceries and daily essentials from nearby shops, delivered in about 15 minutes. WhatsApp OTP login, live tracking, delivery PIN verification.",
                SHOP_URL,
                "Shop groceries",
              ],
              [
                "For businesses",
                "A complete commerce platform: online storefront, POS billing, GST invoicing, inventory management, and automatic rider dispatch.",
                BUSINESS_URL,
                "Open your shop",
              ],
              [
                "For riders",
                "Nearby orders matched to your location, transparent per-delivery earnings, flexible shifts, weekly payouts. Zero joining fee.",
                "https://rider.xyvot.com",
                "Become a rider",
              ],
            ].map(([title, text, href, cta]) => (
              <div key={title} className="bg-white p-9 sm:p-10">
                <h3 className="text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-slate-950 border-b-2 border-orange-600 pb-1 hover:text-orange-700 transition-colors"
                >
                  {cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 text-white px-8 py-16 sm:p-20 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/4 w-96 h-96 bg-orange-600/20 blur-3xl rounded-full pointer-events-none"
            />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <h2 className="text-4xl sm:text-[52px] font-black tracking-[-0.02em] leading-[1.05]">
                Be part of the neighbourhood<span className="text-orange-500">.</span>
              </h2>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link
                  href={SHOP_URL}
                  className="inline-flex justify-center items-center px-8 py-4 font-bold text-slate-950 bg-white rounded-xl hover:bg-orange-100 transition-colors"
                >
                  Shop now
                </Link>
                <Link
                  href={BUSINESS_URL}
                  className="inline-flex justify-center items-center px-8 py-4 font-bold text-white border-2 border-white/40 rounded-xl hover:border-white transition-colors"
                >
                  Sell on Xyvot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
