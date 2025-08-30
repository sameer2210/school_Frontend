export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to School App 🎓</h1>
      <p className="text-gray-600 mb-8">
        Manage schools easily — add, view, and organize school details.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/addSchool"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ➕ Add School
        </a>
        <a
          href="/listSchools"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          📋 Show Schools
        </a>
      </div>
    </section>
  );
}
