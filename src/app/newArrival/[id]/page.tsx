import Image from "next/image";
import { notFound } from "next/navigation";
import n1 from "../../../../public/n1.jpg";
import n2 from "../../../../public/n2.jpg";
import n3 from "../../../../public/n3.jpg";
import n4 from "../../../../public/n4.jpg";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

const arrivals = [
  {
    id: 111,
    name: "Oversized Tee",
    price: 899,
    rating: 4.3,
    reviews: 124,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    material: "100% Cotton",
    care: "Machine wash cold, tumble dry low",
    image: n1,
    description:
      "Stay comfy and stylish with this Oversized Tee. Crafted from premium cotton, it offers breathability and durability. Its relaxed fit makes it perfect for casual outings or lounging at home. Pair it with jeans, shorts, or joggers for a versatile look. The neutral color options allow easy coordination with any wardrobe. With reinforced stitching and soft fabric, this tee is built to last and keep you looking effortlessly cool.",
  },
  {
    id: 222,
    name: "Summer Dress",
    price: 1399,
    rating: 4.7,
    reviews: 98,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Yellow", "Blue"],
    material: "Lightweight Linen Blend",
    care: "Hand wash recommended, hang dry",
    image: n2,
    description:
      "Breeze through summer with this airy Summer Dress. Made from a lightweight linen blend, it keeps you cool while exuding elegance. The flowy silhouette flatters all body types, and the vibrant colors bring a cheerful vibe. Perfect for garden parties, brunch, or beach vacations. Adjustable straps and a soft lining ensure comfort throughout the day. Dress it up with heels or keep it casual with sandals.",
  },
  {
    id: 333,
    name: "Sneakers",
    price: 1099,
    rating: 4.5,
    reviews: 210,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Gray"],
    material: "Synthetic Leather & Rubber",
    care: "Wipe clean with a damp cloth",
    image: n3,
    description:
      "Step up your footwear game with these sleek Sneakers. Featuring a durable synthetic leather upper and cushioned insole, they offer all-day comfort. The rubber outsole provides excellent traction, making them ideal for both city walks and light workouts. Classic color options make them versatile for daily wear. Pair with jeans, shorts, or joggers for a sporty-casual look. Lightweight yet supportive, these sneakers are perfect for fashion-forward individuals who value both style and comfort.",
  },
  {
    id: 444,
    name: "Formal Shirt",
    price: 599,
    rating: 4.1,
    reviews: 76,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"],
    material: "Cotton-Polyester Blend",
    care: "Machine wash cold, hang dry",
    image: n4,
    description:
      "Elevate your office style with this Formal Shirt. Crafted from a cotton-polyester blend, it combines comfort and easy maintenance. The tailored fit ensures a sharp silhouette, while the smooth fabric feels soft against the skin. Suitable for professional settings, meetings, or formal events. Available in classic shades, it pairs perfectly with trousers, chinos, or suits. Durable stitching and breathable material make it a wardrobe essential for modern professionals.",
  },
];


type PageProps = {
  params: { id: number }; 
};

const ArrivalDetailsPage = async({ params }: PageProps) =>{
  const {id} = await params;
  const product = arrivals.find((item) => item.id === Number(id));

  if (!product) return notFound();

 return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-5">
        <h1>{product.name}</h1>

        <div className="flex items-center gap-4">
          <h2 className="text-primary">৳ {product.price}</h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Rating:</span>
          <span>⭐ {product.rating}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
export default ArrivalDetailsPage;
