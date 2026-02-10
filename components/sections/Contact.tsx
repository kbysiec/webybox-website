import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const email = "contact@webybox.com";

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50 dark:bg-[#0f0e12]">
      <Container size="md">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink-950 sm:text-4xl dark:text-white">
              Get in touch
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s talk about how we can work together.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href={`mailto:${email}`}>Send an email</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
