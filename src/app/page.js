import Image from "next/image";
import Link from "next/link";
import ScrollLink from "../components/ScrollLink";

const SHOP_URL = "https://shop.xyvot.com";
const BUSINESS_URL = "https://business.xyvot.com";
const RIDER_URL = "https://rider.xyvot.com";

export default function Home() {
  return (
    <main className="bg-[#FAFAF8] text-slate-900 overflow-x-clip">
      {/* ============ FLOATING PILL NAVIGATION ============ */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="max-w-5xl mx-auto flex items-center justify-between h-14 pl-6 pr-3 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/70 shadow-lg shadow-slate-900/[0.06]"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Xyvot home">
            <span className="text-2xl font-black tracking-tight">
              xyvot<span className="text-orange-600">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <ScrollLink to="customers" className="hover:text-slate-900 transition-colors">
              Customers
            </ScrollLink>
            <ScrollLink to="businesses" className="hover:text-slate-900 transition-colors">
              Businesses
            </ScrollLink>
            <ScrollLink to="riders" className="hover:text-slate-900 transition-colors">
              Riders
            </ScrollLink>
            <ScrollLink to="how-it-works" className="hover:text-slate-900 transition-colors">
              How it works
            </ScrollLink>
            <ScrollLink to="faq" className="hover:text-slate-900 transition-colors">
              FAQ
            </ScrollLink>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={SHOP_URL}
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Shop now
            </Link>
            <Link
              href={BUSINESS_URL}
              className="inline-flex px-5 py-2.5 text-sm font-semibold text-white bg-slate-950 rounded-full hover:bg-slate-800 transition-colors"
            >
              Sell on Xyvot
            </Link>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* pastel glow blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/60 via-amber-100/50 to-rose-100/40 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-64 -left-40 w-[420px] h-[420px] rounded-full bg-orange-100/50 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" aria-hidden="true" />
            Now delivering in your neighbourhood
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] max-w-4xl mx-auto">
            Instant commerce for{" "}
            <span className="text-orange-600">local businesses</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Xyvot connects neighbourhood shops with customers for 15-minute
            delivery of groceries and daily essentials — while giving every
            merchant the tools to sell online and grow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SHOP_URL}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-white bg-slate-950 rounded-full hover:bg-slate-800 transition-colors"
            >
              Shop groceries
            </Link>
            <Link
              href={BUSINESS_URL}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-slate-900 bg-transparent border border-slate-300 rounded-full hover:border-slate-900 transition-colors"
            >
              Become a seller
            </Link>
          </div>
          <dl className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <dt className="sr-only">Delivery time</dt>
              <dd className="text-3xl sm:text-4xl font-black">15<span className="text-lg font-bold text-slate-500"> min</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Express delivery</dd>
            </div>
            <div className="text-center border-x border-slate-200">
              <dt className="sr-only">Product categories</dt>
              <dd className="text-3xl sm:text-4xl font-black">500<span className="text-lg font-bold text-slate-500">+</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Products listed</dd>
            </div>
            <div className="text-center">
              <dt className="sr-only">Local shops</dt>
              <dd className="text-3xl sm:text-4xl font-black">100<span className="text-lg font-bold text-slate-500">+</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Partner shops</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="relative py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-orange-100/70 via-amber-50/60 to-rose-100/50 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Everything you need for instant commerce
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed lg:pb-2">
              One platform for customers, merchants, and riders — ordering,
              selling, and delivering, all in minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛒",
                title: "Shop in 15 minutes",
                text: "Groceries and essentials from nearby shops, at your door fast.",
              },
              {
                icon: "🏪",
                title: "Sell online",
                text: "Your shop live on the internet in minutes, with POS and inventory.",
              },
              {
                icon: "🛵",
                title: "Deliver & earn",
                text: "Nearby orders matched to riders, with transparent payouts.",
              },
              {
                icon: "📍",
                title: "Track live",
                text: "Real-time order tracking with secure delivery PIN handoff.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-orange-50/80 to-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-center justify-center text-2xl" aria-hidden="true">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOR CUSTOMERS (split) ============ */}
      <section id="customers" className="py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                For customers
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Groceries at your door in 15 minutes
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Order from shops in your neighbourhood — fresh vegetables,
                dairy, snacks, and household essentials. Real-time tracking,
                honest pricing, no hidden fees.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "15-minute express delivery from nearby dark stores",
                  "Live order tracking with delivery PIN verification",
                  "WhatsApp OTP login — no passwords to remember",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={SHOP_URL}
                className="mt-8 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-800 transition-colors"
              >
                Start shopping <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 p-8 sm:p-10">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/images/customer-grocery.jpg"
                  alt="Fresh groceries delivered to a customer's door in 15 minutes via Xyvot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR BUSINESSES (split, reversed) ============ */}
      <section id="businesses" className="py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-8 sm:p-10 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/images/business-dashboard.jpg"
                  alt="Xyvot business dashboard showing inventory, orders, and sales analytics for merchants"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                For businesses
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Take your shop online in minutes
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                A complete business platform — online storefront, inventory
                management, POS billing, rider dispatch, and customer
                invoicing. Everything a local shop needs to compete online.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Instant online storefront on your own subdomain",
                  "Inventory, POS billing, and GST-ready invoicing",
                  "Automatic rider dispatch for every order",
                  "Free to start — no commission traps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={BUSINESS_URL}
                className="mt-8 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-800 transition-colors"
              >
                Open your shop <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR RIDERS (split) ============ */}
      <section id="riders" className="py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                For delivery partners
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Earn on your schedule
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Join Xyvot as a delivery partner. Smart dispatch sends you
                nearby orders, you deliver, you earn. Flexible hours, weekly
                payouts, zero joining fee.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Nearby orders matched to your live location",
                  "Transparent per-delivery earnings",
                  "Flexible shifts — work when you want",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={RIDER_URL}
                className="mt-8 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-800 transition-colors"
              >
                Become a rider <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-orange-50 p-8 sm:p-10">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/images/rider-delivery.jpg"
                  alt="Xyvot delivery partner on a bike delivering groceries to a customer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
              How it works
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              From shop shelf to doorstep
            </h2>
          </div>
          <ol className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "You order",
                text: "Browse your neighbourhood shops on the Xyvot marketplace and place an order in seconds.",
              },
              {
                step: "2",
                title: "Shop packs",
                text: "The nearest partner shop confirms and packs your items fresh — nothing sits in a warehouse.",
              },
              {
                step: "3",
                title: "Rider delivers",
                text: "A nearby delivery partner picks up and reaches you in about 15 minutes. Track it live.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm"
              >
                <span
                  className="inline-flex w-12 h-12 rounded-2xl bg-slate-950 text-white text-xl font-black items-center justify-center"
                  aria-hidden="true"
                >
                  {s.step}
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CTA (dark gradient card) ============ */}
      <section className="relative py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] rounded-full bg-gradient-to-br from-orange-300/40 via-amber-200/30 to-rose-200/30 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-16 sm:p-20 text-center text-white">
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-orange-600/20 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
            />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Ready to experience instant commerce?
              </h2>
              <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
                Shop from local stores, sell your products online, or deliver
                with us — Xyvot is built for everyone in the neighbourhood.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={SHOP_URL}
                  className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-slate-950 bg-white rounded-full hover:bg-orange-100 transition-colors"
                >
                  Shop now
                </Link>
                <Link
                  href={BUSINESS_URL}
                  className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-white border border-white/30 rounded-full hover:border-white/70 transition-colors"
                >
                  Sell on Xyvot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-24 sm:py-32 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "What is Xyvot?",
                a: "Xyvot is an instant commerce platform that connects local neighbourhood shops with customers. Customers get groceries and daily essentials delivered in about 15 minutes, while merchants get a complete online business platform.",
              },
              {
                q: "How fast is Xyvot delivery?",
                a: "Xyvot offers 15-minute express delivery from nearby partner shops and dark stores. Every order includes live tracking and a delivery PIN for secure handoff.",
              },
              {
                q: "How can my shop sell on Xyvot?",
                a: "Visit business.xyvot.com to open your online storefront in minutes. You get inventory management, POS billing, GST-ready invoicing, and automatic rider dispatch — free to start.",
              },
              {
                q: "How do I become a Xyvot delivery partner?",
                a: "Sign up at rider.xyvot.com. There is zero joining fee. You receive nearby orders matched to your live location, earn transparent per-delivery payouts, and work flexible shifts.",
              },
              {
                q: "Where does Xyvot operate?",
                a: "Xyvot currently operates in select neighbourhoods in India, expanding area by area. Check shop.xyvot.com to see if delivery is available in your location.",
              },
              {
                q: "How do customers log in to Xyvot?",
                a: "Customers log in with WhatsApp OTP — enter your phone number, receive a code on WhatsApp, and you are in. No passwords to remember.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-slate-200/80 px-6 py-5 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold list-none">
                  {item.q}
                  <span
                    className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-2xl font-black tracking-tight">
            xyvot<span className="text-orange-600">.</span>
          </p>
          <p className="mt-3 text-slate-600 max-w-md">
            Empowering neighbourhoods with instant commerce — shop, sell, and
            deliver, all in minutes.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <nav aria-label="Shop links">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Shop
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href={SHOP_URL} className="hover:text-slate-900 transition-colors">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Business links">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Business
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href={BUSINESS_URL} className="hover:text-slate-900 transition-colors">
                    Sell on Xyvot
                  </Link>
                </li>
                <li>
                  <Link href={RIDER_URL} className="hover:text-slate-900 transition-colors">
                    Become a rider
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Company links">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <ScrollLink to="customers" className="hover:text-slate-900 transition-colors">
                    For customers
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="businesses" className="hover:text-slate-900 transition-colors">
                    For businesses
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="how-it-works" className="hover:text-slate-900 transition-colors">
                    How it works
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="faq" className="hover:text-slate-900 transition-colors">
                    FAQ
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <nav aria-label="Legal links">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                Legal
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 Xyvot. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Made for neighbourhoods, by Xyvot.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
