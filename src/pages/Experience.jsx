import React, { useEffect } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "../data/projects.js";

const Experience = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);
  return (
    <>
      {/* Load AOS CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      />
      {/* Load AOS JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

      <style>{`
        @keyframes float-circle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.4;
          }
          50% { 
            transform: translate(-20px, 40px) scale(0.9);
            opacity: 0.35;
          }
          75% { 
            transform: translate(40px, 20px) scale(1.05);
            opacity: 0.3;
          }
        }
        
        @keyframes float-circle-2 {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.25;
          }
          33% { 
            transform: translate(-40px, 30px) scale(1.15) rotate(120deg);
            opacity: 0.35;
          }
          66% { 
            transform: translate(25px, -35px) scale(0.85) rotate(240deg);
            opacity: 0.3;
          }
        }
        
        @keyframes float-circle-3 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.28;
          }
          40% { 
            transform: translate(35px, -25px) rotate(180deg) scale(1.08);
            opacity: 0.35;
          }
          80% { 
            transform: translate(-30px, 30px) rotate(360deg) scale(0.92);
            opacity: 0.25;
          }
        }
        
        @keyframes pulse-dot {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer {
          0% { 
            background-position: -1000px 0; 
          }
          100% { 
            background-position: 1000px 0; 
          }
        }
        
        .animate-float-circle {
          animation: float-circle 18s ease-in-out infinite;
        }
        
        .animate-float-circle-2 {
          animation: float-circle-2 22s ease-in-out infinite;
        }
        
        .animate-float-circle-3 {
          animation: float-circle-3 25s ease-in-out infinite;
        }
        
        .animate-pulse-dot {
          animation: pulse-dot 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .timeline-dot-pulse::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #a855f7);
          opacity: 0;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      <section
        id="experience"
        className="scroll-mt-24 py-20 md:py-32 relative overflow-hidden bg-white"
      >
        {/* Animated Background with Moving Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30"></div>

          {/* Animated floating circles - WITH VISIBLE MOVEMENT */}
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-gray-300/40 rounded-full animate-float-circle"></div>
          <div className="absolute top-40 right-20 w-80 h-80 border-2 border-blue-300/30 rounded-full animate-float-circle-2"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 border-2 border-purple-300/30 rounded-full animate-float-circle-3"></div>

          {/* Additional smaller circles for more dynamic effect */}
          <div
            className="absolute top-1/3 right-1/4 w-48 h-48 border border-pink-200/30 rounded-full animate-float-circle"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-56 h-56 border border-indigo-200/30 rounded-full animate-float-circle-2"
            style={{ animationDelay: "5s" }}
          ></div>

          {/* Animated decorative dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse-dot"></div>
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse-dot"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400/50 rounded-full animate-pulse-dot"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/5 w-2 h-2 bg-indigo-400/50 rounded-full animate-pulse-dot"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
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
            {/* Vertical Line with gradient */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-transparent"></div>

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
                  {/* Timeline Dot with pulse animation */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 timeline-dot-pulse"></div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card */}
                  <div className="md:w-1/2">
                    <div className="group relative">
                      {/* Gradient border effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                      {/* Main Card */}
                      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 animate-shimmer"></div>
                        </div>

                        {/* Company Logo & Header */}
                        <div className="flex items-start gap-4 mb-6 relative z-10">
                          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border-2 border-gray-200 p-2 shadow-sm group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-600 relative z-10">
                          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                            <MapPin className="w-4 h-4 text-purple-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base relative z-10">
                          {exp.description}
                        </p>

                        {/* Responsibilities */}
                        <ul className="space-y-2.5 relative z-10">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed group/item"
                            >
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 group-hover/item:scale-150 transition-transform duration-200"></span>
                              <span className="flex-1 group-hover/item:text-gray-900 transition-colors duration-200">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-50 to-transparent rounded-tr-full opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
