import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Beranda", id: "home" },
    { name: "Tentang", id: "about" },
    { name: "Pengalaman", id: "experience" },
    { name: "Proyek", id: "projects" },
    { name: "Keterampilan", id: "skills" },
    { name: "Kontak", id: "contact" },
  ];

  /** 🔥 Auto Detect Active Section Saat Scroll */
  useEffect(() => {
    const observeSections = () => {
      const options = {
        root: null,
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      });
    };

    observeSections();
  }, []);

  /** 🔥 Smooth scroll saat klik menu */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-300 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        {/* LOGO */}
        <div className="text-2xl font-extrabold text-blue-700 tracking-tight">
          <span className="text-blue-600">My</span>
          <span className="text-gray-900">Portofolio</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-[15px] font-medium transition-all ${
                activeSection === item.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}

              {/* Underline animasi */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-white border-t`}
      >
        <div className="px-4 py-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-all ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
