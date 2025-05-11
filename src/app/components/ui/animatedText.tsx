"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/utils/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  speed = 30,
  tag: Tag = "p",
}: AnimatedTextProps) {
  const displayText = useTypewriter(text, speed);

  return (
    <Tag className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </Tag>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
}

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export function AnimatedGradientText({
  text,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text bg-size-200 animate-gradient-x",
        className
      )}
    >
      {text}
    </span>
  );
}
