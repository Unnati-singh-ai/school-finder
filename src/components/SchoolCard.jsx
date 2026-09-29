import { Link } from "react-router-dom";
import { MapPin, GraduationCap } from "lucide-react";

function SchoolCard({ school }) {
  return (
    <div className="bg-blue-100 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={school.image}
          alt={school.name}
          className="w-full h-52 object-cover"
        />

        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
          {school.board}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
          {school.name}
        </h3>

        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <MapPin size={17} className="text-blue-600" />
          <span>{school.city}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <GraduationCap size={17} className="text-blue-600" />
          <span>{school.classes}</span>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t">

          <div>
            <p className="text-xs text-gray-500">
              Annual Fee
            </p>

            <p className="font-bold text-gray-900">
              {school.fee}
            </p>
          </div>

          <Link
            to={`/schools/${school.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
            View School
            </Link>

        </div>

      </div>
    </div>
  );
}

export default SchoolCard;