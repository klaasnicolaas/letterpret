"use client";

import { Button, Divider } from "@nextui-org/react";
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider className="my-4" />
        <div className="flex justify-between items-center md:py-6 py-4">
          <p className="text-sm font-light">
            Made by{" "}
            <a href="#" target="_blank" className="font-medium">
              Klaas Schoute
            </a>{" "}
            with ❤️
          </p>
          <a href="https://github.com/klaasnicolaas" target="_blank">
            <Button isIconOnly variant="light">
              <Github size={24} />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
