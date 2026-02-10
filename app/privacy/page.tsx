import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Webybox",
  description: "Privacy policy for Webybox applications and services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#181620]">
      <div className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#181620]">
        <Container>
          <div className="flex h-16 items-center">
            <Link
              href="/"
              className="text-xl font-bold text-brand-ink-950 hover:text-brand-violet-600 transition-colors dark:text-white dark:hover:text-brand-violet-400"
            >
              ← Webybox
            </Link>
          </div>
        </Container>
      </div>

      <Container size="md" className="py-16 md:py-24">
        <Card className="p-8 md:p-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold tracking-tight text-brand-ink-950 sm:text-4xl dark:text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Introduction
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Webybox ("we", "our", or "us") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, and
                  safeguard your information when you use our applications and
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Information We Collect
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-6">
                  <li>
                    <strong className="text-brand-ink-950 dark:text-white">Personal Information:</strong> Name,
                    email address, and contact details that you provide
                    voluntarily.
                  </li>
                  <li>
                    <strong className="text-brand-ink-950 dark:text-white">Usage Data:</strong> Information about
                    how you interact with our applications, including features
                    used and time spent.
                  </li>
                  <li>
                    <strong className="text-brand-ink-950 dark:text-white">Device Information:</strong> Device
                    type, operating system, and unique device identifiers.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  How We Use Your Information
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  We use the collected information for:
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-6">
                  <li>Providing and maintaining our services</li>
                  <li>Improving user experience and app functionality</li>
                  <li>Communicating with you about updates and support</li>
                  <li>Analyzing usage patterns to enhance our applications</li>
                  <li>Ensuring security and preventing fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Data Security
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Third-Party Services
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our applications may contain links to third-party services. We
                  are not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Your Rights
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-6">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Children&apos;s Privacy
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Changes to This Policy
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-ink-950 dark:text-white mb-3">
                  Contact Us
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-brand-violet-600 dark:text-brand-violet-400 mt-2">
                  <a href="mailto:contact@webybox.com" className="hover:underline">
                    contact@webybox.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-violet-600 hover:text-brand-violet-700 dark:text-brand-violet-400 dark:hover:text-brand-violet-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
