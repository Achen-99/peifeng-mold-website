import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { STEEL_TYPES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Injection Molds",
  description:
    "Precision injection molds for thermoplastics. In-house DFM and QC, manufacturing by specialized partners. Single to multi-cavity, cold and hot runner. HASCO, DME, LKM, MISUMI.",
};

const SPECS = [
  { label: "Mold Base Standards", value: "HASCO, DME, LKM, MISUMI" },
  { label: "Cavitation", value: "Single cavity to 48+ cavity" },
  { label: "Runner Types", value: "Cold runner, hot runner, valve gate" },
  { label: "Mold Life", value: "100K to 1M+ shots (steel dependent)" },
  { label: "Max Mold Size", value: "Up to 2,000 × 1,500 mm" },
  { label: "Lead Time", value: "4-8 weeks (depending on complexity)" },
];

const QC_ITEMS = [
  "CMM dimensional inspection — full report with GD&T",
  "Mold trial — sample parts with measurement data",
  "Steel certification — grade verification via spectrometer",
  "Hardness testing — cavity and core before and after heat treatment",
  "Cooling circuit — flow rate and pressure test",
  "Ejection system — full function and cycle test",
  "Surface finish — visual inspection under standardized lighting",
  "Rust prevention and export crating verification",
];

const APPLICATIONS = [
  "Automotive interior and exterior components",
  "Consumer electronics housings and enclosures",
  "Medical device components",
  "Packaging — caps, closures, thin-wall containers",
  "Industrial equipment parts and connectors",
  "Home appliance components",
];

export default function InjectionMoldsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-white">Injection Molds</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Injection Molds</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Precision injection molds for thermoplastics — from single-cavity prototype tools to high-volume multi-cavity production systems. Our engineers handle DFM and QC. Manufacturing by specialized partners.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Injection Mold Quote &rarr;</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Injection Mold Delivery"
            description="Injection molding is the most widely used plastic manufacturing process. Getting the mold right is the single most important factor in part quality and production efficiency."
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">Common Applications</h3>
              <ul className="space-y-2">
                {APPLICATIONS.map((app) => (
                  <li key={app} className="flex items-start gap-2 text-sm text-steel">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Steel Options for Injection Molds"
            description="The right steel depends on your production volume, plastic material, and surface finish. Our engineers guide your selection."
          />
          <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 font-semibold text-primary">Grade</th>
                  <th className="px-4 py-3 font-semibold text-primary">Hardness</th>
                  <th className="px-4 py-3 font-semibold text-primary">Best For</th>
                </tr>
              </thead>
              <tbody>
                {STEEL_TYPES.map((steel) => (
                  <tr key={steel.grade} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">{steel.grade}</td>
                    <td className="px-4 py-3 text-steel">{steel.hardness}</td>
                    <td className="px-4 py-3 text-steel">{steel.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our QC for Injection Molds"
            description="Every injection mold goes through our comprehensive QC checklist — independently verified, not factory self-inspected."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {QC_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-steel">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Injection Mold?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Send us your CAD file. Free DFM review and detailed quote within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Quote &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
