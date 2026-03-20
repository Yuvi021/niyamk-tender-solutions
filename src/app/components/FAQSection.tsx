import Script from "next/script";

const faqs = [
  {
    q: "How do you start a new tender engagement?",
    a: "We begin with a consultation to understand your business needs. Then we shortlist relevant tenders, review eligibility/document requirements, and create a practical bid plan.",
  },
  {
    q: "Can you help with tender documentation and compliance checks?",
    a: "Yes. Our process includes document preparation/review and compliance verification so you submit with confidence and reduce the risk of disqualification.",
  },
  {
    q: "What makes your bid management different?",
    a: "We focus on clarity: understanding your target criteria, aligning your submission to tender requirements, and running post-submission review so you improve outcomes over time.",
  },
  {
    q: "Do you provide support after submission?",
    a: "Yes. We provide follow-up support and feedback integration so future bids are stronger and more competitive.",
  },
  {
    q: "Do you assist with GeM portal registration and participation setup?",
    a: "We provide GeM support including DSC readiness guidance, e-tender workflow support, and help to ensure your setup is ready for smooth participation.",
  },
  {
    q: "How quickly can we get started?",
    a: "You can typically get started quickly after your initial call. Once we understand your requirements, we share a clear plan for the next steps.",
  },
];

export default function FAQSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-500/15 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
            Quick Answers for Better Tender Decisions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Short, practical answers about our tender consultancy and GeM portal support.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-gray-900">{item.q}</span>
                <span className="mt-1 flex-none text-emerald-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </section>
  );
}

