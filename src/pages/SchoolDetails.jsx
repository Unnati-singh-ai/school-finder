import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  GraduationCap,
  IndianRupee,
  CheckCircle,
  ArrowLeft,
  User,
  Phone,
  Mail,
} from "lucide-react";

import schools from "../data/schools";

function SchoolDetails() {
  const { id } = useParams();

  const school = schools.find(
    (item) => item.id === Number(id)
  );

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
  });

  if (!school) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            School Not Found
          </h1>

          <Link
            to="/schools"
            className="inline-block mt-5 bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Back to Schools
          </Link>
        </div>
      </main>
    );
  }

  const facilities = [
    "Smart Classrooms",
    "Library",
    "Science Laboratory",
    "Computer Lab",
    "Sports Facilities",
    "Transport",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      className: "",
    });
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/schools"
          className="inline-flex items-center gap-2 text-blue-600 font-medium"
        >
          <ArrowLeft size={18} />
          Back to Schools
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img
            src={school.image}
            alt={school.name}
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
          />
        </div>

        {/* School Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mt-6 shadow-sm">

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {school.board}
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
                {school.name}
              </h1>

              <div className="flex items-center gap-2 text-gray-600 mt-4">
                <MapPin
                  size={20}
                  className="text-blue-600"
                />
                <span>{school.city}, India</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setSubmitted(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Send Enquiry
            </button>

          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4">
              <p className="font-semibold">
                Enquiry submitted successfully! 🎉
              </p>

              <p className="text-sm mt-1">
                Our admission team will contact you soon.
              </p>
            </div>
          )}

        </div>

        {/* Enquiry Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 mt-6 shadow-sm">

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Admission Enquiry
                </h2>

                <p className="text-gray-500 mt-1">
                  Enter your details and we'll contact you.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-5"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Parent Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                    className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Admission For
                </label>

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">
                    Select class
                  </option>

                  <option value="Nursery">
                    Nursery
                  </option>

                  <option value="KG">
                    KG
                  </option>

                  <option value="Class 1">
                    Class 1
                  </option>

                  <option value="Class 5">
                    Class 5
                  </option>

                  <option value="Class 10">
                    Class 10
                  </option>

                  <option value="Class 12">
                    Class 12
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
              >
                Submit Enquiry
              </button>

            </form>
          </div>
        )}

        {/* School Information */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              About the School
            </h2>

            <p className="text-gray-600 leading-7 mt-4">
              {school.name} is a modern educational institution
              focused on providing students with a supportive
              learning environment. The school offers academic
              programs along with activities designed to support
              students' overall development.
            </p>

            <h2 className="text-2xl font-bold mt-8">
              Facilities
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">

              {facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-green-500"
                  />

                  <span className="text-gray-700">
                    {facility}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Information Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm h-fit">

            <h2 className="text-xl font-bold mb-6">
              School Information
            </h2>

            <div className="space-y-5">

              <div className="flex gap-3">
                <GraduationCap className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">
                    Classes
                  </p>

                  <p className="font-semibold">
                    {school.classes}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <IndianRupee className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">
                    Annual Fee
                  </p>

                  <p className="font-semibold">
                    {school.fee}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold">
                    {school.city}
                  </p>
                </div>
              </div>

            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setSubmitted(false);
              }}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Apply / Enquire
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

export default SchoolDetails;         