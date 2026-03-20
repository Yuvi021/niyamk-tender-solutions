import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Niyamak Tender Solution
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Tender service consultancy and GeM portal support to help you win
              more tenders with fewer mistakes.
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <a href="tel:+918160781810" className="block hover:text-emerald-700">
                +91 8160781810
              </a>
              <a
                href="mailto:niyamaktender@gmail.com"
                className="block hover:text-emerald-700"
              >
                niyamaktender@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-700">
              <Link href="/" className="hover:text-emerald-700">
                Home
              </Link>
              <Link href="/about" className="hover:text-emerald-700">
                About
              </Link>
              <Link href="/services" className="hover:text-emerald-700">
                Services
              </Link>
              <Link href="/contact" className="hover:text-emerald-700">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Office</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Block-D-410, (PNTC) B/h Titanium City Center, Radio Mirchi Road,
              Prahladnagar, Ahmedabad-380051
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/niyamak-tender-solution/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-emerald-700 font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572305348596"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-emerald-700 font-semibold"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Niyamak Tender Solutions. All
            rights reserved.
          </p>
          <Link href="/contact" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            Get a Tender Plan
          </Link>
        </div>
      </div>
    </footer>
  );
}
