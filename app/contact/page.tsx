"use client";

import { Button, Input, Textarea } from "@nextui-org/react";

import bg from "@/public/images/background_2.webp";
import Jumbotron from "@/components/jumbotron";
import Layout from "@/components/layout";

export default function Contact() {
  return (
    <Layout>
      <Jumbotron
        title="Contact"
        description="Heb je vragen of opmerkingen? Neem dan contact met ons op."
        background={bg}
      />
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form className="space-y-8">
            <div className="space-y-4">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="text"
                  labelPlacement="outside"
                  label="Naam"
                  isRequired
                  placeholder="John Doe"
                />
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  isRequired
                  placeholder="john@example.com"
                />
              </div>
              <Textarea
                label="Bericht"
                labelPlacement="outside"
                placeholder="Vul hier je bericht in"
                isRequired
              />
            </div>
            <Button type="submit" color="primary" variant="solid">
              Verstuur bericht
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
