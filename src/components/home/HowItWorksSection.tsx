import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Your CAD to a Finished Mold in 4 Steps"
          description="Our proven in-house process ensures quality at every stage. You are updated weekly with photos and reports."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {step.step}
              </div>
              {step.step < 4 && (
                <div className="absolute left-[calc(50%+32px)] top-6 hidden h-0.5 w-[calc(100%-64px)] bg-gray-200 lg:block" />
              )}
              <div className="mb-2 text-3xl">{step.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/process" variant="outline">
            See Our Full Manufacturing Process &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
