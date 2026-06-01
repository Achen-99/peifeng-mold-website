import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real mold projects we have delivered. From 48-cavity connector molds to 2,000-ton automotive tools — see the quality we deliver.",
};

const CASE_STUDIES = [
  {
    title: "Coming Soon",
    summary:
      "We are documenting our best projects. Check back soon to see real examples of molds we have sourced and delivered for customers worldwide.",
    industry: "Various",
    country: "Global",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Real mold projects. Real results. See how we help manufacturers worldwide get the molds they need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Projects"
            description="Case studies with photos, specifications, and project outcomes are coming soon. In the meantime, contact us to discuss your project."
          />

          <div className="mx-auto max-w-xl rounded-xl border border-dashed border-gray-300 bg-surface p-12 text-center">
            <svg className="mx-auto h-12 w-12 text-steel-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="mt-4 text-steel">Case studies being prepared. Contact us for recent project examples.</p>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact">Discuss Your Project &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
