"use client";

import Card from "@/components/Card";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "How long does it take to get my website?",
    answer:
      "For standard websites, we deliver within 24-48 hours. Complex institutional websites with advanced features may take 3-4 days. All timelines are communicated upfront so you know exactly when to expect your website.",
  },
  {
    id: 2,
    question: "Do I need technical skills?",
    answer:
      "Not at all! You don't need any technical knowledge. We handle everything from design to deployment. You just provide your content (text, images, business details), and we'll build your beautiful website.",
  },
  {
    id: 3,
    question: "Can you revise the design?",
    answer:
      "Yes! We offer unlimited design and content revisions until you're 100% satisfied. Your satisfaction is our priority. We'll keep making changes until the website is exactly what you want.",
  },
  {
    id: 4,
    question: "Can I edit the website later?",
    answer:
      "Absolutely! We provide easy-to-use tools and documentation so you can edit content yourself. Plus, we're available 24/7 for custom updates at just ₹200 per request if you need our help.",
  },
  {
    id: 5,
    question: "Do you provide domain and hosting?",
    answer:
      "We provide free hosting for the first year using Netlify or Vercel (world-class platforms). For domains, we recommend affordable options like Namecheap or GoDaddy. We can guide you through the setup at no extra cost.",
  },
  {
    id: 6,
    question: "What if I don't like the design?",
    answer:
      "You have unlimited revisions! If the initial design doesn't match your vision, we'll redesign it completely. We work with you until you love it. Our goal is your success.",
  },
  {
    id: 7,
    question: "Is hosting really free?",
    answer:
      "Yes! All our packages include free hosting for the first year on industry-leading platforms. After that, hosting costs are minimal (usually $5-10/month). We'll help you choose the most affordable option.",
  },
  {
    id: 8,
    question: "What's included in each service package?",
    answer:
      "Student Portfolio (₹399): 1-page portfolio, contact form, responsive design, basic SEO. Local Business (₹499): 3-5 pages, Google Maps, WhatsApp widget, call buttons. Institutional (₹999): 5-10+ pages, portal UI, blog section, event calendar. All include free hosting & unlimited revisions.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="relative mb-12">
        <h2 className="text-black text-3xl md:text-5xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-black/60 mt-4 max-w-2xl mx-auto">
          Get answers to common questions about Webvibe services, pricing, and support.
        </p>
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <Card
                key={item.id}
                className="p-6 md:p-8 cursor-pointer hover:border-blue-400/50 transition"
                onClick={() => toggleFAQ(item.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-black font-bold text-lg md:text-xl text-left">
                    {item.question}
                  </h3>
                  <div className="text-blue-600 text-2xl font-bold flex-shrink-0 transition transform">
                    {openId === item.id ? "−" : "+"}
                  </div>
                </div>

                {openId === item.id && (
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <p className="text-black/70 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-blue-50 to-blue-100">
            <h3 className="text-black text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-black/70 mb-6">
              We're here to help! Reach out to us via WhatsApp, call, or email. Our team responds within minutes.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://wa.me/919250184715" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>💬 Chat with us</span>
                </button>
              </a>
              <a href="tel:919250184715">
                <button className="bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 hover:scale-105 active:scale-95 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition duration-300 transform cursor-pointer shadow-lg hover:shadow-xl">
                  <span>📞 Call us</span>
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
