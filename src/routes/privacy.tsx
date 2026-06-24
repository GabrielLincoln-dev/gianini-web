import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gianini Web" },
      { name: "description", content: "Gianini Web Privacy Policy under the Brazilian General Data Protection Law (LGPD)." },
      { property: "og:title", content: "Privacy Policy — Gianini Web" },
      { property: "og:description", content: "How we process your personal data under the LGPD." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 23, 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Data Controller</h2>
              <p>
                <strong>Gianini Web</strong>, located at Rua Jacarandás, 645 — Arujá/SP, Brazil, is the
                controller of personal data collected through this website, pursuant to Brazilian
                Law No. 13.709/2018 (General Data Protection Law — LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Data we collect</h2>
              <p>When you fill out our contact form, we collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Full name</li>
                <li>Company name</li>
                <li>Email address</li>
                <li>WhatsApp number</li>
                <li>Project description provided by you</li>
              </ul>
              <p className="mt-3">
                We do not use tracking cookies, marketing pixels or analytics tools that collect
                personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Purpose</h2>
              <p>
                Your data is used exclusively to contact you, understand your needs and present
                a commercial proposal. We do not sell, rent or share your data with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Legal basis</h2>
              <p>
                Data processing is based on your explicit <strong>consent</strong> (LGPD art. 7, I),
                given by checking the consent box in the form, and on <strong>pre-contractual procedures</strong>
                (LGPD art. 7, V).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Transmission</h2>
              <p>
                When you submit the form, your information is sent directly to our WhatsApp number
                through the WhatsApp application (operated by Meta Platforms, Inc.). No data is
                stored in our own database.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Retention</h2>
              <p>
                We retain conversations and data for as long as necessary to fulfill your request
                and legal obligations. You may request deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Your rights (LGPD art. 18)</h2>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Confirmation of processing;</li>
                <li>Access to data;</li>
                <li>Correction of incomplete, inaccurate or outdated data;</li>
                <li>Anonymization, blocking or deletion of unnecessary data;</li>
                <li>Portability;</li>
                <li>Deletion of data processed under consent;</li>
                <li>Withdrawal of consent;</li>
                <li>Information about sharing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact — DPO</h2>
              <p>
                To exercise your rights or clarify questions, contact us via WhatsApp at
                <strong> +55 11 96563-6396</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes</h2>
              <p>This policy may be updated at any time. We recommend periodic review.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
