/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Briefcase, Code, Globe, LucideIcon, Shield } from "lucide-react";
import { GlowingCard } from "@/app/components/ui/animatedCard";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServicesSection() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  const services: Service[] = [
    {
      title: "Blockchain Development",
      description:
        "Custom blockchain solutions built from the ground up. We design and implement distributed ledger technologies tailored to your specific business needs.",
      icon: Code,
    },
    {
      title: "Smart Contract Development",
      description:
        "Secure, audited, and efficient smart contracts for automating business processes. Our team specializes in Solidity and other contract languages.",
      icon: Briefcase,
    },
    {
      title: "Decentralized Applications",
      description:
        "Full-stack dApp development with seamless user experiences. We bridge the gap between blockchain technology and intuitive user interfaces.",
      icon: Globe,
    },
    {
      title: "Security Auditing",
      description:
        "Comprehensive security audits for blockchain implementations and smart contracts to identify vulnerabilities before they can be exploited.",
      icon: Shield,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-green-200/50"
    >
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our
            <span className="bg-gradient-to-r from-green-600 to-teal-400 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive blockchain solutions tailored to your business needs.
            From custom development to security audits, we&apos;ve got you
            covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { ref, inView: itemInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
              delay: index * 200,
            });

            return (
              <div
                key={service.title}
                ref={ref}
                className={cn(
                  "transition-all duration-1000 ease-out",
                  itemInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                )}
              >
                <GlowingCard>
                  <CardHeader className="pb-2">
                    <div className="mb-4 h-12 w-12 rounded-full bg-black flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-green-300" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
