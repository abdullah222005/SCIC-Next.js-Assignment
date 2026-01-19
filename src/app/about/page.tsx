import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">About Clothique</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          At Clothique, we believe fashion is an expression of individuality.
          Our mission is to bring high-quality, stylish clothing to everyone,
          combining comfort, sustainability, and the latest trends.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src={""}
            alt="About Clothique"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>
            Founded in 2024, Clothique started with a simple goal: to redefine
            online fashion shopping by offering curated collections for men,
            women, and accessories. Every product is handpicked to ensure
            quality, style, and comfort.
          </p>
          <p>
            We aim to inspire confidence through fashion. Whether it’s casual
            wear, office attire, or special occasions, Clothique has something
            unique for you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
