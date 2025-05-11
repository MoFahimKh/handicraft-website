'use client';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

const values: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: 'check-circle', // Replace with actual Lucide icon name
    title: 'Marketing',
    description:
      'Plan and execute Web3 marketing campaigns that reach decentralized audiences, focusing on the blockchain community.',
  },
  {
    icon: 'shield-check', // Replace with actual Lucide icon name
    title: 'Security',
    description:
      'Audit your blockchain code and smart contracts to prevent vulnerabilities, ensuring security and trust in decentralized applications.',
  },
  {
    icon: 'layers', // Replace with actual Lucide icon name
    title: 'Integration',
    description:
      'Seamlessly integrate blockchain solutions with your existing infrastructure, ensuring scalability, transparency, and interoperability.',
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Designed for business teams like yours
          </h2>
          <p className="text-gray-500 sm:text-xl ">
            Here at [Company Name], we focus on markets where blockchain technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {values.map((value, idx) => (
            <div key={idx}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <DynamicIcon name={value.icon} className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
              <p className="text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
