const steps = [
  {
    number: "01",
    title: "Search",
    description: "Enter your city, class or preferred school type.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Check school details, facilities, boards and fees.",
  },
  {
    number: "03",
    title: "Compare",
    description: "Compare schools and shortlist your favorites.",
  },
  {
    number: "04",
    title: "Enquire",
    description: "Send an enquiry and take the next admission step.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">
            SIMPLE PROCESS
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            How SchoolFinder works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <span className="text-4xl font-bold text-blue-100">
                {step.number}
              </span>

              <h3 className="text-xl font-bold mt-3">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-2 leading-6">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;