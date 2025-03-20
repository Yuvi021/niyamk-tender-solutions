import { FaFileContract, FaChartLine, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    title: "Tender Submission",
    description: "We assist in preparing and submitting high-quality tenders.",
    icon: <FaFileContract className="text-blue-500 text-4xl" />,
  },
  {
    title: "Bid Management",
    description:
      "Comprehensive bid management solutions to improve success rates.",
    icon: <FaChartLine className="text-green-500 text-4xl" />,
  },
  {
    title: "Consultancy Services",
    description: "Expert consultancy to navigate complex tender processes.",
    icon: <FaHandsHelping className="text-orange-500 text-4xl" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
