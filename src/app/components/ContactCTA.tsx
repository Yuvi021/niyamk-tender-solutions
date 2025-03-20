import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-12 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-lg">
        Contact us today to learn more about how we can help with your tender
        management.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
