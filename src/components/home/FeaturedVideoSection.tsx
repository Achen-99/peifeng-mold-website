import { SectionHeading } from "@/components/shared/SectionHeading";
import { CAPABILITIES } from "@/lib/constants";

export function FeaturedVideoSection() {
  return (
    <section className="bg-surface-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Precision Manufacturing Equipment"
          description="Our factory partners operate advanced CNC, EDM, and inspection systems to deliver molds that meet international standards."
          light
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.name}
              className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-500"
            >
              <h3 className="text-lg font-semibold text-white">{cap.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{cap.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
