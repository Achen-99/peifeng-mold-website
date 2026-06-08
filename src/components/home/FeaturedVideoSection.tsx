import { SectionHeading } from "@/components/shared/SectionHeading";
import { HOMEPAGE_VIDEO } from "@/lib/constants";

export function FeaturedVideoSection() {
  // No video configured yet — show placeholder
  if (!HOMEPAGE_VIDEO.url) {
    return (
      <section className="bg-surface-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="See Our Work"
            title="Mold Making in Action"
            description="Watch CNC machining, EDM cutting, mold assembly, and trial shots from our manufacturing partners' workshops."
            light
          />

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-gray-600 bg-gray-800/30">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <p className="mt-4 text-lg font-medium text-gray-300">
                  Video Coming Soon
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Upload your video to YouTube, then update{" "}
                  <code className="rounded bg-gray-700 px-1.5 py-0.5 text-xs text-gray-300">
                    HOMEPAGE_VIDEO.url
                  </code>{" "}
                  in constants.ts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Video configured — show it
  return (
    <section className="bg-surface-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See Our Work"
          title="Mold Making in Action"
          description="Watch CNC machining, EDM cutting, mold assembly, and trial shots from our manufacturing partners' workshops."
          light
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            {HOMEPAGE_VIDEO.platform === "youtube" ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${HOMEPAGE_VIDEO.url}`}
                title="Peifeng Precision mold manufacturing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                src={HOMEPAGE_VIDEO.url}
                controls
                playsInline
                poster={HOMEPAGE_VIDEO.poster}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
