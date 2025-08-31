interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
}

async function fetchSchools(): Promise<School[]> {
  const response = await fetch('http://localhost:3000/showSchools');
  if (!response.ok) {
    throw new Error('Failed to fetch schools');
  }
  const { data } = await response.json();
  return data;
}

export default async function ShowSchools() {
  const schools = await fetchSchools();

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Schools List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {schools.map(school => (
          <div key={school.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
            <img src={school.image} alt={school.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-1">{school.name}</h2>
              <p className="text-gray-700 mb-1">{school.address}</p>
              <p className="text-gray-500">{school.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
