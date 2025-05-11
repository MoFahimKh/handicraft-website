"use client";

import { Card } from "@/app/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
}

export function AnimatedCard({ className, children }: AnimatedCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn("transition-transform duration-200 perspective", className)}
      style={{
        transform: isHovered
          ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : "rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "w-full h-full rounded-lg transition-all duration-200",
          isHovered ? "shadow-xl" : "shadow-md"
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface GlowingCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlowingCard({ className, children }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative transition-all duration-200 group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-green-500 via-lime-500 to-teal-500 rounded-lg opacity-0 blur-xl -z-10 transition-opacity duration-500",
          isHovered ? "opacity-70" : "opacity-0"
        )}
      />
      <Card className="bg-white/60 backdrop-blur-sm border border-zinc-800 shadow-xl transition-all duration-200 z-10">
        {children}
      </Card>
    </div>
  );
}
