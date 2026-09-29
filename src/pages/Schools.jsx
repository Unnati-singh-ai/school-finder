import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";

import schools from "../data/schools";
import SchoolCard from "../components/SchoolCard";

function Schools() {
  const [searchParams] = useSearchParams();

  // Get city from URL
  const initialCity = searchParams.get("city") || "All";

  const [search, setSearch] = useState("");
  const [city, setCity] = useState(initialCity);
  const [board, setBoard] = useState("All");

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(search.toLowerCase());

    const matchesCity =
      city === "All" || school.city === city;

    const matchesBoard =
      board === "All" || school.board === board;

    return matchesSearch && matchesCity && matchesBoard;
  });

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Find Schools
          </h1>

          <p className="mt-3 text-blue-100">
            Search and explore schools based on your preferences.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">

          <div className="flex items-center gap-2 mb-5">
            <SlidersHorizontal
              size={20}
              className="text-blue-600"
            />

            <h2 className="font-bold text-lg">
              Search & Filter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">

            {/* Search */}
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search school..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* City */}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
            </select>

            {/* Board */}
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Boards</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
            </select>

          </div>
        </div>

        {/* Result Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Schools
          </h2>

          <p className="text-gray-500">
            {filteredSchools.length} schools found
          </p>
        </div>

        {/* School Cards */}
        {filteredSchools.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-xl font-bold">
              No schools found
            </h3>

            <p className="text-gray-500 mt-2">
              Try changing your search or filters.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default Schools;