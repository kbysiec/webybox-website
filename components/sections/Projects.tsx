import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const projects = [
  {
    name: "TaskFlow Pro",
    description:
      "A modern task management application with real-time collaboration, calendar integration, and smart notifications.",
    status: "Coming soon",
    tags: ["Mobile", "Web", "Productivity"],
  },
  {
    name: "Mindful",
    description:
      "Meditation and wellness app featuring guided sessions, progress tracking, and personalized recommendations.",
    status: "Coming soon",
    tags: ["Mobile", "Health", "AI"],
  },
  {
    name: "LocalBiz",
    description:
      "Platform connecting local businesses with customers, featuring real-time inventory, booking system, and reviews.",
    status: "Coming soon",
    tags: ["Web", "E-commerce", "Maps"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-neutral-50 dark:bg-[#0f0e12]">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink-950 sm:text-4xl dark:text-white">
              Our projects
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Exciting applications in development. Stay tuned for updates.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} hover className="flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-brand-ink-950 dark:text-white">
                      {project.name}
                    </h3>
                    <Badge variant="warning">{project.status}</Badge>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
