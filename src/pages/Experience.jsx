import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "../data/projects.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-4 border border-gray-200/50 shadow-sm">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Perjalanan Karir
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Pengalaman
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Kerja
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Jejak profesional & kontribusi dalam dunia teknologi
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-transparent opacity-50"></div>

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="md:w-1/2">
                  <div className="group relative">
                    {/* Gradient Border Effect on Hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

                    {/* Main Card */}
                    <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50">
                      {/* Company Logo & Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50/80 px-3 py-1.5 rounded-lg">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></span>
                            <span className="flex-1">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative Glow */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
