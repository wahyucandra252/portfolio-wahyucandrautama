import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-32 md:w-36">
      {/* Logo Container */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="relative">
          {/* Animated Background Circle */}
          <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>

          {/* Logo Image */}
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Skill Name */}
        <h3 className="text-sm font-semibold text-gray-900 text-center line-clamp-2">
          {skill.name}
        </h3>

        {/* Category Badge */}
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full whitespace-nowrap">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
