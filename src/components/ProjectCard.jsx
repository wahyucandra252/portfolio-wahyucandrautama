import React from "react";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <div
      className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 120}
      data-aos-duration="600"
      data-aos-once="false"
    >
      {/* Gambar */}
      <div className="overflow-hidden h-44">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Konten */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h3>
            <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
              {project.year}
            </span>
          </div>
          <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
          <div className="mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Teknologi */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
