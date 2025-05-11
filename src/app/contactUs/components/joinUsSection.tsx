import Image from "next/image";
import Link from "next/link";

export const JoinUsSection = () => (
  <section className="bg-gray-50 dark:bg-gray-900 py-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Join Our Mission in Web3
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          We’re building a decentralized future — and we want you to be a part
          of it. Whether you&apos;re a developer, designer, marketer, or
          strategist, your contributions can help reshape the internet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/careers"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md text-center transition-all duration-200"
          >
            View Open Roles
          </Link>
          <Link
            href="/contact"
            className="text-green-600 border border-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-6 rounded-lg text-center transition-all duration-200"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="hidden lg:block">
        <Image
          src="/joinUs.jpg"
          alt="Join us blockchain team"
          className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          height={400}
          width={600}
        />
      </div>
    </div>
  </section>
);
