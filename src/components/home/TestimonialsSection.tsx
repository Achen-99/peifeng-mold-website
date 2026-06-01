import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-amber-600",
  ];
  const colorIndex = name.length % colors.length;

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full ${colors[colorIndex]} text-sm font-bold text-white`}
    >
      {initials}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Trusted by Manufacturers Worldwide"
          description="We have earned the trust of injection molding companies, product brands, and industrial designers across 12+ countries."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-steel">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <Avatar name={testimonial.name} />
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-steel-light">
                    {testimonial.title}, {testimonial.company}
                  </div>
                  <div className="text-xs text-steel-light">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
