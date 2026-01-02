export default function Experience() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Hulhire Tech */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">
            Java Developer Intern
          </h3>
          <p className="text-gray-600">
            Hulhire Tech · 2 months
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Developed backend components using Java</li>
            <li>Worked on payment gateway integration system</li>
            <li>Implemented secure transaction handling</li>
          </ul>
        </div>

        {/* PearlThoughts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">
            Backend Developer Intern
          </h3>
          <p className="text-gray-600">
            PearlThoughts · Present
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Built backend APIs using NestJS</li>
            <li>Worked with PostgreSQL for Schedula project</li>
            <li>Developed services using MySQL for 1851 Franchise platform</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
