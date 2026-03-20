import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 bg-emerald-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to Boost Your Success?</h2>
        <p className="mt-4 text-lg">
          Get in touch with our team and explore our tender management solutions
          today.
        </p>
        <Link href="/contact" className="btn-secondary mt-6">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
