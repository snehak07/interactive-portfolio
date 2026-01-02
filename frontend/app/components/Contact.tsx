export default function Contact() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Contact
      </h2>

      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg text-center space-y-4">
        <p className="text-gray-700">
          I’m open to internship and full-time opportunities.
        </p>

        <p>
          📧 <a
            href="mailto:your-email@example.com"
            className="text-blue-600 underline"
          >
            snehha37@gmail.com
          </a>
        </p>

        <p>
          💼 <a
            href="https://github.com/snehak07"
            target="_blank"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        </p>

        <p>
          🔗 <a
            href="https://www.linkedin.com/in/sneha-k-a53412210/"
            target="_blank"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
