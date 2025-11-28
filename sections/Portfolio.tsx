import Card from "@/components/Card";
import Header from "@/components/Header";
import React from "react";

const portfolioProjects = [
  {
    company: "For Students & Developers",
    year: "₹399",
    title: "Student Portfolio Service",
    results: [
      { title: "1-page professional portfolio" },
      { title: "Contact form with email notifications" },
      { title: "Fully responsive mobile UI" },
      { title: "Basic SEO optimization" },
      { title: "Fast delivery (24 hours)" },
    ],
    details: "Ideal for: Students, developers, interns, designer portfolios. Showcase your work and get noticed!",
  },
  {
    company: "For Shops & Freelancers",
    year: "₹499",
    title: "Local Business Website Service",
    results: [
      { title: "3-5 responsive pages" },
      { title: "Google Maps integration" },
      { title: "WhatsApp chat widget" },
      { title: "Service showcase with call-to-action buttons" },
      { title: "Business hours & pricing display" },
    ],
    details: "Ideal for: Local stores, freelancers, coaches, consultants, gyms, cafés, salons.",
  },
  {
    company: "For Schools & Institutes",
    year: "₹999",
    title: "Institutional Website Service",
    results: [
      { title: "5-10+ comprehensive pages" },
      { title: "Faculty & student portal UI" },
      { title: "Blog/news section for updates" },
      { title: "Event calendar & announcements" },
      { title: "Admin dashboard mockup included" },
    ],
    details: "Ideal for: Schools, coaching centers, institutes, training academies.",
  },
  {
    company: "After Deployment",
    year: "₹200",
    title: "Custom Updates & Changes",
    results: [
      { title: "Available anytime after deployment" },
      { title: "Content updates & revisions" },
      { title: "Design tweaks & optimizations" },
      { title: "Feature additions" },
      { title: "Fast turnaround (24 hours)" },
    ],
    details: "Keep your website fresh with unlimited revisions until you're 100% satisfied.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-16 lg:py-24" id="services">
      <Header
        title="Our Services"
        description="Choose the perfect website package for your needs. All plans include free hosting for 1 year and unlimited revisions."
      />
      <div className="container">
        <div className="flex flex-col mt-10 gap-20 md:mt-10">
          {portfolioProjects.map((portfolioProject, portfolioProjectIndex) => (
            <Card
              key={portfolioProject.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(74px + ${portfolioProjectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-black inline-flex gap-2 font-bold uppercase text-sm">
                    <span>{portfolioProject.company}</span>
                  </div>

                  <h3 className="text-black text-2xl mt-2 md:mt-5 md:text-4xl">
                    {portfolioProject.title}
                  </h3>
                  
                  <div className="text-blue-600 text-3xl md:text-4xl font-bold mt-3 md:mt-5">
                    {portfolioProject.year}
                  </div>

                  <hr className="border-t-2 border-black/10 mt-4 md:mt-5" />
                  
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {portfolioProject.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-black/80 md:text-base"
                      >
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-black/70 mt-4 italic">
                    {portfolioProject.details}
                  </p>

                  <div className="flex flex-col mt-8 md:flex-row gap-4">
                    <a href="https://wa.me/919250184715" target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-600 text-white hover:bg-blue-700 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center transition duration-300">
                        <span>Order Now</span>
                      </button>
                    </a>
                    <a href="https://wa.me/919250184715" target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center transition duration-300">
                        <span>Learn More</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-96 flex items-center justify-center border border-blue-200/50">
                    <div className="text-center">
                      <div className="text-5xl mb-4">
                        {portfolioProject.year === "₹399" && "👨‍💻"}
                        {portfolioProject.year === "₹499" && "🏪"}
                        {portfolioProject.year === "₹999" && "🎓"}
                        {portfolioProject.year === "₹200" && "⚙️"}
                      </div>
                      <p className="text-black/60 text-lg font-semibold">
                        {portfolioProject.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
