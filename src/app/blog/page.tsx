import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { getAllBlogPosts } from "@/content/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Mold Sourcing Insights & Guides",
  description:
    "Expert guides on injection mold sourcing, steel selection, DFM tips, and importing molds from China. Written for manufacturing professionals.",
};

const PUBLISHED = getAllBlogPosts();

const COMING_SOON: any[] = [];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Expert guides on mold sourcing, steel selection, DFM, quality control, and importing molds from China. Written for engineers, purchasing managers, and manufacturing professionals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PUBLISHED.map((article) => (
              <article
                key={article.slug}
                className="group rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md overflow-hidden"
              >
                <Link href={`/blog/${article.slug}`} className="block p-6 cursor-pointer">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-accent">
                      {article.category}
                    </span>
                    <span className="text-xs text-steel-light">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-steel leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <time className="text-xs text-steel-light" dateTime={article.date}>{article.date}</time>
                    <span className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </article>
            ))}

            {COMING_SOON.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-gray-100 bg-surface shadow-sm overflow-hidden opacity-60"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-steel-light">
                      {article.category}
                    </span>
                    <span className="text-xs text-steel-light">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-steel">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-steel-light leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-xs text-steel-light">{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want a Specific Topic Covered?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            We write about what matters to you. Let us know what mold sourcing topics you would like us to cover.
          </p>
          <div className="mt-8">
            <Button href="/contact">Suggest a Topic &rarr;</Button>
          </div>
        </div>
      </section>
    </>
  );
}
