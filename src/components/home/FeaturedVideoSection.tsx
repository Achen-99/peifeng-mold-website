"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-surface-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See Our Work"
          title="Mold Making in Action"
          description="Watch CNC machining, EDM cutting, mold assembly, and trial shots from our manufacturing partners' workshops. This is the quality we deliver on every project."
          light
        />

        <div className="mx-auto max-w-4xl">
          {playing ? (
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-400">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="mt-4 text-sm">
                    Video placeholder — upload to YouTube and replace the video ID
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative mx-auto block aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-gray-800 shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-lg transition-transform group-hover:scale-110">
                    <svg className="ml-1 h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-lg font-medium text-white">
                    See the quality we deliver
                  </p>
                  <p className="mt-1 text-sm text-gray-400">2 min video</p>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
