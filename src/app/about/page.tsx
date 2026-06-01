import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { CAPABILITIES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shenzhen-based mold engineering and manufacturing management company. In-house DFM, project management, and QC. Audited factory partners. 10+ years in the mold industry.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Peifeng Precision</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            We are a mold engineering and manufacturing management company based in Shenzhen, China — the global center of mold making. Since 2015, we have delivered over 500 molds to customers in 15+ countries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="How We Work" centered={false} />
              <div className="space-y-4 leading-relaxed text-steel">
                <p>
                  We are not a factory, and we are not a passive middleman. We are an engineering-driven manufacturing partner. Here is what that means in practice:
                </p>
                <p>
                  <strong className="text-primary">We engineer.</strong> Our team includes experienced mold engineers who review every design for manufacturability. Free DFM feedback with every quote. We catch draft angle issues, wall thickness problems, and gate placement errors before steel is cut.
                </p>
                <p>
                  <strong className="text-primary">We manage.</strong> We have spent 10 years building relationships with specialized mold factories in the Shenzhen-Dongguan manufacturing corridor. Each factory has its strengths — some excel at high-cavity hot runner systems, others at large automotive molds, others at medical-grade tooling. We match your project to the right facility.
                </p>
                <p>
                  <strong className="text-primary">We inspect.</strong> Independent QC is our core value. The factory does not inspect itself — we do. Every mold goes through our multi-stage inspection: incoming steel verification, in-process checks, mold trial validation, and final pre-shipment inspection. You receive complete documentation.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading title="At a Glance" centered={false} />
              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Shenzhen, Guangdong, China' },
                  { label: 'Established', value: '2015' },
                  { label: 'Team', value: 'Engineering, QC, and project management' },
                  { label: 'Molds Delivered', value: '500+' },
                  { label: 'Factory Partners', value: '20+ audited facilities' },
                  { label: 'Mold Base Standards', value: 'HASCO, DME, LKM, MISUMI' },
                  { label: 'Export Markets', value: '15+ countries worldwide' },
                  { label: 'Languages', value: 'English, Mandarin, Cantonese' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between rounded-lg border border-gray-100 px-4 py-3 text-sm">
                    <span className="font-medium text-primary">{item.label}</span>
                    <span className="text-steel">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Manufacturing Capabilities"
            description="Through our network of audited factory partners, we deliver precision molds across the full range of processes and specifications."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap.name} className="rounded-xl border border-gray-100 bg-white p-5">
                <h3 className="font-semibold text-primary">{cap.name}</h3>
                <p className="mt-1 text-sm text-steel">{cap.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-steel-light">
            Detailed capability sheets and factory profiles available upon request. We encourage you to speak with our engineers about your specific requirements.
          </p>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Talk to Our Engineers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Send us your design. Our engineers will review it and provide free DFM feedback within 24 hours — no obligation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Start a Conversation &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
