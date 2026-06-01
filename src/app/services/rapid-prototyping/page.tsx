import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rapid Tooling & Prototype Molds — Fast Turnaround",
  description:
    "Fast-turnaround prototype molds manufactured in our Shenzhen factory. Design validation and low-volume production. Sample parts in as little as 2 weeks.",
};

const SPECS = [
  { label: "Process", value: "Rapid tooling, aluminum tooling, soft steel molds" },
  { label: "Mold Materials", value: "Aluminum, P20, pre-hardened steel" },
  { label: "Production Volume", value: "50 to 10,000 parts" },
  { label: "Lead Time", value: "2-4 weeks" },
  { label: "Mold Life", value: "500 to 10,000 shots" },
  { label: "Tolerances", value: "±0.1 mm to ±0.05 mm" },
];

export default function RapidPrototypingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-white">Rapid Tooling</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Rapid Tooling & Prototype Molds</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Fast-turnaround prototype molds manufactured in-house. Test your design before committing to full production tooling. Sample parts in as little as 2 weeks.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Start Your Prototype &rarr;</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Rapid Tooling Capabilities" description="Validate your design, test real materials, and get market feedback — without the cost and lead time of full production tooling." />
          <div className="mx-auto max-w-2xl divide-y divide-gray-100 rounded-xl border border-gray-100">
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex justify-between px-4 py-3 text-sm">
                <span className="font-medium text-primary">{spec.label}</span>
                <span className="text-steel">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Prototype Parts Fast?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Send us your CAD file. Sample parts in as little as 2 weeks. Free DFM review included.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Start Your Prototype &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
