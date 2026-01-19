import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import productsData from "../../../../public/clothes.json"

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetailsPage = async({ params }: PageProps) =>{
  const { id } = await params; 

  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

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

export default ProductDetailsPage;
