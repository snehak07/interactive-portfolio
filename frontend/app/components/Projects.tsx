const projects = [
  {
    title: "Schedula",
    description:
      "Scheduling platform built during internship to manage appointments and availability.",
    tech: ["NestJS", "PostgreSQL", "TypeORM"],
  },
  {
    title: "1851 Franchise Platform",
    description:
      "Backend services for franchise management using scalable REST APIs.",
    tech: ["NestJS", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-700 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm bg-gray-100 px-3 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
