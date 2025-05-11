'use client';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

const services: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: 'Smart Contract Development',
    description:
      'We design and deploy secure, gas-efficient smart contracts that power decentralized applications, ensuring trust and scalability.',
    icon: 'brain', // Replace with actual Lucide icon name
  },
  {
    title: 'dApp Development',
    description:
      'We develop end-to-end decentralized applications (dApps) utilizing the latest blockchain technologies, empowering users with peer-to-peer functionalities.',
    icon: 'link', // Replace with actual Lucide icon name
  },
  {
    title: 'Blockchain Consulting',
    description:
      'Our Web3 experts provide strategic advice and architectural guidance to help businesses adopt blockchain technology effectively.',
    icon: 'compass', // Replace with actual Lucide icon name
  },
  {
    title: 'Token Launch & NFTs',
    description:
      'We assist with everything from token creation (ERC20, ERC721) to launching your NFTs, ensuring your digital assets are scalable and successful.',
    icon: 'rocket', // Replace with actual Lucide icon name
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl"
            >
              <div className="text-3xl text-green-700 mb-4">
                <DynamicIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
