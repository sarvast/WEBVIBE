import React from "react";

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-white/20 border-4 backdrop-blur-lg shadow-lg">
              <img
                src="https://i.ibb.co/v4YLt7jk/1000079017-removebg-preview.png"
                alt="Webvibe Logo"
                className="w-full h-full object-cover bg-white"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl text-center mt-10 tracking-wide text-black">
            Webvibe
          </h1>
          <p className="mt-4 text-center text-black/70 md:text-lg font-semibold">
            AI-Powered Websites for Everyone
          </p>
          <p className="mt-4 text-center text-black/60 md:text-lg">
            Get a professional, responsive website built with AI in just 24-48 hours. Perfect for students, schools, freelancers, and local businesses across India. Fast, affordable, and easy to manage.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#services">
            <button className="inline-flex items-center gap-2 border border-blue-600 bg-blue-600 text-white px-6 h-12 rounded-lg hover:bg-blue-700 hover:border-blue-700 font-semibold transition duration-300">
              <span>🚀 Explore Services</span>
            </button>
          </a>
          <a href="https://wa.me/919250184715" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 border border-black bg-white/30 backdrop-blur-lg shadow-lg px-6 h-12 rounded-lg text-black hover:bg-black hover:text-white transition duration-300 font-semibold">
              <span>💬 Chat on WhatsApp</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
