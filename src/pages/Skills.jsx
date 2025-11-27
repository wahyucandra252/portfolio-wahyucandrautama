import React, { useRef, useEffect } from "react";
import { Award, Trophy, Calendar } from "lucide-react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills.js";
import { googleCloudCerts } from "../data/certs.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const looped = [...skills, ...skills, ...skills];

  useEffect(() => {
    // === INIT AOS ===
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS after component mounts
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    // === SCROLL LOOPING LOGIC ===
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const measureOriginalWidth = () => {
      const items = inner.querySelectorAll(".skill-item");

      let width = 0;
      for (let i = 0; i < skills.length; i++) {
        const el = items[i];
        if (!el) break;

        width += el.getBoundingClientRect().width;
      }

      const first = items[0];
      const lastOfFirstBlock = items[skills.length - 1];
      if (first && lastOfFirstBlock) {
        const left = first.getBoundingClientRect().left;
        const right = lastOfFirstBlock.getBoundingClientRect().right;
        width = right - left;
      }
      return Math.max(width, 1);
    };

    let originalWidth = measureOriginalWidth();
    container.scrollLeft = originalWidth;

    let ticking = false;
    const TH = 2;
    const handle = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollLeft = container.scrollLeft;
        if (scrollLeft <= originalWidth - TH) {
          container.scrollLeft = scrollLeft + originalWidth;
        } else if (scrollLeft >= originalWidth * 2 + TH) {
          container.scrollLeft = scrollLeft - originalWidth;
        }
        ticking = false;
      });
    };

    container.addEventListener("scroll", handle);
    const onResize = () => {
      originalWidth = measureOriginalWidth();
    };
    window.addEventListener("resize", onResize);

    return () => {
      container.removeEventListener("scroll", handle);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keterampilan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai dalam pengembangan software
          </p>
        </div>

        {/* Mobile Scroll List */}
        <div className="lg:hidden mb-20" data-aos="zoom-in">
          <div
            ref={containerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div ref={innerRef} className="flex gap-4 min-w-max items-stretch">
              {looped.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item snap-center"
                  data-aos="zoom-in"
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-500 flex items-center">→</p>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:block mb-20">
          <div
            className="flex flex-wrap justify-center gap-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.id || index}
                data-aos="zoom-in"
                data-aos-delay={index * 40}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          <div
            className="flex flex-wrap justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            {skills.slice(6).map((skill, index) => (
              <div
                key={skill.id || index + 6}
                data-aos="zoom-in"
                data-aos-delay={index * 40}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section - Always Visible */}
        <div className="mt-20">
          <div
            className="flex items-center justify-center mb-12"
            data-aos="fade-up"
          >
            <div className="bg-blue-100 rounded-xl p-4 shadow-inner">
              <Award className="text-blue-600" size={34} strokeWidth={2} />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 ml-4 tracking-tight">
              Pencapaian & Sertifikasi
            </h3>
          </div>

          {/* Google Cloud Certifications Grid */}
          <div className="mb-16">
            <h4
              className="flex items-center justify-center text-2xl font-bold text-gray-900 mb-8"
              data-aos="fade-up"
            >
              <span className="text-3xl mr-3">☁️</span>
              Sertifikasi Google Cloud
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {googleCloudCerts.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  {/* Certificate Thumbnail */}
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {cert.image ? (
                      // Jika ada image, tampilkan image
                      <div className="w-full h-full flex items-center justify-center p-4 bg-white">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                              <div class="flex flex-col items-center justify-center text-gray-400">
                                <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="text-sm">Gambar tidak tersedia</span>
                              </div>
                            `;
                          }}
                        />
                      </div>
                    ) : (
                      // Jika tidak ada image, tampilkan design placeholder
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <svg
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <pattern
                                id={`grid-${i}`}
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                              >
                                <path
                                  d="M 40 0 L 0 0 0 40"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                />
                              </pattern>
                            </defs>
                            <rect
                              width="100%"
                              height="100%"
                              fill={`url(#grid-${i})`}
                            />
                          </svg>
                        </div>

                        {/* Google Cloud Logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <svg
                              className="w-20 h-20 mx-auto mb-3 drop-shadow-lg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.5l-2.5 2.5v3l2.5 2.5v2l-5 5h-2l-5-5v-2l2.5-2.5v-3L6 8.5v-2l5-5h2l5 5v2z" />
                            </svg>
                            <div className="text-xs font-bold tracking-wider">
                              GOOGLE CLOUD
                            </div>
                            <div className="text-xs opacity-90 mt-1">
                              CERTIFICATION
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    )}

                    {/* Hover Overlay dengan icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                      <div className="bg-white rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
                      {cert.title}
                    </h5>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <span>{cert.publish}</span>
                      </div>

                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Lihat</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-blue-600">
                      Google Cloud
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Webinar & Training */}
            {/* Webinar & Training */}
            <div
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 rounded-xl p-3 shadow-inner">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 ml-3">
                  Webinar & Pelatihan
                </h4>
              </div>

              {/* Semuanya disatukan di sini */}
              <div className="space-y-4">
                <div className="group p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        Cisco Networking Academy Program
                      </p>
                      <p className="text-sm text-gray-500">2023</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        Peserta Pelatihan Sertifikasi Kompetensi - Junior web
                        Developer - KOMINFO
                      </p>
                      <p className="text-sm text-gray-500">2024</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        Google Cloud Skills
                      </p>
                      <p className="text-sm text-gray-500">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 rounded-xl p-3 shadow-inner">
                  <Trophy className="text-amber-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 ml-3">
                  Prestasi
                </h4>
              </div>

              <div className="space-y-4">
                <div className="group p-4 bg-gradient-to-r from-amber-50 to-white border border-amber-100 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        Sertifikat BNSP (Junior Web Programmer)
                      </p>
                      <p className="text-sm text-gray-500">
                        2025 — Berlaku s/d 2029
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-amber-50 to-white border border-amber-100 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        Sertifikat Kompetensi – PT Len Industri (Persero)
                      </p>
                      <p className="text-sm text-gray-500">Apr 2021</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-r from-amber-50 to-white border border-amber-100 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold mb-1">
                        MSIB BATCH 6 (Kemendikbudristek)
                      </p>
                      <p className="text-sm text-gray-500">Apr 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS untuk hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;
