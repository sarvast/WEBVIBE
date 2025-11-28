import Card from "@/components/Card";
import React from "react";

const Skills = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="relative">
        <h2 className="text-black text-3xl md:text-5xl text-center mt-6">
          About Webvibe
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-black/60 mt-4 max-w-2xl mx-auto">
          Building India's Digital Heartbeat — One Website at a Time.
        </p>
      </div>

      <div className="container">
        <div className="mt-12 mb-16">
          <Card className="p-8 md:p-12 lg:p-16">
            <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-black/70 text-base md:text-lg leading-relaxed mb-4">
              At Webvibe, we believe everyone deserves a professional website. We empower students, schools, professionals, and local businesses by providing AI-generated, responsive websites that are fast, affordable, and easy to manage.
            </p>
            <p className="text-black/70 text-base md:text-lg leading-relaxed">
              No technical knowledge required. No hidden costs. Just quality websites delivered within 24-48 hours.
            </p>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-black text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-10">
              <div className="text-5xl mb-4 text-center">👩‍💻</div>
              <h4 className="text-black text-2xl font-bold text-center mb-2">
                Anushka
              </h4>
              <p className="text-black/60 text-center mb-4 font-semibold">
                UI/UX Designer & Product Lead
              </p>
              <p className="text-black/70 text-sm leading-relaxed">
                Anushka is a talented UI/UX designer passionate about creating beautiful, user-friendly interfaces. She brings fresh perspectives to design and believes in making web design accessible to everyone. Her eye for detail ensures every Webvibe website is pixel-perfect.
              </p>
            </Card>

            <Card className="p-8 md:p-10">
              <div className="text-5xl mb-4 text-center">👨‍💻</div>
              <h4 className="text-black text-2xl font-bold text-center mb-2">
                Sarthak
              </h4>
              <p className="text-black/60 text-center mb-4 font-semibold">
                Full-Stack Developer & AI Automation Specialist
              </p>
              <p className="text-black/70 text-sm leading-relaxed">
                Sarthak is a passionate full-stack engineer with expertise in web development, AI tooling, and automation. As a fresh developer, he brings innovative ideas and cutting-edge technology to power Webvibe's AI engine for rapid website generation.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-black text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose Webvibe?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-black font-bold mb-2">Lightning Fast</h4>
              <p className="text-black/70 text-sm">
                Get your website in 24-48 hours. No lengthy development cycles.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-black font-bold mb-2">Affordable Pricing</h4>
              <p className="text-black/70 text-sm">
                Start from ₹399. Pricing designed for Indian students and businesses.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-black font-bold mb-2">Hassle-Free Support</h4>
              <p className="text-black/70 text-sm">
                Unlimited revisions and updates. We're here to help anytime.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-black font-bold mb-2">Mobile Responsive</h4>
              <p className="text-black/70 text-sm">
                Perfect on all devices. Modern, clean, and user-friendly design.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h4 className="text-black font-bold mb-2">Free Hosting (1 Year)</h4>
              <p className="text-black/70 text-sm">
                Hosted on Netlify or Vercel. No extra hosting costs upfront.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-black font-bold mb-2">No Tech Skills Needed</h4>
              <p className="text-black/70 text-sm">
                Easy to manage and update. We handle the technical complexity.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
