import React from "react";

const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg py-8 px-10 rounded-xl text-center relative overflow-hidden z-0">
          <div className="flex flex-col gap-8 items-center">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl text-black font-bold">Ready to Get Started?</h2>
              <p className="text-sm md:text-base mt-2 text-black/70">
                Let's build your professional website together. Reach out via WhatsApp, call us, or email. We're here to help!
              </p>
            </div>
            
            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <a href="https://wa.me/919250184715" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>💬 Chat on WhatsApp</span>
                </button>
              </a>

              <a href="tel:919250184715">
                <button className="bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>📞 Call Now</span>
                </button>
              </a>

              <a href="mailto:webvibe002@gmail.com">
                <button className="bg-red-500 text-white hover:bg-red-600 active:bg-red-700 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>✉️ Email Us</span>
                </button>
              </a>

              <a href="https://instagram.com/webvibe02" target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>📸 Instagram</span>
                </button>
              </a>
            </div>

            <div className="border-t border-black/10 pt-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-black/60 text-sm font-semibold">Phone</p>
                  <p className="text-black font-semibold mt-1">
                    <a href="tel:919250184715" className="hover:text-blue-600">
                      92501 84715
                    </a>
                  </p>
                  <p className="text-black font-semibold">
                    <a href="tel:917985040858" className="hover:text-blue-600">
                      7985040858
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-black/60 text-sm font-semibold">Email</p>
                  <p className="text-black font-semibold mt-1">
                    <a href="mailto:webvibe002@gmail.com" className="hover:text-blue-600 break-all">
                      webvibe002@gmail.com
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-black/60 text-sm font-semibold">Social Media</p>
                  <p className="text-black font-semibold mt-1">
                    <a href="https://instagram.com/webvibe02" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                      @webvibe02
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
