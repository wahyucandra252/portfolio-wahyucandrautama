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
    <section id="projects" className="py-20 bg-gray-50">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .touch-pan-x { touch-action: pan-x; -webkit-overflow-scrolling: touch; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Proyek
        </h2>

        <p
          className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Berikut adalah beberapa proyek yang telah dikerjakan
        </p>

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
