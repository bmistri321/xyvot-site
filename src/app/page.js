import Image from "next/image";
import Link from "next/link";
import ScrollLink from "../components/ScrollLink";

const SHOP_URL = "https://shop.xyvot.com";
const BUSINESS_URL = "https://business.xyvot.com";
const RIDER_URL = "https://rider.xyvot.com";

function BrowserFrame({ src, alt, sizes }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* ============ NAVIGATION ============ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between"
        >
          <Link href="/" className="flex items-center" aria-label="Xyvot home">
            <span className="text-[26px] font-black tracking-tight">
              xyvot<span className="text-orange-600">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-slate-600">
            <ScrollLink to="platform" className="hover:text-slate-950 transition-colors">
              Platform
            </ScrollLink>
            <ScrollLink to="customers" className="hover:text-slate-950 transition-colors">
              Customers
            </ScrollLink>
            <ScrollLink to="businesses" className="hover:text-slate-950 transition-colors">
              Businesses
            </ScrollLink>
            <ScrollLink to="riders" className="hover:text-slate-950 transition-colors">
              Riders
            </ScrollLink>
            <Link href="/about" className="hover:text-slate-950 transition-colors">
              About
            </Link>
            <ScrollLink to="faq" className="hover:text-slate-950 transition-colors">
              FAQ
            </ScrollLink>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={SHOP_URL}
              className="hidden sm:inline-flex px-5 py-2.5 text-[15px] font-semibold text-slate-900 hover:text-orange-700 transition-colors"
            >
              Shop now
            </Link>
            <Link
              href={BUSINESS_URL}
              className="inline-flex px-6 py-3 text-[15px] font-semibold text-white bg-slate-950 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sell on Xyvot
            </Link>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative pt-[150px] sm:pt-[190px] pb-16 sm:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1ef_1px,transparent_1px),linear-gradient(to_bottom,#f1f1ef_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)] pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" aria-hidden="true" />
            Now delivering in your neighbourhood
          </p>
          <h1 className="mt-8 text-[48px] sm:text-[72px] lg:text-[88px] font-black tracking-[-0.03em] leading-[0.98] max-w-5xl mx-auto">
            The 15-minute store<br />for your street<span className="text-orange-600">.</span>
          </h1>
          <p className="mt-7 text-xl sm:text-[22px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Groceries, dairy, snacks, and daily essentials from the shops
            around the corner — ordered in seconds, at your door in minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SHOP_URL}
              className="w-full sm:w-auto inline-flex justify-center items-center px-9 py-4 text-base font-bold text-white bg-slate-950 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Shop groceries
            </Link>
            <Link
              href={BUSINESS_URL}
              className="w-full sm:w-auto inline-flex justify-center items-center px-9 py-4 text-base font-bold text-slate-900 bg-white border border-slate-300 rounded-xl hover:border-slate-950 transition-colors"
            >
              Open your shop
            </Link>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
            <BrowserFrame
              src="/images/customer-grocery.jpg"
              alt="Fresh groceries delivered to a customer's door in 15 minutes via Xyvot"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-left">
            <div className="border-l-2 border-slate-200 pl-5">
              <dd className="text-4xl font-black tracking-tight">15<span className="text-lg text-slate-400 font-bold"> min</span></dd>
              <dt className="mt-1.5 text-sm text-slate-500">Average delivery time</dt>
            </div>
            <div className="border-l-2 border-slate-200 pl-5">
              <dd className="text-4xl font-black tracking-tight">500<span className="text-lg text-slate-400 font-bold">+</span></dd>
              <dt className="mt-1.5 text-sm text-slate-500">Products listed</dt>
            </div>
            <div className="border-l-2 border-slate-200 pl-5">
              <dd className="text-4xl font-black tracking-tight">100<span className="text-lg text-slate-400 font-bold">+</span></dd>
              <dt className="mt-1.5 text-sm text-slate-500">Partner shops</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ BENTO PLATFORM GRID ============ */}
      <section id="platform" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
              The platform
            </p>
            <h2 className="mt-4 text-4xl sm:text-[52px] font-black tracking-[-0.02em] leading-[1.05]">
              One system.<br />Three ways to use it.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-6 gap-5">
            {/* Large card — customers */}
            <div className="md:col-span-4 rounded-3xl bg-slate-950 text-white p-9 sm:p-12 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange-600/25 blur-3xl"
              />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-400">
                  Customers
                </p>
                <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                  Order in seconds.<br />Delivered in minutes.
                </h3>
                <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-md">
                  WhatsApp OTP login, live tracking with delivery PIN, and
                  honest pricing — no hidden fees, ever.
                </p>
                <Link
                  href={SHOP_URL}
                  className="mt-7 inline-flex items-center gap-2 font-bold text-white border-b-2 border-orange-500 pb-1 hover:text-orange-300 transition-colors"
                >
                  Start shopping <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            {/* Tall card — riders */}
            <div className="md:col-span-2 rounded-3xl bg-orange-600 text-white p-9 flex flex-col justify-between min-h-[320px]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-200">
                  Riders
                </p>
                <h3 className="mt-4 text-2xl sm:text-[28px] font-black tracking-tight leading-tight">
                  Earn on your schedule.
                </h3>
                <p className="mt-3 text-orange-100 leading-relaxed">
                  Nearby orders, transparent payouts, weekly earnings. Zero joining fee.
                </p>
              </div>
              <Link
                href={RIDER_URL}
                className="mt-6 inline-flex items-center gap-2 font-bold text-white border-b-2 border-white/60 pb-1 w-fit hover:border-white transition-colors"
              >
                Become a rider <span aria-hidden="true">→</span>
              </Link>
            </div>
            {/* Wide card — businesses */}
            <div className="md:col-span-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-9 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
                    Businesses
                  </p>
                  <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                    Your entire shop, in one dashboard.
                  </h3>
                  <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    Storefront, POS billing, GST invoicing, inventory, and
                    automatic rider dispatch. Go live by evening.
                  </p>
                  <Link
                    href={BUSINESS_URL}
                    className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950 border-b-2 border-orange-600 pb-1 hover:text-orange-700 transition-colors"
                  >
                    Open your shop <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <BrowserFrame
                  src="/images/business-dashboard.jpg"
                  alt="Xyvot business dashboard showing inventory, orders, and sales analytics"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CUSTOMERS DETAIL ============ */}
      <section id="customers" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
              For customers
            </p>
            <h2 className="mt-4 text-4xl sm:text-[48px] font-black tracking-[-0.02em] leading-[1.06]">
              Groceries, without the grocery run.
            </h2>
            <div className="mt-10 space-y-0 divide-y divide-slate-100">
              {[
                ["01", "Express delivery", "15 minutes from shops near you — not a distant warehouse."],
                ["02", "Secure handoff", "Every order verified with a delivery PIN. No mix-ups."],
                ["03", "No passwords", "WhatsApp OTP login. One code and you're in."],
              ].map(([n, title, text]) => (
                <div key={n} className="py-6 grid grid-cols-[48px_1fr] gap-4">
                  <span className="text-sm font-bold text-slate-300">{n}</span>
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BrowserFrame
            src="/images/customer-grocery.jpg"
            alt="Fresh groceries delivered via Xyvot"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ============ BUSINESSES DETAIL ============ */}
      <section id="businesses" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <BrowserFrame
              src="/images/business-dashboard.jpg"
              alt="Xyvot merchant dashboard"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
              For businesses
            </p>
            <h2 className="mt-4 text-4xl sm:text-[48px] font-black tracking-[-0.02em] leading-[1.06]">
              Run your shop from one screen.
            </h2>
            <div className="mt-10 space-y-0 divide-y divide-slate-200">
              {[
                ["01", "Storefront", "Your shop online in minutes. Orders come to you."],
                ["02", "POS & GST", "Billing, invoicing, and stock — handled together."],
                ["03", "Auto dispatch", "Riders assigned automatically. You just pack."],
              ].map(([n, title, text]) => (
                <div key={n} className="py-6 grid grid-cols-[48px_1fr] gap-4">
                  <span className="text-sm font-bold text-slate-300">{n}</span>
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={BUSINESS_URL}
              className="mt-9 inline-flex px-7 py-3.5 font-bold text-white bg-slate-950 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </section>

      {/* ============ RIDERS DETAIL ============ */}
      <section id="riders" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
              For riders
            </p>
            <h2 className="mt-4 text-4xl sm:text-[48px] font-black tracking-[-0.02em] leading-[1.06]">
              Short trips.<br />Honest pay.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Deliver in your own neighbourhood. See every payout upfront,
              cash out weekly, work the hours you choose.
            </p>
            <Link
              href={RIDER_URL}
              className="mt-9 inline-flex px-7 py-3.5 font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-colors"
            >
              Apply as a rider
            </Link>
          </div>
          <BrowserFrame
            src="/images/rider-delivery.jpg"
            alt="Xyvot delivery partner"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ============ HOW IT WORKS (dark) ============ */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-400">
            How it works
          </p>
          <h2 className="mt-4 text-4xl sm:text-[52px] font-black tracking-[-0.02em] leading-[1.05] max-w-2xl">
            Shelf to doorstep in three steps.
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              ["01", "You order", "Browse neighbourhood shops, check out in under a minute."],
              ["02", "Shop packs", "The nearest partner packs your items fresh to order."],
              ["03", "Rider delivers", "A nearby rider collects — at your door in ~15 minutes."],
            ].map(([n, title, text]) => (
              <div
                key={n}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-8 hover:bg-white/[0.07] transition-colors"
              >
                <p className="font-mono text-sm font-bold text-orange-400">{n}</p>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-[2rem] bg-orange-600 text-white px-8 py-16 sm:p-20 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 w-96 h-96 bg-white/15 blur-3xl rounded-full pointer-events-none"
            />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <h2 className="text-4xl sm:text-[52px] font-black tracking-[-0.02em] leading-[1.05]">
                Your neighbourhood, delivered.
              </h2>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link
                  href={SHOP_URL}
                  className="inline-flex justify-center items-center px-8 py-4 font-bold text-orange-700 bg-white rounded-xl hover:bg-orange-50 transition-colors"
                >
                  Shop now
                </Link>
                <Link
                  href={BUSINESS_URL}
                  className="inline-flex justify-center items-center px-8 py-4 font-bold text-white border-2 border-white/50 rounded-xl hover:border-white hover:bg-white/10 transition-colors"
                >
                  Sell on Xyvot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="pb-20 sm:pb-28 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-[44px] font-black tracking-[-0.02em]">
            Questions
          </h2>
          <div className="mt-10 rounded-2xl border border-slate-200 divide-y divide-slate-200 overflow-hidden">
            {[
              ["What is Xyvot?", "An instant commerce platform connecting neighbourhood shops with customers — groceries and essentials in ~15 minutes, plus a full business platform for merchants."],
              ["How fast is delivery?", "Around 15 minutes from nearby partner shops, with live tracking and a delivery PIN for secure handoff."],
              ["How does my shop join?", "Sign up at business.xyvot.com. Storefront, inventory, POS billing, GST invoicing, and rider dispatch — live in minutes."],
              ["How do I become a rider?", "Apply at rider.xyvot.com. Zero joining fee, nearby orders, transparent payouts, weekly earnings."],
              ["Where do you operate?", "Select neighbourhoods in India, expanding steadily. Check shop.xyvot.com for your area."],
              ["How do customers log in?", "WhatsApp OTP — enter your number, get a code, done. No passwords."],
            ].map(([q, a]) => (
              <details key={q} className="group bg-white open:bg-slate-50/60 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer px-7 py-6 text-[17px] font-bold list-none">
                  {q}
                  <span
                    className="ml-6 flex-shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-xl font-light text-slate-500 group-open:rotate-45 group-open:border-slate-950 group-open:text-slate-950 transition-all"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-7 pb-7 text-slate-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Link columns */}
            <nav aria-label="About links" className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                About
              </h3>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <ScrollLink to="faq" className="text-slate-300 hover:text-white transition-colors">
                    FAQ
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <nav aria-label="Platform links" className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Platform
              </h3>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link href={SHOP_URL} className="text-slate-300 hover:text-white transition-colors">
                    Shop groceries
                  </Link>
                </li>
                <li>
                  <Link href={BUSINESS_URL} className="text-slate-300 hover:text-white transition-colors">
                    Sell on Xyvot
                  </Link>
                </li>
                <li>
                  <Link href={RIDER_URL} className="text-slate-300 hover:text-white transition-colors">
                    Become a rider
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Help links" className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Help
              </h3>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <ScrollLink to="how-it-works" className="text-slate-300 hover:text-white transition-colors">
                    How it works
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="platform" className="text-slate-300 hover:text-white transition-colors">
                    The platform
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <nav aria-label="Policy links" className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Policy
              </h3>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="text-slate-300 hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Mail Us */}
            <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Mail Us
              </h3>
              <address className="mt-5 text-[15px] text-slate-300 not-italic leading-relaxed">
                Xyvot Internet Private Limited,
                <br />
                [Registered office address]
              </address>
              <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Social
              </h3>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Xyvot on X"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/60 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Xyvot on Instagram"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/60 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Xyvot on YouTube"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/60 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="5" width="20" height="14" rx="4" />
                    <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Xyvot on LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/60 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
              <Link href={BUSINESS_URL} className="text-slate-300 hover:text-white font-semibold transition-colors">
                Become a Seller
              </Link>
              <ScrollLink to="how-it-works" className="text-slate-300 hover:text-white font-semibold transition-colors">
                Help Center
              </ScrollLink>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 Xyvot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
