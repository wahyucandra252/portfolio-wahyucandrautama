import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Mail, Github, Linkedin, Code2 } from "lucide-react";

const PROFILE_IMAGE_URL = "/portfolio/wahyu.png";

const typingText =
  "Lulusan Teknik Informatika dari Universitas Komputer Indonesia dengan pengalaman profesional di bidang pengembangan software dan web development yang berfokus pada solusi inovatif.";

const Home = () => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= typingText.length) {
        setDisplayName(typingText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-20 relative min-h-screen flex items-center overflow-hidden bg-slate-50 py-12 sm:py-20"
    >
      {/* Background Modern Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left order-2 lg:order-1 flex flex-col justify-center">
            <div data-aos="fade-right" data-aos-delay="100">
              <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
                Halo, Saya <br />
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 
                 bg-300% animate-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
                >
                  WAHYU CANDRA UTAMA
                </span>
              </h5>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="mb-6 flex items-center gap-3"
            >
              <Code2 className="w-6 h-6 text-cyan-600" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-slate-600">
                SOFTWARE & WEB DEVELOPER
              </h2>
            </div>

            {/* Description */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="h-auto min-h-[80px] mb-8"
            >
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl text-justify">
                {displayName}
                <span className="animate-pulse text-blue-600 font-bold">|</span>
              </p>
            </div>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/50"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative flex items-center justify-center gap-2 font-bold">
                  Hubungi Saya <Mail className="w-4 h-4" />
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                Lihat Proyek{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (IMAGE) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative mt-10 md:mt-0">
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="relative z-10 flex justify-center md:justify-end animate-float"
            >
              <div className="relative inline-block">
                {/* IMAGE */}
                <img
                  className="
                    relative 
                    w-[220px] sm:w-[260px] md:w-[320px] lg:w-[420px] xl:w-[480px]
                    h-auto
                    object-cover 
                    z-10 
                    transition-transform duration-300 hover:scale-105 
                    drop-shadow-2xl
                  "
                  src={PROFILE_IMAGE_URL}
                  alt="Wahyu Candra Utama"
                />

                {/* GLOW */}
                <div
                  className="
                  absolute 
                  -inset-6 
                  bg-gradient-to-r 
                  from-blue-500 
                  to-purple-500 
                  opacity-25 
                  blur-3xl 
                  -z-10 
                  rounded-full
                "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS Animations replaces styled-jsx --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .bg-300% { background-size: 300% 300%; }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient { animation: gradient 6s ease infinite; }
      `}</style>
    </section>
  );
};

export default Home;
