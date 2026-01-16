import Image from "next/image";
import banner from "../../public/banner-newsletter.jpg";

const Newsletter = () => {
  return (
    <section className="relative py-20 px-6 text-center text-white mb-16">
      {/* Background image */}
      <Image
        src={banner}
        alt="newsletter bg"
        className="absolute inset-0 w-full h-full object-cover opacity-55 rounded-xl"
        priority
      />

      {/* Overlay container for content */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-3xl text-primary font-semibold">
          Join the Clothique Community
        </h3>
        <p className="mt-3 text-black">
          Get 10% off on your first order & stay updated.
        </p>

        <div className="mt-6 flex justify-center gap-3 w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full text-black"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
