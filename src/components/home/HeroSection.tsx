import { Button } from "@/components/shared/Button";
import { STATS, COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #ffffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {/* Trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-gray-200 backdrop-blur">
          <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Shenzhen, China — Mold Engineering & Manufacturing Management
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Precision Molds,
          <br />
          <span className="text-accent">Engineered in Shenzhen</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
          We handle mold engineering, DFM, quality control, and project management in-house.
          Manufacturing by our audited factory partners. One accountable contact. Competitive pricing.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg">
            Get Your Quote &rarr;
          </Button>
          <Button href="/process" variant="outline">
            See How We Work
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
