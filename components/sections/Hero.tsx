import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WebyboxIcon } from "@/components/WebyboxIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50/30 dark:from-[#0a0a0f] dark:via-[#1a0f2e] dark:to-[#0f0a15]" />

        {/* Animated ambient glow - single subtle orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-violet-400/40 via-brand-mint-400/20 to-transparent rounded-full blur-[150px] animate-float dark:from-brand-violet-500/30 dark:via-brand-mint-500/15" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Center spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-radial from-brand-violet-300/60 via-brand-violet-200/20 to-transparent dark:from-brand-violet-600/30 dark:via-brand-violet-500/5 dark:to-transparent" />
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
          <div className="relative flex items-center justify-center animate-slide-up p-12">
            <WebyboxIcon className="w-48 h-auto md:w-64 drop-shadow-2xl transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </Container>
    </section>
  );
}
