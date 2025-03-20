import Image from 'next/image';

const testimonials = [
  {
    name: "Rahul Sharma",
    designation: "CEO, ABC Enterprises",
    feedback:
      "Niyamak Tender Solutions helped us streamline our bidding process. Their expertise resulted in a 30% increase in our success rate.",
    image: "/images/author.png",
  },
  {
    name: "Priya Verma",
    designation: "Director, XYZ Pvt Ltd",
    feedback:
      "Their team provided excellent guidance and support throughout the tender submission process. Highly recommended!",
    image: "/images/author.png",
  },
  {
    name: "Amit Patel",
    designation: "MD, Bright Tech",
    feedback:
      "The post-submission assistance provided by Niyamak Tender Solutions was outstanding. They ensured we stayed ahead of the competition.",
    image: "/images/author.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Client Testimonials
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our clients trust us to deliver high-quality results that exceed their
          expectations.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-md"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
              <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
