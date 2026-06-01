import Link from "next/link";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <div className="mx-auto max-w-md px-4 text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl font-semibold text-primary">Page Not Found</p>
        <p className="mt-2 text-steel">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
