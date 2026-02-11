import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container size="md">
        <AnimateOnScroll>
          <Card className="p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink-950 sm:text-4xl dark:text-white">
              About Webybox
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Webybox is an indie development studio focused on creating
              high-quality mobile and web applications. We believe in building
              products that are not only functional but also beautiful and
              enjoyable to use.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-brand-ink-950 dark:text-white">
                Our approach
              </h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brand-violet-600 dark:text-brand-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="text-brand-ink-950 dark:text-white">User-centered design:</strong> Every
                    decision is made with the end user in mind
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brand-violet-600 dark:text-brand-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="text-brand-ink-950 dark:text-white">Modern technology:</strong> Leveraging
                    the latest tools and frameworks for optimal results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-brand-violet-600 dark:text-brand-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>
                    <strong className="text-brand-ink-950 dark:text-white">Attention to detail:</strong> Sweating
                    the small stuff to deliver polished experiences
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
