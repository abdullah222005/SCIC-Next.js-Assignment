import Link from "next/link";

const BrandStory = () => {
  return (
    <section className="py-20 px-6 md:px-0 text-center">
      <div className="bg-amber-50 dark:bg-blue-950/20 py-10 rounded-xl">
        <h1>Our Story</h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          Clothique was born with a simple mission: to deliver modern, stylish,
          and comfortable fashion for everyone. We believe great style should be
          accessible, affordable, and effortless.
        </p>

        <Link href="/about" className="btn btn-outline btn-primary mt-6">
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
