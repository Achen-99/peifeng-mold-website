import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received. We will review your mold requirements and respond within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        {/* Checkmark */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Thank You for Your Inquiry!
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel">
          We have received your mold requirements and will review them promptly. You can expect a response from our team <span className="font-semibold text-primary">within 24 hours</span>.
        </p>

        {/* What happens next */}
        <div className="mt-12 rounded-xl border border-gray-100 bg-white p-8 text-left shadow-sm">
          <h2 className="mb-6 text-center text-lg font-semibold text-primary">What Happens Next</h2>
          <div className="space-y-4">
            {[
              {
                title: "We Review Your Specs",
                time: "Within 24 hours",
                desc: "Our team reviews your CAD files, part description, and requirements.",
              },
              {
                title: "We Match Your Project",
                time: "24-48 hours",
                desc: "We identify the best-suited factory from our network for your specific mold type and requirements.",
              },
              {
                title: "You Receive a Quote",
                time: "48-72 hours",
                desc: "You receive a detailed, itemized quotation including mold cost, lead time, and shipping estimate.",
              },
              {
                title: "We Begin Your Mold",
                time: "Upon your approval",
                desc: "Once you approve the quote and DFM feedback, manufacturing begins. You receive weekly progress updates.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-primary">{step.title}</h3>
                    <span className="text-xs text-steel-light">{step.time}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-steel">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog suggestions */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-primary">While You Wait, You Might Find These Helpful</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/blog" variant="outline">
              Read Our Mold Sourcing Guide &rarr;
            </Button>
            <Button href="/faq" variant="outline">
              Browse FAQ &rarr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
