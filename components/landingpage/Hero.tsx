"use client";
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports

const Hero = () => {
  return (
    <Section className="h-screen ">
      <Container className="flex flex-col items-center justify-center gap-20 text-center h-screen max-h-screen">
        <Image
          src="/assets/logo-light.png"
          width={350}
          height={350}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <div>
          <h1 className="!mb-0">
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Balancer>
          </h3>
        </div>
        <div className="not-prose mt-6 flex gap-12 md:mt-12">
          <Button asChild className="bg-black text-white">
            <SignInButton>Log In</SignInButton>
          </Button>
          <Button asChild className="bg-black text-white">
            <SignUpButton>Sign Up</SignUpButton>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
