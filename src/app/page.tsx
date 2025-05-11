import { TeamSection } from "@/app/components/sections/team";
import { AnimatedGradient } from "./components/ui/animatedGradient";
import { ProducerCompanyDetails } from "./components/ProducerCompanyDetails";
import ContactUsForm from "./contactUs/components/contactusForm";
import HandicraftsGalleryCarousel from "./components/HandicraftsGalleryCarousel";

export default function Home() {
  return (
    <div>
      <section className=" py-20 px-4 md:px-8 lg:px-16 text-center">
        <AnimatedGradient className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Empowering Artisans. Celebrating Indian Heritage.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              M/S SAI SADGGURU HANDICRAFT PRODUCER COMPANY LIMITED, HYDERABAD
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-500">
              CLUSTER ADDRESS: YAQUTPURA OLD CITY AND SURROUNDING, HYDERABAD <br />
              CRAFT: HAND EMBROIDERY, ARI WORK AND ZARI WORK <br />
              NUMBER OF ARTISANS: 500 ARTISANS <br />
              NUMBER OF DIRECTORS: 05 DIRECTORS <br />
              NUMBER OF MEMBER ARTISANS: 10 ARTISANS <br />
              CATEGORY: GENERAL,MINORITY <br />
              Sponsored by the Office of the Development Commissioner
              (Handicrafts),
              <br />
              Ministry of Textiles, Government of India
            </p>
          </div>
        </AnimatedGradient>
        <TeamSection />
        <HandicraftsGalleryCarousel />
        <ContactUsForm />
        <ProducerCompanyDetails />
      </section>
    </div>
  );
}
