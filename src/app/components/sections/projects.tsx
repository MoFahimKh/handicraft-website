/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export type ProjectCase = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

export const projects: ProjectCase[] = [
  {
    title: "DeFi Lending Platform",
    description:
      "A decentralized lending protocol enabling users to lend and borrow cryptocurrencies without intermediaries.",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    imageUrl:
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Supply Chain Tracking System",
    description:
      "Blockchain-based solution for transparent supply chain management, ensuring product authenticity and tracking.",
    tags: ["Enterprise", "Traceability", "Logistics"],
    imageUrl:
      "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "NFT Marketplace",
    description:
      "Custom NFT marketplace for digital creators and collectors with advanced functionality and low gas fees.",
    tags: ["NFT", "Marketplace", "Digital Assets"],
    imageUrl:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function ProjectsSection() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-green-200/50 to-background"
    >
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent blockchain and web3 implementations that
            are transforming industries and setting new standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref: itemRef, inView: itemInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
              delay: index * 200,
            });

            return (
              <div
                key={project.title}
                ref={itemRef}
                className={cn(
                  "transition-all duration-700 ease-out",
                  itemInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                )}
              >
                <Card className="overflow-hidden h-full bg-gray-100/30 backdrop-blur-sm border-zinc-800 group hover:border-zinc-700 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-gray-100/5 border-green-700 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
