import { useState } from "react";
import { Search, MapPin, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [city, setCity] = useState("");
  const [className, setClassName] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (city) params.set("city", city);
    if (className) params.set("class", className);

    navigate(`/schools?${params.toString()}`);
  };

  return (
    <section className="bg-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">

          <div>
            <p className="text-blue-600 font-semibold mb-4">
              FIND THE RIGHT SCHOOL
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find the perfect
              <span className="text-blue-500"> school </span>
              for your child
            </h1>

            <p className="text-gray-600 text-lg mt-5 max-w-xl mb-8">
              Discover schools, compare fees, explore facilities and
              find the best education option for your child.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-4 mt-8">

              <div className="grid sm:grid-cols-2 gap-3">

                {/* City */}
                <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                  <MapPin className="text-blue-600" size={20} />

                  <div className="w-full">

                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="outline-none text-gray-800 w-full bg-gray-100"
                    >
                      <option value="">Select city</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                    </select>
                  </div>
                </div>

                {/* Class */}
                <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                  <GraduationCap className="text-blue-600" size={20} />

                  <div className="w-full">

                    <select
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="outline-none text-gray-800 w-full bg-transparent"
                    >
                      <option value="">Select class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 10">Class 10</option>
                    </select>
                  </div>
                </div>

              </div>

              <button
                onClick={handleSearch}
                className="w-full mt-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Search size={20} />
                Search Schools
              </button>

            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ml-2px mt-2px">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                alt="Students in classroom"
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 sm:left-8 bg-white shadow-xl rounded-xl p-4 flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <GraduationCap className="text-blue-600" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;