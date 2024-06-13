"use client";

import { Button, Chip, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

import product from "@/public/images/background.webp";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <Chip
              startContent={
                <svg
                  className="mx-1"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 5h2" />
                  <path d="M5 4v2" />
                  <path d="M11.5 4l-.5 2" />
                  <path d="M18 5h2" />
                  <path d="M19 4v2" />
                  <path d="M15 9l-1 1" />
                  <path d="M18 13l2 -.5" />
                  <path d="M18 19h2" />
                  <path d="M19 18v2" />
                  <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
                </svg>
              }
              variant="flat"
              color="primary"
              size="lg"
              className="mb-6 hidden md:flex"
            >
              NEW - De box vol letterpret!
            </Chip>
            <h2 className="mb-4 text-4xl text-center md:text-left tracking-tight font-extrabold md:text-6xl from-foreground to-foreground/70">
              Spelenderwijs nieuwe letters leren
            </h2>
            <p className="mb-6 font-light md:text-lg">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <Button
              size="md"
              color="primary"
              className="mb-6 w-full md:w-auto"
              variant="shadow"
            >
              Meer info
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
          <Image
            isBlurred
            height={400}
            className="w-full"
            src={product.src}
            alt="product image"
          />
        </div>
      </section>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center -z-10"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg]"></div>
        </div>
      </motion.div>
    </div>
  );
}
