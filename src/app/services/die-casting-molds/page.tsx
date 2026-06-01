import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Die-Casting Molds — Factory Manufacturing",
  description:
    "Our Shenzhen factory manufactures high-pressure die-casting molds for aluminum, zinc, and magnesium alloys. In-house design, machining, and inspection.",
};

const SPECS = [
  { label: "Process", value: "High-pressure die casting (HPDC)" },
  { label: "Materials", value: "Aluminum (ADC12, A380), Zinc (Zamak 3/5), Magnesium" },
  { label: "Cavitation", value: "Single to 8+ cavity" },
  { label: "Mold Life", value: "100K to 500K+ shots" },
  { label: "Max Mold Size", value: "Up to 1,800 × 1,200 mm" },
  { label: "Lead Time", value: "6-10 weeks" },
];

const QC_ITEMS = [
  "CMM dimensional verification — full report",
  "Die trial — sample casting inspection with measurement data",
  "Material certification — tool steel grade verification",
  "Hardness testing — cavity and core before and after HT",
  "Cooling line — flow rate and leak test",
  "Ejector pin — function and alignment check",
  "Slide and lifter — operation and timing test",
  "Surface treatment — nitriding/coating verification",
];

export default function DieCastingMoldsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-white">Die-Casting Molds</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Die-Casting Molds</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            We manufacture high-pressure die-casting molds for aluminum, zinc, and magnesium alloys. Built in-house for high-volume production with tight tolerances.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Die-Casting Mold Quote &rarr;</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">Capability Overview</h3>
              <div className="divide-y divide-gray-100 rounded-xl border border-gray-100">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="flex justify-between px-4 py-3 text-sm">
                    <span className="font-medium text-primary">{spec.label}</span>
                    <span className="text-steel">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">In-House QC Checklist</h3>
              <div className="space-y-2">
                {QC_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-steel">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need a Die-Casting Mold?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Send us your 3D file. Free DFM review and factory-direct quote within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Quote &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
