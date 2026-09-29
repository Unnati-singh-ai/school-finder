const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
];

function PopularCities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">
            FIND SCHOOLS NEAR YOU
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Popular Cities
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {cities.map((city) => (
            <button
              key={city}
              className="border border-gray-200 rounded-xl py-4 font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition"
            >
              Schools in {city}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularCities;