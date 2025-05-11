"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "@/app/components/ui/animatedCard";
import { Card, CardContent } from "@/app/components/ui/card";
import { UserCircle2 } from "lucide-react";

type Director = {
  name: string;
  address: string;
  occupation: string;
  experience: string;
  contact: string;
  aadhar: string;
  pan: string;
  dchId?: string;
};

const directors: Director[] = [
  {
    name: "Sakam Saritha",
    address:
      "H.NO: 6-3-354/8 FLAT NO. 502, Hindi Nagar, Panjagutta, Hyderabad-500082, Telangana",
    contact: "9701916630",
    aadhar: "9535 8208 7614",
    pan: "AGCPA5707C",
    occupation: "Director",
    experience: "10 Years",
    dchId: "SRHYC465235",
  },
  {
    name: "Asima Birjis",
    address:
      "16-9-470/55 CIB Quarters, Old Malakpet, Near Water Tank, Hyderabad-500036",
    contact: "9030030033",
    aadhar: "5802 2060 9684",
    pan: "BIFPB3330L",
    occupation: "Director",
    experience: "20 Years",
    dchId: "SRHYC300984",
  },
  {
    name: "Fouzia Farheen",
    address: "16-5-36 Farhat Nagar, Gousia Masjid, Hyderabad-500024, Telangana",
    contact: "9121796181",
    aadhar: "9416 6532 9504",
    pan: "FXQPS2647M",
    occupation: "Director",
    experience: "20 Years",
    dchId: "SRHYC300902",
  },
  {
    name: "Sakam Chalapathy",
    address: "1/441-12-42, Maruthi Nagar, Railway Station Road, Kadapa-518004",
    contact: "-",
    aadhar: "9598 1001 1740",
    pan: "BLLPS6845L",
    occupation: "Director, Retd. Govt Employee",
    experience: "10 Years",
  },
  {
    name: "P.V. Mohankumar",
    address:
      "H.NO: 6-3-354/8 FLAT NO. 302, Hindi Nagar, Panjagutta, Hyderabad-500082, Telangana",
    contact: "7075197460",
    aadhar: "6662 5857 8297",
    pan: "AGSPM0434C",
    occupation: "Director",
    experience: "10 Years",
    dchId: "SRHYC465245",
  },
];

export function TeamSection() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-background to-green-700/30"
    >
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
              Directors
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know the dedicated leadership behind M/S Sai Sadgguru
            Handicraft Producer Company Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref: itemRef, inView: itemInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
              delay: index * 200,
            });

            return (
              <div
                key={director.name}
                ref={itemRef}
                className={cn(
                  "transition-all duration-700 ease-out",
                  itemInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                )}
              >
                <AnimatedCard>
                  <Card className="h-full bg-green/60 backdrop-blur-sm border-zinc-800 p-4 text-left">
                    <div className="flex items-center mb-4">
                      <UserCircle2 className="h-12 w-12 text-green-600 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {director.name}
                        </h3>
                        <p className="text-sm text-blue-400">
                          {director.occupation}
                        </p>
                      </div>
                    </div>
                    <CardContent className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <strong>Experience:</strong> {director.experience}
                      </p>
                      <p>
                        <strong>Address:</strong> {director.address}
                      </p>
                      <p>
                        <strong>Contact:</strong> {director.contact}
                      </p>
                      <p>
                        <strong>Aadhar:</strong> {director.aadhar}
                      </p>
                      <p>
                        <strong>PAN:</strong> {director.pan}
                      </p>
                      {director.dchId && (
                        <p>
                          <strong>DCH ID:</strong> {director.dchId}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
