import schools from "../data/schools";
import SchoolCard from "./SchoolCard";

function FeaturedSchools() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">

          <div>
            <p className="text-blue-600 font-semibold">
              TOP SCHOOLS
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Featured Schools
            </h2>

            <p className="text-gray-600 mt-3">
              Explore popular schools and compare your options.
            </p>
          </div>

          <button className="text-blue-600 font-semibold mt-4 sm:mt-0">
            View All →
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {schools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedSchools;