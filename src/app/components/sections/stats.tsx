"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { StatsGrid } from "@/app/components/ui/statsCounter";

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Projects Completed", value: 150 },
    { label: "Clients Worldwide", value: 75 },
    { label: "Team Members", value: 42 },
    { label: "Industry Awards", value: 12 },
  ];
  return (
    <section className="py-16 bg-gradient-radial from-blue-950/30 to-background">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-1000 ease-out",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}
