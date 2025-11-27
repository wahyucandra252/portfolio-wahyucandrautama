import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/projects.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* background blur orbs */}
      <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-blue-200 rounded-full blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-[-90px] left-[-120px] w-[320px] h-[320px] bg-indigo-200 rounded-full blur-[110px] opacity-25 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div data-aos="fade-down">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="text-center text-gray-500 text-lg mb-16">
            Jejak profesional & kontribusi nyata dalam dunia teknologi.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-xl shadow-xl shadow-blue-100 hover:shadow-blue-200 transition-all duration-500 p-8 lg:p-10 flex flex-col md:flex-row gap-8 hover:scale-[1.01]"
            >
              {/* LOGO PERUSAHAAN */}
              <div className="flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company}-logo`}
                  className="w-20 h-20 object-contain opacity-90"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end text-gray-500 text-sm">
                    <span className="flex items-center mb-1">
                      <Calendar className="mr-2" size={16} />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-md leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 text-sm relative pl-5"
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
