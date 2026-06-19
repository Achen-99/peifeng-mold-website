import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost } from "@/content/blog";
import { Button } from "@/components/shared/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  // Return all known blog slugs for static generation
  return [
    { slug: "import-injection-molds-from-china" },
    { slug: "injection-mold-cost-breakdown" },
    { slug: "mold-steel-selection-guide" },
  ];
}

function ArticleJsonLd({ post }: { post: ReturnType<typeof getBlogPost> }) {
  if (!post) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Peifeng Precision",
    },
    publisher: {
      "@type": "Organization",
      name: "Peifeng Precision",
      url: "https://www.peifengmold.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd post={post} />

      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-400">
            <a href="/blog" className="hover:text-white transition-colors">
              Blog
            </a>
            <span>/</span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">{post.description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-li:text-steel prose-p:text-steel prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 rounded-xl bg-primary p-8 text-center text-white">
            <h2 className="text-2xl font-bold">
              Ready to Start Your Mold Project?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-gray-300">
              Submit your CAD file for a free DFM review and detailed quote.
              Our engineers respond within 24 hours. NDA signed before file
              review.
            </p>
            <div className="mt-6">
              <Button href="/contact">Get a Free Quote &rarr;</Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
