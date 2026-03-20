import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Niyamak Tender Solution",
  description:
    "Contact Niyamak Tender Solution for tender consultancy and GeM portal support. We'll help with tender study, DSC setup, authorization codes, bid management, and follow-ups.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-emerald-100">
              Have questions about our tender management solutions? We&apos;re here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-emerald-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">niyamaktender@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-emerald-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Location</h3>
                      <p className="text-gray-600">
                        Block-D-410, (PNTC) B/h Titanium City Center, Radio Mirchi Road, Prahladnagar, Ahmedabad-380051
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-emerald-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a1 1 0 011-1h.01a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zM7 10a1 1 0 011-1h.01a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4zM11 10a1 1 0 011-1h.01a1 1 0 011 1v4a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-4zM15 10a1 1 0 011-1h.01a1 1 0 011 1v4a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-4zM19 10a1 1 0 011-1h.01a1 1 0 011 1v4a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact Number</h3>
                      <p className="text-gray-600">+91 8160781810</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
