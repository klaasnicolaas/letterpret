"use client";

import { StaticImageData } from "next/image";

import bg from "@/public/images/background_1.webp";

interface JumbotronProps {
  title: string;
  description: string;
  background?: StaticImageData;
  buttons?: boolean;
}

export default function Jumbotron({
  title = "Spelenderwijs nieuwe letters leren",
  description = "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  background = bg,
  buttons = false,
}: JumbotronProps) {
  return (
    <section
      className="bg-center bg-no-repeat bg-gray-400 bg-blend-multiply"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="px-4 mx-auto text-center py-24 lg:py-50">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          {description}
        </p>
        {buttons && (
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
