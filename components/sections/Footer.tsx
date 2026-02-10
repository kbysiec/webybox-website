import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#181620]">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-ink-950 dark:text-white">
                Webybox
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                Indie dev studio creating beautiful mobile and web applications.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-brand-ink-950 dark:text-white">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-neutral-600 hover:text-brand-violet-600 dark:text-neutral-400 dark:hover:text-brand-violet-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-neutral-600 hover:text-brand-violet-600 dark:text-neutral-400 dark:hover:text-brand-violet-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-neutral-600 hover:text-brand-violet-600 dark:text-neutral-400 dark:hover:text-brand-violet-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-brand-ink-950 dark:text-white">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-neutral-600 hover:text-brand-violet-600 dark:text-neutral-400 dark:hover:text-brand-violet-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            <div className="flex flex-col gap-4 text-center text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:justify-between">
              <p>© {currentYear} Webybox. All rights reserved.</p>
              <p>
                Operated by{" "}
                <span className="font-medium text-brand-ink-950 dark:text-white">
                  Agile Players Kamil Bysiec
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
