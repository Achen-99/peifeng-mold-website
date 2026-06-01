import Link from "next/link";
import { MOLD_TYPES, STEEL_TYPES, MOLD_BASE_STANDARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mold Types We Deliver",
  description:
    "We manage the delivery of precision injection molds, die-casting molds, blow molds, and rapid tooling. In-house engineering and QC, audited manufacturing partners.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Mold Types We Deliver
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Our engineers manage every project from DFM to final QC. Manufacturing is done by specialized factory partners — each selected for their expertise in your specific mold type.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {MOLD_TYPES.map((mold) => (
              <Link
                key={mold.slug}
                href={`/services/${mold.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{mold.icon}</div>
                <h2 className="mb-2 text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {mold.title}
                </h2>
                <p className="text-sm leading-relaxed text-steel">
                  {mold.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View details
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technical Reference"
            title="Mold Steel Selection Guide"
            description="Our engineers help you select the right steel for your application, volume, and budget."
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-primary">Steel Grade</th>
                  <th className="py-3 pr-4 font-semibold text-primary">Hardness</th>
                  <th className="py-3 font-semibold text-primary">Applications</th>
                </tr>
              </thead>
              <tbody>
                {STEEL_TYPES.map((steel) => (
                  <tr key={steel.grade} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">{steel.grade}</td>
                    <td className="py-3 pr-4 text-steel">{steel.hardness}</td>
                    <td className="py-3 text-steel">{steel.applications}</td>
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
            eyebrow="Global Compatibility"
            title="Mold Base Standards"
            description="We build to your local standard — HASCO for Europe, DME for North America, LKM and MISUMI for global applications."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MOLD_BASE_STANDARDS.map((std) => (
              <div key={std.standard} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-1 text-lg font-semibold text-primary">{std.standard}</h3>
                <p className="mb-2 text-sm font-medium text-accent">{std.region}</p>
                <p className="text-sm text-steel">{std.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-steel">
            Send us your part design or description. Our engineers will recommend the right process, steel, and approach — free, no obligation.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Talk to Our Engineers &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
