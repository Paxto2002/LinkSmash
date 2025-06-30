"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111827] backdrop-blur-md bg-opacity-90 shadow-md sticky top-0 z-50 transition-all duration-500 ease-in-out">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-20 md:h-24">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#E5E7EB] text-2xl font-bold">
          <Link href="/">
            <Image
              src="/LinkSmash.png"
              alt="LinkSmash Logo"
              width={40}
              height={40}
              className="rounded-sm"
            />
          </Link>
          <Link href="/">
            <span className="hidden sm:block">LinkSmash</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-[#E5E7EB]">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/shorten"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Shorten
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/shorten"
              className="bg-blue-600 px-4 py-2 rounded-4xl text-white hover:bg-blue-500 transition"
            >
              Try Now
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Paxto2002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded-4xl text-white hover:bg-blue-500 transition"
            >
              GitHub
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1f2937] text-[#E5E7EB] flex flex-col items-center gap-6 py-6 animate-fade-slide-down z-40">
          <Link
            href="/"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/shorten"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Shorten
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/shorten"
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition"
          >
            Try Now
          </Link>
          <Link
            href="https://github.com/Paxto2002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition"
          >
            GitHub
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
