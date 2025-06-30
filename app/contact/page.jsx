"use client";
import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl bg-[#1e293b]/60 backdrop-blur-lg rounded-2xl shadow-xl p-10 space-y-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Get in Touch
        </h1>

        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=923412011877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#334155]/60 transition duration-300"
          >
            <Phone className="text-green-400" />
            <span className="text-gray-300">Chat on WhatsApp</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:hafizwaseemahmed2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#334155]/60 transition duration-300"
          >
            <Mail className="text-red-400" />
            <span className="text-gray-300">Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hafiz-waseem-ahmed-50a4b2347/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#334155]/60 transition duration-300"
          >
            <Linkedin className="text-blue-500" />
            <span className="text-gray-300">LinkedIn Profile</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Paxto2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#334155]/60 transition duration-300"
          >
            <Github className="text-white" />
            <span className="text-gray-300">GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
