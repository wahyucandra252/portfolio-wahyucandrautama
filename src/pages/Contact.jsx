import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-4 tracking-tight"
          data-aos="fade-down"
        >
          Hubungi Saya
        </h2>

        <p
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Tertarik untuk berkolaborasi atau ingin mendiskusikan proyek? Jangan
          ragu untuk menghubungi saya.
        </p>

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
