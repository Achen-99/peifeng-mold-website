import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Control — Independent Inspection",
  description:
    "Our engineers inspect, not the factory. Four-stage independent QC: incoming steel, in-process, mold trial, and final pre-shipment. Full documentation with every mold.",
};

const QC_PHASES = [
  {
    title: "Incoming Steel Inspection",
    items: [
      "Steel grade verification via spectrometer",
      "Hardness testing — cavity, core, and critical components",
      "Material certificate cross-check with mill certificates",
      "Dimensional check of raw stock",
    ],
  },
  {
    title: "In-Process Inspection",
    items: [
      "CNC machining — first article dimensional check",
      "EDM electrode wear monitoring and replacement schedule",
      "Polishing — surface roughness measurement (Ra values)",
      "Assembly — component fit, alignment, and clearance verification",
      "Cooling circuit — pressure and leak test before mold close",
    ],
  },
  {
    title: "Mold Trial (T1) Inspection",
    items: [
      "Sample parts — full CMM dimensional report with GD&T callouts",
      "Visual inspection — sink marks, flash, short shots, warpage, weld lines",
      "Material verification — confirming correct resin type and grade used",
      "Cycle time measurement and optimization recommendations",
      "Part weight consistency check (shot-to-shot variation)",
    ],
  },
  {
    title: "Final Pre-Shipment Inspection",
    items: [
      "Complete dimensional verification of all mold components",
      "Hardness re-check on cavity, core, and wear surfaces",
      "Cooling circuit — flow rate and pressure test",
      "Ejection system — full-stroke function test under load",
      "Slide/lifter — operation test with timing verification",
      "Hot runner — electrical continuity and thermocouple test (if applicable)",
      "Surface finish — visual inspection under standardized 1000 lux lighting",
      "Rust prevention — all exposed steel surfaces treated",
      "Export crating — structural integrity and tie-down check",
    ],
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Quality Control</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Independent QC is the core of our value. We inspect — the factory does not inspect itself. Every mold goes through four stages of inspection with full documentation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="4 Stages of Independent QC"
            description="Our engineers inspect at every stage. You receive documentation at each checkpoint. Nothing leaves for shipping without passing every check."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {QC_PHASES.map((phase) => (
              <div key={phase.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-primary">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-steel">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Documentation You Receive"
            description="Every mold ships with a complete QC documentation package. Nothing is hidden."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "CMM dimensional report with GD&T",
              "Material certificates (steel mill origin)",
              "Hardness test report",
              "Mold trial inspection report with photos",
              "Sample part measurement data",
              "Cooling circuit flow test report",
              "Surface finish measurement (Ra values)",
              "Hot runner test report (if applicable)",
              "Export packing list with photos",
              "Bill of lading / AWB",
              "Customs/commercial invoice",
              "Warranty certificate",
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4">
                <svg className="h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-steel">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quality You Can Verify
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Ask us for sample QC reports from previous projects. We are happy to share — transparency builds trust.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Inquire About Our QC Process &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
