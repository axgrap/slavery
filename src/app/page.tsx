"use client"; // {{ edit_1 }}

import { useState } from "react"; // {{ edit_2 }}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // {{ edit_3 }}
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // {{ edit_4 }}
import Image from "next/image"; // {{ edit_1 }}

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // {{ edit_3 }}

  return (
    <div className="flex bg-[#f4f0e7] text-black">
      <header className="fixed ml-16 top-0 left-0 right-0 bg-transparent text-red-600 p-4 z-10 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-20 w-20 fixed top-0 left-0 ">
            <div className="absolute inset-0 z-0">
              <Image fill={true} src="/fist.svg" alt="Fist Icon" />
            </div>
          </div>
          <h1 className="text-2xl font-bold font-oswald">Twin Cities IWOC</h1>
        </div>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 focus:outline-none"
        >
          <div className="w-6 h-1 bg-red-600 mb-1"></div>
          <div className="w-6 h-1 bg-red-600 mb-1"></div>
          <div className="w-6 h-1 bg-red-600"></div>
        </button>
        {/* <hr className="border-t-4 border-red-600 my-4" /> */}
      </header>
      <aside
        className={`mt-16 fixed top-0 right-0 h-full bg-gray-800 bg-opacity-80 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        <nav className="p-4">
          <a href="/resources" className="block py-2">
            Resources
          </a>
          <a href="/events" className="block py-2">
            Upcoming Events
          </a>
          <a href="/contact" className="block py-2">
            Contact Us
          </a>
        </nav>
        <footer className="p-4 border-t border-gray-700 mt-auto">
          <div className="flex justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </footer>
      </aside>
      <div className="flex-1 ml-0 mt-16">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#f4f0e7] text-black">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <p className="text-lg text-center sm:text-left">
              Join us in the fight to end prison slavery and advocate for
              justice and equality for all.
            </p>

            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
                Learn more about our mission and how you can help.
              </li>
              <li>Donate to support our cause.</li>
              <li>Sign our petition to demand change.</li>
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/petition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/petition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign the Petition
              </a>

              <a
                className="rounded-full border border-solid border-white/[.08] transition-colors flex items-center justify-center hover:bg-red-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/learn-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-red-600"
              href="/resources"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-red-600"
              href="/events"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upcoming Events
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-red-600"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
            <div className="flex justify-center mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 mx-2"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 mx-2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 mx-2"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
