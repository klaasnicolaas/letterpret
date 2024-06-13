"use client";

import Image from "next/image";
import { Skeleton } from "@nextui-org/react";

// Import letter icons
import letter_aIcon from "@/public/images/letter-a.svg";
import letter_bIcon from "@/public/images/letter-b.svg";
import letter_cIcon from "@/public/images/letter-c.svg";

export default function Features() {
  const features = [
    {
      icon: letter_aIcon,
      title: "Tastbaar",
      description:
        "Door de letters te voelen stimuleer je de tastzin, waardoor kinderen letters sneller herkennen en onthouden.",
    },
    {
      icon: letter_bIcon,
      title: "Hakken & Plakken",
      description:
        "De letterboxen zijn magnetisch, zodat kinderen gemakkelijk woorden kunnen bouwen door ze tegen elkaar aan te schuiven.",
    },
    {
      icon: letter_cIcon,
      title: "Werkt met Bouw!",
      description:
        "De letters kunnen worden gebruikt in combinatie met de methode Bouw! van Lexipoort en zijn opgedeeld in blokken.",
    },
  ];

  return (
    <section className="text-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Groeien in het leren van letters
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400"></p>
          <div className="w-full flex flex-col gap-2 items-center">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={feature.icon}
                  alt={`Letter ${feature.title}`}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                {feature.title}
              </h3>
              <p className="font-light md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
