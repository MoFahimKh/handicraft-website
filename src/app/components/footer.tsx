"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-md border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                alt="Logo"
                src="/AncilarName.png"
                height={300}
                width={300}
                className="max-h-12 object-cover"
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering Artisans. Celebrating Indian Heritage.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-blue-400 hover:bg-blue-950/20"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-purple-400 hover:bg-purple-950/20"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-blue-400 hover:bg-blue-950/20"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blockchain Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dApp Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Security Audits
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on our
              services.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-700"
              />
              <Button className="w-full bg-gradient-to-r from-green-600 to-teal-400 hover:from-green-700 hover:to-teal-500 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} M/S SAI SADGGURU HANDICRAFT PRODUCER
            COMPANY LIMITED
          </p>
        </div>
      </div>
    </footer>
  );
}
