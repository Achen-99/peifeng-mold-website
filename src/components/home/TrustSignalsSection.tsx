import { TRUST_SIGNALS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TrustSignalsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality You Can Rely On"
          title="International Standards, Consistently Met"
          description="Every mold is built to the specification and standard your market requires. We verify compliance before shipping."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal.label}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-primary">{signal.label}</h3>
              <p className="text-sm text-steel">{signal.description}</p>
            </div>
          ))}
        </div>

        {/* Additional trust text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-steel-light">
            Our partner factories are audited for quality management, workplace safety, and environmental compliance.
            <br />
            Full documentation provided with every mold shipment.
          </p>
        </div>
      </div>
    </section>
  );
}
