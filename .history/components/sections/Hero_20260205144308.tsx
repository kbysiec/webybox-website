import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-radial-hero from-brand-violet-200/30 via-brand-violet-100/10 to-transparent dark:from-brand-violet-950/30 dark:via-brand-violet-950/5" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-brand-ink-950 sm:text-5xl md:text-6xl dark:text-white">
                Webybox
                <span className="block text-brand-violet-600 dark:text-brand-violet-400">
                  Indie dev studio
                </span>
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl text-balance">
                Creating beautiful mobile and web applications with attention to
                detail, clean UX, and modern technology.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Learn more</a>
              </Button>
            </div>
          </div>

          {/* Logo showcase */}
          <div className="relative flex items-center justify-center animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-violet-200 to-brand-violet-400 opacity-20 blur-3xl dark:from-brand-violet-800 dark:to-brand-violet-950" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-mint-300 to-brand-violet-300 opacity-10 blur-2xl" />

              {/* Logo Icon */}
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <Image
                  src="/webybox-icon.svg"
                  alt="Webybox"
                  width={256}
                  height={256}
                  className="w-48 h-auto md:w-64 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
