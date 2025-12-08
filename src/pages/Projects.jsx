import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const scrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const doubledProjects = [...projects, ...projects];

  // init AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  // infinite scroll logic
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const setupInitialScroll = () => {
      requestAnimationFrame(() => {
        const scrollWidth = slider.scrollWidth;
        const halfWidth = scrollWidth / 2;
        if (halfWidth && slider.scrollLeft < halfWidth / 2) {
          slider.scrollLeft = halfWidth;
        }
      });
    };

    setupInitialScroll();

    const onPointerDown = () => (isDraggingRef.current = true);
    const onPointerUp = () => (isDraggingRef.current = false);
    const onPointerLeave = () => (isDraggingRef.current = false);
    const onPointerCancel = () => (isDraggingRef.current = false);

    const EDGE_BUFFER = 2;

    const onScroll = () => {
      if (isDraggingRef.current) return;
      const scrollWidth = slider.scrollWidth;
      const halfWidth = scrollWidth / 2;
      if (!halfWidth) return;

      if (slider.scrollLeft >= halfWidth + EDGE_BUFFER) {
        slider.scrollLeft = slider.scrollLeft - halfWidth;
      } else if (slider.scrollLeft <= EDGE_BUFFER) {
        slider.scrollLeft = slider.scrollLeft + halfWidth;
      }
    };

    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointerleave", onPointerLeave);
    slider.addEventListener("pointercancel", onPointerCancel);
    slider.addEventListener("touchend", onPointerUp);
    slider.addEventListener("touchcancel", onPointerCancel);
    slider.addEventListener("scroll", onScroll);

    const onResize = () => {
      requestAnimationFrame(() => {
        const scrollWidth = slider.scrollWidth;
        const halfWidth = scrollWidth / 2;
        if (halfWidth) slider.scrollLeft = halfWidth;
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      slider.removeEventListener("pointerdown", onPointerDown);
      slider.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("pointerleave", onPointerLeave);
      slider.removeEventListener("pointercancel", onPointerCancel);
      slider.removeEventListener("touchend", onPointerUp);
      slider.removeEventListener("touchcancel", onPointerCancel);
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="projects" className="scroll-mt-20 py-20 bg-gray-50">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .touch-pan-x { touch-action: pan-x pan-y;-webkit-overflow-scrolling: touch;}
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Proyek
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Saya
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah dikerjakan
          </p>
        </div>

        {/* MOBILE */}
        <div
          ref={scrollRef}
          className="flex sm:hidden gap-4 overflow-x-auto py-4 px-2 no-scrollbar touch-pan-x"
        >
          {doubledProjects.map((project, index) => (
            <div className="flex-shrink-0" key={project.id + "-dup-" + index}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
