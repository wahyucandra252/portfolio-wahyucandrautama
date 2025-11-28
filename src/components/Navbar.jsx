import React, { useState } from "react";
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView();
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-xl border-b border-gray-200 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-16 px-4 transition-all overflow-x-hidden">
        <div
          className="text-2xl font-extrabold tracking-wide text-blue-900"
          style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          MyPortfolio
        </div>

        {/* ====== MENU DESKTOP ====== */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[15px] font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600 pb-1"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ====== HAMBURGER MOBILE ====== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ====== MENU MOBILE ====== */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-[15px] font-medium transition ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
