const skills = {
  Backend: ["NestJS", "Node.js", "Java", "Spring Boot"],
  Databases: ["MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Postman", "AWS"],
};

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-4">
              {category}
            </h3>

            <ul className="space-y-2">
              {items.map((skill) => (
                <li key={skill} className="text-gray-700">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
