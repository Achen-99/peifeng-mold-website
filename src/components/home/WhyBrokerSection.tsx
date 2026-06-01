import { ADVANTAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Engineering + Manufacturing, Managed for You"
          description="We are not just a middleman. Our engineers handle DFM and QC. Our project managers coordinate manufacturing with audited factory partners. You get one accountable team and competitive pricing."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((advantage) => (
            <div
              key={advantage.title}
              className="group rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{advantage.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {advantage.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
