import Link from "next/link";
import { MOLD_TYPES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function MoldTypesSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Source"
          title="Precision Molds for Every Process"
          description="From single-cavity prototype tools to high-volume multi-cavity production molds, we connect you with specialized factories for each mold type."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MOLD_TYPES.map((mold) => (
            <Link
              key={mold.slug}
              href={`/services/${mold.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{mold.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {mold.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel">
                {mold.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
