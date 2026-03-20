import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-12 bg-emerald-600 text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-lg">
        Contact us today to learn more about how we can help with your tender
        management.
      </p>
      <Link
        href="/contact"
        className="btn-secondary mt-6"
      >
        Contact Us
      </Link>
    </section>
  );
}
