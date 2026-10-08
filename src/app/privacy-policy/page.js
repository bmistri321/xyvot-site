export const metadata = {
  title: "Privacy Policy",
  description:
    "Xyvot's privacy policy — how we collect, use, and protect your personal information across our instant commerce platform.",
  alternates: {
    canonical: "https://www.xyvot.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-500">Last updated: October 9, 2026</p>

        <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-3">
              Xyvot (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates
              an instant commerce platform connecting customers with local
              businesses for fast delivery of groceries, food, and daily
              essentials. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website,
              mobile applications, and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly and information
              collected automatically:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Account information:</strong> name, email address, phone
                number, and password when you create an account.
              </li>
              <li>
                <strong>Order information:</strong> delivery addresses, order
                history, payment method details, and delivery preferences.
              </li>
              <li>
                <strong>Location data:</strong> with your permission, we collect
                precise location data to facilitate deliveries and show nearby
                stores.
              </li>
              <li>
                <strong>Device information:</strong> device type, operating
                system, unique device identifiers, and mobile network
                information.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, features used, and
                interactions with our platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>To process and deliver your orders.</li>
              <li>To communicate order updates via WhatsApp, SMS, or email.</li>
              <li>To personalise your shopping experience.</li>
              <li>To improve our platform, services, and delivery operations.</li>
              <li>To detect and prevent fraud and ensure platform security.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Information Sharing
            </h2>
            <p className="mt-3">
              We share your information only as necessary to operate our
              services:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Merchants:</strong> order details needed to fulfil your
                purchase.
              </li>
              <li>
                <strong>Delivery riders:</strong> delivery address, contact
                number, and order details.
              </li>
              <li>
                <strong>Service providers:</strong> payment processors, cloud
                hosting, analytics, and communication providers under strict
                data processing agreements.
              </li>
              <li>
                <strong>Legal requirements:</strong> when required by law or to
                protect our rights and safety.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Data Security</h2>
            <p className="mt-3">
              We implement industry-standard security measures including
              encryption in transit and at rest, access controls, and regular
              security audits. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Your Rights
            </h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Withdraw consent for optional data processing.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@xyvot.com"
                className="text-orange-600 hover:underline"
              >
                privacy@xyvot.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              7. Cookies and Tracking
            </h2>
            <p className="mt-3">
              We use cookies and similar technologies to maintain your session,
              remember preferences, and analyse platform usage. You can control
              cookies through your browser settings, though some features may
              not function properly without them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our services are not directed at children under 13. We do not
              knowingly collect personal information from children under 13. If
              you believe we have collected such information, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by posting the updated policy
              on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">10. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:privacy@xyvot.com"
                className="text-orange-600 hover:underline"
              >
                privacy@xyvot.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
