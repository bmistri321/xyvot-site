import Link from "next/link";

const SHOP_URL = "https://shop.xyvot.com";
const BUSINESS_URL = "https://business.xyvot.com";
const RIDER_URL = "https://rider.xyvot.com";

export const metadata = {
  title: "Contact Xyvot — Get in Touch",
  description:
    "Contact Xyvot for customer support, business partnerships, and rider enquiries.",
  alternates: { canonical: "https://www.xyvot.com/contact" },
};

export default function Contact() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <section className="pt-[150px] sm:pt-[190px] pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
            Contact
          </p>
          <h1 className="mt-6 text-[44px] sm:text-[64px] font-black tracking-[-0.03em] leading-[1.0] max-w-3xl">
            Talk to us<span className="text-orange-600">.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
            Choose the right door — we'll get you to the right people.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              [
                "Customers",
                "Order help, delivery issues, and account questions.",
                SHOP_URL,
                "Go to shop",
              ],
              [
                "Businesses",
                "Selling on Xyvot, onboarding, and merchant support.",
                BUSINESS_URL,
                "Go to business portal",
              ],
              [
                "Riders",
                "Delivery partner applications and rider support.",
                RIDER_URL,
                "Go to rider portal",
              ],
            ].map(([title, text, href, cta]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 p-9 hover:border-slate-950 transition-colors"
              >
                <h2 className="text-2xl font-black tracking-tight">{title}</h2>
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
          <div className="mt-14 rounded-3xl bg-slate-50 border border-slate-200 p-9 sm:p-12">
            <h2 className="text-2xl font-black tracking-tight">Everything else</h2>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
              For press, partnerships, and general enquiries, reach us at our
              registered office listed in the footer below.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
