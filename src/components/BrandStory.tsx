import Link from "next/link";

const BrandStory = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2>Our Story</h2>

      <p className="max-w-2xl mx-auto mt-4 text-gray-500">
        Clothique was born with a simple mission: to deliver modern, stylish,
        and comfortable fashion for everyone. We believe great style should be
        accessible, affordable, and effortless.
      </p>

      <Link href="/about" className="btn btn-outline btn-primary mt-6">
        Learn More About Us
      </Link>
    </section>
  );
};

export default BrandStory;
