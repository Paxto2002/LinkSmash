import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-300 p-8 flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          About LinkSmash 🚀
        </h1>
        <p className="text-lg md:text-xl mb-4">
          LinkSmash isn’t just another URL shortener. It's a lightning-fast,
          no-signup solution designed for power users, creators, and tech-savvy
          humans who hate friction.
        </p>
        <p className="text-md md:text-lg mb-4 text-gray-400">
          Whether you're sharing links on social media, sending trackable URLs
          to your team, or just cleaning up messy strings, LinkSmash gives you
          full control — instantly.
        </p>
        <p className="text-md md:text-lg text-gray-400">
          Built with modern web technologies and powered by a sleek design,
          LinkSmash ensures your links are not only shorter, but smarter.
        </p>
      </div>
    </div>
  );
};

export default About;
