import { Button } from "@/components/shared/Button";

export function CTABanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, #ffffff33 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Next Mold Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
              Send us your CAD file or part drawing. Free DFM review and detailed quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Get Your Quote &rarr;
              </Button>
              <span className="text-sm text-gray-400">
                Or email us at info@peifengmold.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
