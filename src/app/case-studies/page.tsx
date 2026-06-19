import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { getAllCaseStudies } from "@/content/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real Mold Projects Delivered",
  description:
    "See real injection, die-casting, and blow mold projects we have delivered for customers worldwide. Engineering specs, results, and customer feedback.",
};

const STUDIES = getAllCaseStudies();

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Real mold projects. Real results. See how we help manufacturers worldwide get quality molds at competitive pricing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-steel-light">{cs.moldType.split("—")[0].trim()}</span>
                </div>
                <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {cs.title}
                </h2>
                <p className="mt-2 text-sm text-steel">{cs.client}</p>
                <div className="mt-4 space-y-1 text-xs text-steel-light">
                  <p>Steel: {cs.steel}</p>
                  <p>Cavitation: {cs.cavitation}</p>
                  <p>Lead time: {cs.leadTime}</p>
                </div>
                <p className="mt-3 text-sm font-semibold text-accent">{cs.result.split(".")[0]}.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View case study &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Project Could Be Next
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Every project starts with a free DFM review. Send us your CAD file and see what we can do.
          </p>
          <div className="mt-8">
            <Button href="/contact">Start Your Project &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
