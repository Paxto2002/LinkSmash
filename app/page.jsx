import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Side Text */}
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-6 py-12 md:p-10 flex flex-col justify-center space-y-4">
          <p className="text-gray-300 text-5xl font-extrabold text-center">
            Smash long links into clean, powerful URLs — no login, no limits,
            just speed.
          </p>
          <p className="text-2xl text-gray-400 font-bold text-center">
            LinkSmash is the ultimate URL shortener built for simplicity, speed,
            and sharing without friction.
          </p>
          <li className="flex justify-center items-center gap-4">
            <Link
              href="/shorten"
              className="bg-blue-600 px-4 py-2 rounded-4xl text-white hover:bg-blue-500 transition"
            >
              Try Now
            </Link>
            <Link
              href="/github"
              className="bg-blue-600 px-4 py-2 rounded-4xl text-white hover:bg-blue-500 transition"
            >
              GitHub
            </Link>
          </li>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center bg-[#0f172a]">
          <Image
            src="/LinkSmash-Hero.png"
            alt="LinkSmash Illustration"
            width={400}
            height={400}
            className=" shadow-lg md:w-full h-full w-full"
            priority
          />
        </div>
      </section>
    </main>
  );
}
