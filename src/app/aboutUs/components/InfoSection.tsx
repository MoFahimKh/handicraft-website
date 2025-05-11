import Image from 'next/image';

const InfoSection = ({ imageRight = true }) => {
  return (
    <section className="bg-white py-12">
      <div
        className={`container mx-auto flex flex-col ${
          imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-12 px-4`}
      >
        <div className="w-full lg:w-1/2">
          <Image
            height={1000}
            width={10000}
            src="/whatWeAre.jpg"
            alt="What We Are"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Are</h2>
          <p className="text-gray-600 text-lg">
            We are a leading blockchain technology company focused on building decentralized,
            secure, and scalable Web3 infrastructures. Our team is passionate about leveraging
            blockchain’s potential to reshape industries and foster trustless solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
