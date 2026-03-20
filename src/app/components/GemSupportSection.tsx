import Link from "next/link";
import Script from "next/script";

const gemServices = [
  {
    title: "GeM Tender Study & Opportunity Shortlisting",
    description:
      "Understand your requirements, map the right GeM tenders, and shortlist opportunities aligned with your business capabilities.",
    bullets: ["Tender search & technical review", "Eligibility & compliance checks", "Bid strategy guidance"],
  },
  {
    title: "e-Tender Technical Support",
    description:
      "Get step-by-step guidance for e-tender operations, file preparation, and submission workflows to reduce mistakes.",
    bullets: ["Tender documentation support", "Submission workflow assistance", "Issue resolution guidance"],
  },
  {
    title: "DSC & System Setup",
    description:
      "We help with Digital Signature Certificate requirements and the setup needed for smooth GeM participation.",
    bullets: ["DSC readiness support", "Token/setup guidance", "Portal configuration help"],
  },
  {
    title: "Authorization Codes (OEM / Brand Listing)",
    description:
      "Support for authorization code availability and vendor listing so your bids can include the right brands/items.",
    bullets: ["Brand authorization guidance", "GeM vendor enablement support", "Document readiness checks"],
  },
  {
    title: "Invoice & EMD Follow-up Assistance",
    description:
      "Reduce post-submission risk with timely follow-up support for EMD requirements and invoice-related steps.",
    bullets: ["EMD follow-up support", "Invoice readiness guidance", "Timelines & compliance reminders"],
  },
  {
    title: "Bid Management & Post-Submission Review",
    description:
      "Improve your outcomes with ongoing review, feedback integration, and continuous bid quality improvements.",
    bullets: ["Bid management support", "Success improvement planning", "Post-submission learning"],
  },
];

const faq = [
  {
    q: "Do you help only with GeM portal activities, or full tender management too?",
    a: "We support end-to-end tender management plus GeM portal assistance, including tender study, documentation, bid management, and follow-ups.",
  },
  {
    q: "Is DSC setup mandatory for GeM participation?",
    a: "Yes. A valid DSC is typically required for GeM registration and participation. We guide you on readiness and setup steps.",
  },
  {
    q: "What are authorization codes on GeM?",
    a: "Authorization codes help enable brand/item listing and compliance for certain categories. We provide guidance for authorization readiness and vendor setup.",
  },
];

export default function GemSupportSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-500/15 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            One Stop Solution
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
            GeM Portal Support & Tender Consultancy
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From tender discovery to bid readiness, DSC setup, authorization codes, and follow-up support, we help you move faster with fewer mistakes.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gemServices.map((svc) => (
            <article
              key={svc.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {svc.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {svc.description}
              </p>
              <ul className="mt-5 space-y-2">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-gray-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <Script
        id="gem-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </section>
  );
}

