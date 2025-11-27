import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PROFILE_IMAGE_URL = "/portfolio/wahyu.png";

const typingText =
  "Lulusan Teknik Informatika dari Universitas Komputer Indonesia dengan pengalaman profesional di bidang pengembangan software dan web development yang berfokus pada solusi inovatif.";

const Home = () => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
      offset: 80,
    });
  }, []);

  // Typing effect for description
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayName(typingText.substring(0, index));
      index++;
      if (index > typingText.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left order-2 md:order-1 max-w-xl mx-auto md:mx-0">
            <div data-aos="fade-right" data-aos-delay="100">
              <h1
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-blue-900 leading-[1.15] mb-4"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  letterSpacing: "-0.01em",
                }}
              >
                WAHYU CANDRA UTAMA
              </h1>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-900 uppercase tracking-wide">
                SOFTWARE & WEB DEVELOPER
              </h2>
            </div>

            {/* DESCRIPTION TYPING */}
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg text-blue-900 leading-relaxed mb-6 sm:mb-8 text-justify"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {displayName}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row md:justify-start gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 font-bold text-base flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1"
              >
                Hubungi Saya
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Lihat Proyek
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2 mt-8 md:mt-0">
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative z-10 w-full flex justify-center md:justify-end"
            >
              <div className="relative inline-block">
                <img
                  className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[480px] h-auto object-cover z-10 transition-transform duration-300 hover:scale-110"
                  src={PROFILE_IMAGE_URL}
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
