import Image from 'next/image';

const features = [
  {
    title: "Vast Industry Expertise",
    description:
      "With years of experience across multiple industries, we understand the nuances of tender processes and provide tailored solutions to maximize success.",
    icon: "/images/leader.png",
  },
  {
    title: "End-to-End Tender Support",
    description:
      "We assist in everything from identifying opportunities to preparing documentation, ensuring a smooth submission process and higher success rates.",
    icon: "/images/technical-support.png",
  },
  {
    title: "High Success Rate",
    description:
      "Our proven strategies and detailed analysis result in a high success rate for tenders across various industries and government sectors.",
    icon: "/images/goal.png",
  },
  {
    title: "Customized Solutions",
    description:
      "We offer tailored solutions that match your business objectives, ensuring that your bids stand out from the competition.",
    icon: "/images/custom.png",
  },
  {
    title: "Compliance & Documentation",
    description:
      "We ensure that your submissions comply with the latest regulations and documentation standards, minimizing the risk of disqualification.",
    icon: "/images/compliance.png",
  },
  {
    title: "Post-Submission Assistance",
    description:
      "Our services don't end with submission — we provide post-submission analysis and follow-ups to ensure continued success.",
    icon: "/images/followup.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our expertise, customized approach, and commitment to excellence make
          us the preferred choice for tender management.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <Image
                src={feature.icon || "/images/default.png"}
                alt={feature.title}
                className="mx-auto mb-4 w-12 h-12"
                width={48}
                height={48}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
