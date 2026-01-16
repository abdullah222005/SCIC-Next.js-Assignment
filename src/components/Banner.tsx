"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";

type Slide = {
  image: StaticImageData;
  title: string;
  desc: string;
  primaryBtn: { text: string; link: string };
  secondaryBtn?: { text: string; link: string };
};

const slides: Slide[] = [
  {
    image: banner1,
    title: "Redefine Your Look with Clothique",
    desc: "Step into a world of modern fashion where comfort meets confidence. Discover premium outfits designed to elevate your everyday style.",
    primaryBtn: { text: "Shop Now", link: "/shop" },
    secondaryBtn: { text: "New Arrivals", link: "/new" },
  },
  {
    image: banner2,
    title: "New Season. New Statement.",
    desc: "Refresh your wardrobe with our latest collection inspired by global trends. Bold designs, perfect fits, and timeless elegance await you.",
    primaryBtn: { text: "Explore Now", link: "/new" },
    secondaryBtn: { text: "New Arrivals", link: "/new" },
  },
  {
    image: banner3,
    title: "Where Style Meets Comfort",
    desc: "Experience fashion that feels as good as it looks. Premium fabrics, modern cuts, and versatile designs for every lifestyle.",
    primaryBtn: { text: "Start Shopping", link: "/shop" },
    secondaryBtn: { text: "New Arrivals", link: "/new" },
  },
];


const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5555);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center h-full">
              <div className="text-center md:text-left text-white px-6">
                <h1>{slide.title}</h1>
                <p className="mt-3 max-w-lg">{slide.desc}</p>

                <div className="mt-6 flex gap-4">
                  <Link
                    href={slide.primaryBtn.link}
                    className="btn btn-primary"
                  >
                    {slide.primaryBtn.text}
                  </Link>

                  {slide.secondaryBtn && (
                    <Link
                      href={slide.secondaryBtn.link}
                      className="btn btn-outline text-white"
                    >
                      {slide.secondaryBtn.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Controls */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="btn btn-circle"
        >
          ❮
        </button>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
