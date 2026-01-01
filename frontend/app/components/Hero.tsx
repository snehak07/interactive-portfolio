export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I’m Sneha 👋
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
        Backend-focused developer with experience in NestJS, SQL databases,
        and building real-world applications.
      </p>

      <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
        View My Work
      </button>
    </section>
  );
}
