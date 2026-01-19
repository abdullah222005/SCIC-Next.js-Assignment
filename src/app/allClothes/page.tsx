"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  gender: "men" | "women" | "accessories";
  price: number;
  rating: number;
  image: string;
  isNew: boolean;
};

import productsData from "../../../public/clothes.json"
import Link from "next/link";

const AllClothesPage = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    let filtered = [...productsData];

    // Search
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setProducts(filtered);
  }, [search, filter, sort]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="mb-6">All Clothes</h1>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search clothes..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort */}
        <select
          className="select select-bordered w-full"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-md">
            <figure className="relative h-60">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.isNew && (
                <span className="badge badge-primary absolute top-2 left-2">
                  New
                </span>
              )}
            </figure>

            <div className="card-body">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 capitalize">
                {product.gender}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">৳{product.price}</span>
                <span className="text-sm">⭐ {product.rating}</span>
              </div>
              <Link href={`/products/${product.id}`}>
                <button className="btn btn-primary btn-sm mt-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No products found.</p>
      )}
    </section>
  );
};

export default AllClothesPage;
