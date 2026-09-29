import { useState } from "react";
import { Check, X } from "lucide-react";
import schools from "../data/schools";

function Compare() {
  const [selected, setSelected] = useState([]);

  const toggleSchool = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, id]);
      } else {
        alert("You can compare maximum 3 schools.");
      }
    }
  };

  const selectedSchools = schools.filter((school) =>
    selected.includes(school.id)
  );

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Compare Schools
          </h1>

          <p className="mt-3 text-blue-100">
            Select schools and compare their important details.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* School Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {schools.map((school) => {
            const isSelected = selected.includes(school.id);

            return (
              <div
                key={school.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 transition ${
                  isSelected
                    ? "border-blue-600 shadow-lg"
                    : "border-transparent shadow-sm"
                }`}
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-gray-900">
                    {school.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {school.city} • {school.board}
                  </p>

                  <button
                    onClick={() => toggleSchool(school.id)}
                    className={`w-full mt-4 py-2 rounded-lg font-semibold ${
                      isSelected
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isSelected ? "Remove" : "Compare"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        {selectedSchools.length > 0 && (
          <div className="mt-10 bg-white rounded-2xl shadow-sm overflow-x-auto">

            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">
                School Comparison
              </h2>

              <p className="text-gray-500 mt-1">
                Comparing {selectedSchools.length} school
                {selectedSchools.length > 1 ? "s" : ""}
              </p>
            </div>

            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-5">Details</th>

                  {selectedSchools.map((school) => (
                    <th
                      key={school.id}
                      className="text-left p-5"
                    >
                      {school.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-5 font-semibold">City</td>

                  {selectedSchools.map((school) => (
                    <td key={school.id} className="p-5">
                      {school.city}
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">Board</td>

                  {selectedSchools.map((school) => (
                    <td key={school.id} className="p-5">
                      {school.board}
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">Classes</td>

                  {selectedSchools.map((school) => (
                    <td key={school.id} className="p-5">
                      {school.classes}
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">Annual Fee</td>

                  {selectedSchools.map((school) => (
                    <td key={school.id} className="p-5 font-semibold">
                      {school.fee}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-5 font-semibold">
                    Facilities
                  </td>

                  {selectedSchools.map((school) => (
                    <td key={school.id} className="p-5">
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          Smart Classrooms
                        </p>

                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          Library
                        </p>

                        <p className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          Sports
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {selectedSchools.length === 0 && (
          <div className="mt-10 bg-white rounded-2xl p-10 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Select schools to compare
            </h2>

            <p className="text-gray-500 mt-2">
              Choose up to 3 schools from the options above.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default Compare;