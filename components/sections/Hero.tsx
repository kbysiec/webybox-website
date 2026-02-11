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

        {/* Floating shapes - LIGHT MODE */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-brand-violet-400/60 to-brand-violet-500/40 rounded-full blur-[100px] animate-float dark:opacity-0" />
        <div className="absolute top-40 right-10 w-[700px] h-[700px] bg-gradient-to-tl from-brand-mint-400/50 to-cyan-300/40 rounded-full blur-[90px] animate-float-delayed dark:opacity-0" />
        <div className="absolute bottom-20 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-purple-400/50 to-brand-violet-400/45 rounded-full blur-[105px] animate-float-slow dark:opacity-0" />

        {/* Floating shapes - DARK MODE */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-violet-500/40 rounded-full blur-[120px] animate-float opacity-0 dark:opacity-100" />
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-brand-mint-500/30 rounded-full blur-[100px] animate-float-delayed opacity-0 dark:opacity-100" />
        <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-brand-violet-400/35 rounded-full blur-[110px] animate-float-slow opacity-0 dark:opacity-100" />

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
          <div className="relative flex items-center justify-center animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-violet-300/40 via-brand-violet-400/30 to-brand-violet-500/20 blur-3xl dark:from-brand-violet-600/50 dark:via-brand-violet-500/40 dark:to-brand-violet-700/30" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-brand-mint-400/20 to-brand-violet-400/30 blur-2xl dark:from-brand-mint-500/30 dark:to-brand-violet-500/40" />

              {/* Logo Icon */}
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <WebyboxIcon className="w-48 h-auto md:w-64 drop-shadow-2xl animate-logo-float" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
