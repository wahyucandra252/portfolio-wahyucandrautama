// ==================== layouts/MainLayout.jsx ====================
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
