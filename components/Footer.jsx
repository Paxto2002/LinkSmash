"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-[#E5E7EB] px-4 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Footer Links - Left Section (3 columns) */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2 text-white">General</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Tools</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/shorten"
                  className="hover:text-blue-500 transition-all"
                >
                  Shorten
                </Link>
              </li>
              <li>
                <Link
                  href="/shorten"
                  className="hover:text-blue-500 transition-all"
                >
                  Try Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Social</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://github.com/Paxto2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-all"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Tagline - Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <Link href="/">
            <Image
              src="/LinkSmash.png"
              alt="LinkSmash Logo"
              width={40}
              height={40}
              className="rounded-sm mx-auto md:mx-0"
            />
          </Link>

          <Link href="/">
            <h1 className="text-xl font-semibold text-white">LinkSmash</h1>
          </Link>

          <p className="text-sm text-gray-400">
            Smash your links, simplify your life.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} LinkSmash. Built with ❤️ by Hafiz
        Waseem Ahmed.
      </div>
    </footer>
  );
};

export default Footer;
