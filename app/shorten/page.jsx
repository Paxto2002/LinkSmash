"use client";
import React, { useState } from "react";
import Link from "next/link";
const Shorten = () => {
  const [URL, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: URL,
      shorturl: shortURL,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`);
        setURL("");
        setShortURL("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  const handleURL = (e) => {
    setURL(e.target.value);
  };
  const handleShortURL = (e) => {
    setShortURL(e.target.value);
  };
  return (
    <div className="w-[80%] mx-auto my-10">
      <h1 className="text-gray-300 text-5xl font-extrabold text-center mb-5">
        Smash Long Links into Clean, Memorable Short URLs 🚀
      </h1>

      <div className="w-full mx-auto flex justify-center flex-col items-center">
        <p className="text-2xl text-gray-400 font-bold text-center ">
          Paste your long, messy link below and give it a sleek, custom
          identity.
        </p>
        <p className="text-2xl text-gray-400 font-bold text-center mb-10">
          You can also enter your own custom text to personalize your short URL!
        </p>
        <input
          type="text"
          value={URL}
          className="text-white py-2 w-full mb-4 px-3 border border-gray-500 rounded-xl bg-transparent placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="🔗 Paste your long URL here..."
          onChange={handleURL}
        />
        <input
          type="text"
          value={shortURL}
          className="text-white py-2 w-full px-3 border border-gray-500 rounded-xl bg-transparent placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="✏️ Optional: Custom short text (e.g. my-link)"
          onChange={handleShortURL}
        />
        <button
          onClick={generate}
          className="w-full cursor-pointer my-6 bg-blue-600 px-4 py-2 rounded-2xl text-white hover:bg-blue-500 transition-all"
        >
          Generate
        </button>
        {generated && (
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-white">Your Link:</span>

            <a
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition break-all"
            >
              {generated}
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(generated);
                alert("Link copied to clipboard!");
              }}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
