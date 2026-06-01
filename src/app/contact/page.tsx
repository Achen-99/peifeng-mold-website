import { RFQForm } from "@/components/contact/RFQForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Mold Quote — Free DFM Review",
  description:
    "Submit your CAD file for a free DFM review and detailed mold quote. Our engineers respond within 24 hours. No obligation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get Your Mold Quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Fill out the form and attach your CAD file or part drawing. Our engineers provide a free DFM review and detailed quote within 24 hours — no obligation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <RFQForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-primary">
                  Prefer to Email Directly?
                </h2>
                <div className="space-y-3 text-sm">
                  <p className="text-steel">
                    Send your CAD files and requirements to:
                  </p>
                  <a href="mailto:info@peifengmold.com" className="block text-accent hover:underline font-medium">
                    info@peifengmold.com
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-primary">What to Expect</h2>
                <ul className="space-y-3">
                  {[
                    { time: "Within 24 hours", desc: "Free DFM review and acknowledgment" },
                    { time: "24-48 hours", desc: "Detailed quotation with steel and timeline" },
                    { time: "Upon approval", desc: "Mold design review and manufacturing start" },
                  ].map((item) => (
                    <li key={item.time} className="flex items-start gap-3 text-sm">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium text-primary">{item.time}</span>
                        <p className="text-steel-light">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-green-800">Your Design Is Safe</h3>
                    <p className="mt-1 text-xs text-green-700">
                      We sign NDAs as standard practice before receiving any design files. Your IP is protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
