import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Mold Engineering & Manufacturing Questions",
  description:
    "Common questions about working with Peifeng: pricing, lead times, quality control, factory partners, payment terms, shipping, and more.",
};

const FAQS = [
  {
    q: "Are you a factory or a trading company?",
    a: "We are a mold engineering and manufacturing management company. We have our own engineering team (DFM, mold design review, project management, QC) based in Shenzhen. Manufacturing is done by our network of audited factory partners — each selected for its specific expertise in your mold type. We are transparent about this because we believe it is a better model: you get independent engineering and QC, plus the right factory for each project, rather than being locked into one facility's capabilities.",
  },
  {
    q: "What is the advantage of working with you vs going directly to a factory?",
    a: "Three key advantages: (1) Independent QC — we inspect the mold, the factory does not inspect itself. (2) Factory matching — each project goes to the factory best equipped for that specific mold type and volume. (3) Communication — English-speaking project manager, weekly updates, no language barrier. You get competitive pricing plus an advocate on your side.",
  },
  {
    q: "What is the typical cost of an injection mold?",
    a: "Mold cost depends on part size, complexity, cavitation, steel grade, and surface finish. A simple single-cavity mold typically ranges from $2,000 to $5,000. A complex multi-cavity hot-runner mold may range from $20,000 to $100,000+. Our pricing is competitive with factory-direct because we negotiate in Chinese with deep local market knowledge. Every quote includes a free DFM review.",
  },
  {
    q: "How long does it take to make a mold?",
    a: "Typical lead times: prototype/rapid tooling 2-4 weeks, standard injection molds 4-8 weeks, complex multi-cavity or large molds 8-12 weeks. We provide a detailed timeline with your quote and send weekly progress updates throughout manufacturing.",
  },
  {
    q: "What CAD file formats do you accept?",
    a: "STEP (.step, .stp), IGES (.iges, .igs), STL (.stl), Parasolid (.x_t, .x_b), SolidWorks (.sldprt), and 2D drawings (PDF, DWG, DXF). STEP with tolerances specified is preferred.",
  },
  {
    q: "How do you ensure mold quality?",
    a: "Our engineers inspect at four stages: (1) Incoming steel — spectrometer and hardness verification. (2) In-process — checks at each machining milestone. (3) Mold trial — sample parts measured on CMM with full dimensional report. (4) Final pre-shipment — comprehensive checklist before crating. You receive complete documentation and approve the mold before final payment.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard terms: 50% deposit to start, 50% balance before shipping — after you have reviewed and approved photos, video, and the QC report. For established customers, we can discuss net terms.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. All molds come with a standard warranty against manufacturing defects — typically 1 year or 500,000 shots (whichever comes first). Specific terms are in your quotation. If the mold does not meet agreed specifications, we coordinate corrections at no cost to you.",
  },
  {
    q: "How is the mold shipped internationally?",
    a: "We handle everything: rust preventive treatment, vacuum sealing of critical surfaces, reinforced export-grade plywood crating, export documentation, customs clearance, and freight (sea or air). Door-to-door delivery available. You receive tracking the day it ships.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes, we sign NDAs as standard practice before receiving any design files. Your intellectual property is protected. We never share, reuse, or reproduce customer designs without explicit written permission.",
  },
  {
    q: "What if the mold needs adjustments after delivery?",
    a: "If the mold does not meet agreed specifications, we coordinate corrections at our cost. For engineering changes you request after delivery, or wear-and-tear maintenance, we provide competitive rates and fast turnaround through our factory partners.",
  },
  {
    q: "Can I visit the manufacturing facility?",
    a: "Yes. We can arrange visits to the factory partner working on your project. Factory visits are a great way to see equipment, meet the team, and inspect work in progress. Contact us to schedule — we can arrange hotel and airport pickup in Shenzhen.",
  },
];

function FaqPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FaqPageJsonLd />
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Honest answers about how we work, pricing, quality, and what makes us different. If your question is not here, ask us directly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left">
                  <span className="text-lg font-semibold text-primary group-open:text-accent">
                    {faq.q}
                  </span>
                  <svg className="mt-1.5 h-5 w-5 shrink-0 text-steel-light group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <svg className="mt-1.5 hidden h-5 w-5 shrink-0 text-accent group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-steel">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a Question Not Listed Here?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Talk to our team directly. We respond to all inquiries within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
