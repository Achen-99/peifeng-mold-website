import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/shared/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Blow Molds — Factory Manufacturing",
  description:
    "Our Shenzhen factory manufactures extrusion and injection blow molds for bottles, containers, and hollow parts. High-volume production, consistent wall thickness.",
};

const SPECS = [
  { label: "Process", value: "Extrusion blow molding, Injection blow molding" },
  { label: "Materials", value: "HDPE, PP, PET, PVC, PC" },
  { label: "Cavitation", value: "Single to 16+ cavity" },
  { label: "Mold Life", value: "500K to 5M+ cycles" },
  { label: "Container Size", value: "50ml to 30L" },
  { label: "Lead Time", value: "4-7 weeks" },
];

export default function BlowMoldsPage() {
  return (
    <>
        <ServiceJsonLd name="Blow Mold Engineering" description="Extrusion and injection blow molds for bottles, containers, and hollow parts. Manufacturing by audited factory partners." url="https://www.peifengmold.com/services/blow-molds" />
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-white">Blow Molds</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Blow Molds</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            We manufacture extrusion and injection blow molds in-house. Built for high-volume production with consistent wall thickness and fast cycle times.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Blow Mold Quote &rarr;</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Blow Mold Manufacturing" description="From small pharmaceutical bottles to large industrial containers, we manufacture blow molds built for your specific application and production volume." />
          <div className="mx-auto max-w-2xl divide-y divide-gray-100 rounded-xl border border-gray-100">
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex justify-between px-4 py-3 text-sm">
                <span className="font-medium text-primary">{spec.label}</span>
                <span className="text-steel">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Need a Blow Mold?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Send us your bottle or container design. Free DFM review and factory-direct quote within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Your Quote &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
