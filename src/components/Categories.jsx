import { School, Home, Laptop } from "lucide-react";

const categories = [
  {
    icon: School,
    title: "Day Schools",
    description: "Explore schools for everyday classroom learning.",
  },
  {
    icon: Home,
    title: "Boarding Schools",
    description: "Find trusted schools with residential facilities.",
  },
  {
    icon: Laptop,
    title: "Online Schools",
    description: "Discover flexible online education options.",
  },
];

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">
            EXPLORE SCHOOLS
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Find the right type of school
          </h2>

          <p className="text-gray-600 mt-3">
            Choose from different school options based on your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition">
                  <Icon
                    size={28}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {category.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {category.description}
                </p>

                <button className="text-blue-600 font-semibold mt-4">
                  Explore →
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Categories;