import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-4 border border-gray-200/50 shadow-sm"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hubungi
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Saya
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau ingin mendiskusikan proyek? Jangan
            ragu untuk menghubungi saya.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* EMAIL */}
          <a
            href="mailto:wahyucandrautama@gmail.com"
            data-aos="zoom-in"
            data-aos-delay="200"
            className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100
            hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
          >
            <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-blue-600" size={32} strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
            <p className="text-sm text-gray-600 text-center break-all">
              wahyucandrautama@gmail.com
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6289635633226"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="300"
            className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100
            hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
          >
            <div className="p-4 bg-green-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-green-600" size={32} strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              WhatsApp
            </h3>
            <p className="text-sm text-gray-600 text-center">
              (+62) 896-3563-3226
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/wahyu-candra-utama-7b3581301"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
            className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100
            hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
          >
            <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="text-blue-600" size={32} strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              LinkedIn
            </h3>
            <p className="text-sm text-gray-600 text-center">
              wahyu-candra-utama
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
