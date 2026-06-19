import { notFound } from "next/navigation";
import { getCaseStudy } from "@/content/case-studies";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Not Found" };

  return {
    title: cs.title,
    description: `${cs.client} — ${cs.moldType}. ${cs.result.split(".")[0]}.`,
    openGraph: {
      title: cs.title,
      description: cs.result,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: "automotive-sensor-housing" },
    { slug: "medical-device-enclosure" },
    { slug: "aluminum-die-cast-housing" },
  ];
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-400">
            <a href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <span>/</span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium">
              {cs.industry}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{cs.title}</h1>
          <p className="mt-3 text-lg text-gray-300">{cs.client}</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Mold Type", value: cs.moldType },
              { label: "Steel", value: cs.steel },
              { label: "Cavitation", value: cs.cavitation },
              { label: "Lead Time", value: cs.leadTime },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white/10 p-3 text-center">
                <div className="text-xs text-gray-400">{s.label}</div>
                <div className="mt-1 text-sm font-semibold">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-accent/20 p-4 text-center">
            <p className="text-lg font-bold">{cs.result}</p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-li:text-steel prose-p:text-steel prose-strong:text-primary prose-table:rounded-lg prose-table:overflow-hidden prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-gray-100"
            dangerouslySetInnerHTML={{ __html: cs.content }}
          />

          <div className="mt-16 rounded-xl bg-primary p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Ready for a Similar Result?</h2>
            <p className="mx-auto mt-3 max-w-lg text-gray-300">
              Every project starts with a free DFM review and detailed quote. We respond within 24 hours with an honest technical assessment.
            </p>
            <div className="mt-6">
              <Button href="/contact">Start Your Project &rarr;</Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
