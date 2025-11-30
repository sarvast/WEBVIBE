import React from "react";

const Footer = () => {
  return (
    <footer className="relative -z-5 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-black/20 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>
            <span className="font-semibold">© 2025 Webvibe. </span>All rights
            reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-2">
            <span className="font-semibold">Built with ❤️ by</span>
            <a
              href="https://instagram.com/webvibe02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <span className="font-semibold">Anushka</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
