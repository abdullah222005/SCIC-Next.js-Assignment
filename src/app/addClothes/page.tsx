"use client";

import { useState } from "react";

const AddClothesPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    discount: "",
    rating: "",
    reviews: "",
    stock: "",
    sizes: "",
    colors: "",
    material: "",
    care: "",
    image: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      ...formData,
      id: Number(formData.id),
      price: Number(formData.price),
      discount: Number(formData.discount),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      stock: Number(formData.stock),
      sizes: formData.sizes.split(",").map((s) => s.trim()),
      colors: formData.colors.split(",").map((c) => c.trim()),
    };

    console.log("New Product:", product);
    alert("Product added! Check console.");

    setFormData({
      id: "",
      name: "",
      brand: "",
      category: "",
      price: "",
      discount: "",
      rating: "",
      reviews: "",
      stock: "",
      sizes: "",
      colors: "",
      material: "",
      care: "",
      image: "",
      description: "",
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Add New Clothing Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          name="id"
          placeholder="Product ID"
          className="input input-bordered"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <input
          name="name"
          placeholder="Product Name"
          className="input input-bordered"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="brand"
          placeholder="Brand"
          className="input input-bordered"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="select select-bordered"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option>T-Shirts</option>
          <option>Shirts</option>
          <option>Dresses</option>
          <option>Jeans</option>
          <option>Accessories</option>
        </select>

        <input
          name="price"
          type="number"
          placeholder="Price (৳)"
          className="input input-bordered"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          name="discount"
          type="number"
          placeholder="Discount (%)"
          className="input input-bordered"
          value={formData.discount}
          onChange={handleChange}
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating (1-5)"
          className="input input-bordered"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          name="reviews"
          type="number"
          placeholder="Reviews"
          className="input input-bordered"
          value={formData.reviews}
          onChange={handleChange}
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock Quantity"
          className="input input-bordered"
          value={formData.stock}
          onChange={handleChange}
        />

        <input
          name="sizes"
          placeholder="Sizes (S, M, L...)"
          className="input input-bordered"
          value={formData.sizes}
          onChange={handleChange}
        />

        <input
          name="colors"
          placeholder="Colors (White, Black...)"
          className="input input-bordered"
          value={formData.colors}
          onChange={handleChange}
        />

        <input
          name="material"
          placeholder="Material"
          className="input input-bordered"
          value={formData.material}
          onChange={handleChange}
        />

        <input
          name="care"
          placeholder="Care Instructions"
          className="input input-bordered"
          value={formData.care}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image Path (/products/...)"
          className="input input-bordered col-span-2"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          rows={6}
          className="textarea textarea-bordered col-span-2"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary col-span-2">
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddClothesPage;
