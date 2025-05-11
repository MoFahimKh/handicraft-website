"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AnimatedGradient } from "@/app/components/ui/animatedGradient";
import { AnimatedText } from "@/app/components/ui/animatedText";

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AnimatedGradient className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b  z-0"></div>

      <div
        ref={ref}
        className="container mx-auto px-4 md:px-6 pt-20 flex flex-col items-center text-center z-10"
      >
        <div
          className={cn(
            "space-y-6 max-w-4xl mx-auto transition-all duration-1000 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <span className="inline-block text-sm md:text-base bg-gradient-to-r from-green-500 to-teal-500  text-transparent bg-clip-text font-semibold uppercase tracking-wider">
            Pioneering Web3 Innovation
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Building the{" "}
            <span className="bg-gradient-to-r from-green-500 via-lime-500 to-teal-500 text-transparent bg-clip-text">
              Decentralized
            </span>{" "}
            Future
          </h1>

          <AnimatedText
            text="We create cutting-edge blockchain solutions that transform industries and empower businesses in the digital economy."
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            speed={20}
            tag="p"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-teal-400 hover:from-green-700 hover:to-teal-500 text-white border-0"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800/50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </AnimatedGradient>
  );
}
