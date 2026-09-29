import {
  Search,
  GitCompare,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy School Search",
    description: "Find schools quickly using location, class and board.",
  },
  {
    icon: GitCompare,
    title: "Compare Schools",
    description: "Compare important school details before deciding.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Information",
    description: "Get organized school information in one place.",
  },
  {
    icon: Headphones,
    title: "Admission Support",
    description: "Get help understanding the admission process.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">
            WHY SCHOOLFINDER
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Everything you need to find a school
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Make school discovery easier with useful information,
            comparison tools and admission support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-md transition"
              >
                <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="text-blue-600" size={26} />
                </div>

                <h3 className="text-lg font-bold mt-5">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;