import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work — Our Process",
  description:
    "From DFM review to final delivery — how our engineering team manages your mold project. Free DFM, factory matching, independent QC, and export logistics.",
};

const DETAILED_STEPS = [
  {
    step: 1,
    title: "Design for Manufacturability (DFM) Review",
    content:
      "Send us your 3D file (STEP, IGES, STL) or 2D drawing. Our engineers analyze draft angles, wall thickness, undercuts, gate placement, parting line, and cooling layout. You receive a detailed DFM report with actionable recommendations — free with every quote. This step alone often saves thousands by catching design issues before steel is cut.",
  },
  {
    step: 2,
    title: "Mold Design & Customer Approval",
    content:
      "Our engineers create or review the complete 3D mold design: cavity layout, gate locations, cooling channels, ejection system, and parting line. We send the design to you for review and approval before any metal is cut. You have full visibility and final say.",
  },
  {
    step: 3,
    title: "Factory Matching & Quoting",
    content:
      "Based on your mold type, size, cavitation, steel requirements, and production volume, we select the best-suited factory from our network of audited partners. We negotiate pricing in Chinese with deep local market knowledge. You receive a transparent, itemized quotation. No hidden markups.",
  },
  {
    step: 4,
    title: "Steel Procurement & Verification",
    content:
      "Steel is ordered from certified mills. Upon arrival, we verify: spectrometer grade check, hardness testing, and dimensional inspection. We confirm the steel matches your specification before machining begins. Material certificates are included in your QC documentation package.",
  },
  {
    step: 5,
    title: "Manufacturing & Progress Tracking",
    content:
      "Manufacturing proceeds through CNC rough machining, heat treatment (when required), EDM, wire cutting, surface grinding, and polishing. You receive weekly progress updates with photos from our project manager. Key milestones: rough machining complete, EDM complete, polishing, assembly.",
  },
  {
    step: 6,
    title: "Mold Assembly & Fitting",
    content:
      "All components — cavity, core, slides, lifters, ejector system, cooling circuits, and hot runner manifold (if applicable) — are assembled and fitted. Cooling circuits are pressure-tested. Ejection is function-tested. Every fit and clearance is verified.",
  },
  {
    step: 7,
    title: "Mold Trial (T1 Sample)",
    content:
      "The mold is trialed on an injection molding machine. Sample parts are produced and measured. You receive T1 samples with a full CMM dimensional report. If adjustments are needed, we coordinate T2 and T3 trials until the mold meets the agreed specifications — at no extra cost if the mold has not met spec.",
  },
  {
    step: 8,
    title: "Final QC Inspection",
    content:
      "Our independent QC team performs the comprehensive final inspection: CMM dimensional verification, hardness re-check, cooling circuit flow test, ejection system function test, hot runner electrical test (if applicable), surface finish verification, and complete visual inspection. You receive the full QC documentation package before making final payment.",
  },
  {
    step: 9,
    title: "Shipping Preparation & Export",
    content:
      "The mold is cleaned, all steel surfaces are treated with rust preventive, critical components are vacuum-sealed, and the mold is bolted into a reinforced export-grade plywood crate. We handle export documentation, customs clearance, and freight (sea or air). You receive tracking information the day it ships.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How We Work</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            From your CAD file to a finished mold at your door — here is exactly how we manage every project. Our engineers are involved at every stage. Nothing is left to chance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {DETAILED_STEPS.map((s) => (
              <div key={s.step} className="grid gap-8 sm:grid-cols-[80px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shrink-0">
                  {s.step}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-primary">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-steel">{s.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start With a Free DFM Review
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Step 1 costs nothing. Send us your CAD file and our engineers will review your design — free, no obligation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="!bg-white !text-accent hover:!bg-gray-100">
              Send Your Design &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
