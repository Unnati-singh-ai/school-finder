const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    text: "The platform made it easier to discover and compare different schools.",
  },
  {
    name: "Rahul Mehta",
    role: "Parent",
    text: "I could check school information in one place instead of visiting many websites.",
  },
  {
    name: "Anita Verma",
    role: "Parent",
    text: "The search and comparison features are simple and easy to use.",
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">
            PARENT REVIEWS
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            What parents say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-blue-50 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-4 leading-7">
                "{item.text}"
              </p>

              <div className="mt-5">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;