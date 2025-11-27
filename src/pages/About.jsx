import React, { useEffect, useRef } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import "aos/dist/aos.css";

// ===================== PARTICLE CANVAS ======================
const ParticleCanvas = ({ className = "" }) => {
  const ref = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999, active: false });
  const particles = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    const DPR = Math.max(window.devicePixelRatio || 1, 1);

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const NUM = Math.max(25, Math.floor((width * height) / 35000));

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createParticle() {
      return {
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.35, 0.35),
        vy: rand(-0.35, 0.35),
        r: rand(0.9, 2.8),
        hue: rand(200, 260),
        alpha: rand(0.3, 0.55),
      };
    }

    particles.current = Array.from({ length: NUM }).map(createParticle);

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const ev = e.touches ? e.touches[0] : e;
      pointer.current = {
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top,
        active: true,
      };
    }

    function onLeave() {
      pointer.current.active = false;
      pointer.current.x = -9999;
      pointer.current.y = -9999;
    }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("touchmove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchend", onLeave);

    let last = performance.now();

    function step(now) {
      const dt = Math.min(40, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];

        p.x += p.vx * 1.2;
        p.y += p.vy * 1.2;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const dx = p.x - pointer.current.x;
        const dy = p.y - pointer.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (pointer.current.active && dist < 120) {
          const force = (1 - dist / 120) * 0.6;
          p.vx += (dx / (dist + 0.01)) * force;
          p.vy += (dy / (dist + 0.01)) * force;
        }

        p.vx *= 0.985;
        p.vy *= 0.985;

        const rad = p.r;
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          rad * 3.2
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${p.alpha * 4})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 80%, 60%, ${p.alpha * 2})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, rad * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(step);
    }

    raf.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden
    />
  );
};

// ===================== ABOUT COMPONENT ======================

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* ORBS — blur dikurangi */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute rounded-full bg-[#bfe7ff] animate-orb-slow"
          style={{
            width: 420,
            height: 420,
            top: -50,
            left: -80,
            opacity: 0.25,
            filter: "blur(35px)",
          }}
        />
        <div
          className="absolute rounded-full bg-[#d4c8ff] animate-orb-medium"
          style={{
            width: 360,
            height: 360,
            bottom: -60,
            right: -80,
            opacity: 0.26,
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute rounded-full bg-[#ffe6f0] animate-orb-fast"
          style={{
            width: 160,
            height: 160,
            top: 120,
            right: -40,
            opacity: 0.22,
            filter: "blur(25px)",
          }}
        />
      </div>

      {/* PARTICLES */}
      <ParticleCanvas />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div data-aos="fade-down">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tighter">
            Tentang Saya
          </h2>
          <p className="text-center text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
            Latar belakang akademis dan fokus profesional saya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div
            className="text-gray-700 text-lg leading-relaxed flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <p className="relative p-6 rounded-2xl bg-white/70 shadow-sm border border-white/40 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
              <span className="absolute top-0 left-0 w-2 h-2 bg-blue-600 rounded-full translate-x-[-6px] translate-y-[-6px]"></span>
              <span className="font-semibold text-gray-900">
                Saya adalah lulusan Teknik Informatika dari UNIKOM
              </span>{" "}
              dengan IPK <span className="font-bold text-gray-900">3.75</span>{" "}
              dan pengalaman dalam berbagai proyek profesional di industri IT
              serta instansi pemerintahan.
            </p>

            <p className="relative p-6 rounded-2xl bg-white/70 shadow-sm border border-white/40 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
              <span className="absolute top-0 left-0 w-2 h-2 bg-indigo-600 rounded-full translate-x-[-6px] translate-y-[-6px]"></span>
              Saya berfokus pada pengembangan software modern, AI engineering,
              dan web development. Berpengalaman menggunakan{" "}
              <span className="font-semibold text-blue-600">React.js</span>,{" "}
              <span className="font-semibold text-blue-600">Node.js</span>,{" "}
              <span className="font-semibold text-blue-600">PHP</span>, dan{" "}
              <span className="font-semibold text-blue-600">Python</span> dalam
              membangun solusi IT yang scalable dan efisien.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-2xl shadow-blue-100 p-8 lg:p-10 transition-all duration-500 hover:shadow-blue-300/40 hover:scale-[1.01]"
          >
            <h3 className="text-3xl font-bold flex items-center text-gray-900 mb-8 pb-3 border-b border-gray-200">
              <GraduationCap
                className="mr-3 text-blue-600 drop-shadow-md"
                size={34}
                strokeWidth={2.5}
              />
              Riwayat Pendidikan
            </h3>

            <div className="space-y-8">
              <div className="relative p-4 rounded-xl hover:bg-blue-50/70 transition-all duration-300 transform hover:-translate-y-0.5 group">
                <h4 className="font-extrabold text-gray-900 mb-1 text-xl group-hover:text-blue-700">
                  Universitas Komputer Indonesia
                </h4>
                <p className="text-md text-gray-700 font-medium">
                  S1 Teknik Informatika
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Sep 2021 - Nov 2025
                </p>
                <span className="inline-block mt-3 text-xs px-4 py-1.5 rounded-full font-bold bg-blue-500 text-white group-hover:bg-blue-600 transition-colors duration-300">
                  IPK: 3.75
                </span>
              </div>

              <div className="relative p-4 rounded-xl hover:bg-indigo-50/70 transition-all duration-300 transform hover:-translate-y-0.5 group">
                <h4 className="font-extrabold text-gray-900 mb-1 text-xl group-hover:text-indigo-700">
                  SMK Marhas Margahayu
                </h4>
                <p className="text-md text-gray-700 font-medium">
                  Rekayasa Perangkat Lunak
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Jul 2018 - Jun 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== KEYFRAMES ORB MOVEMENT ============ */}
      <style>{`
        @keyframes orb-slow {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(25px, -25px, 0) scale(1.04); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes orb-medium {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-25px, 25px, 0) scale(1.04); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes orb-fast {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(15px, 15px, 0) scale(1.06); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        .animate-orb-slow { animation: orb-slow 12s ease-in-out infinite; }
        .animate-orb-medium { animation: orb-medium 10s ease-in-out infinite; }
        .animate-orb-fast { animation: orb-fast 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;
