import Image from "next/image";

const products = [
  { id: 1, name: "Classic Hoodie", price: "$49", image: "/p1.jpg" },
  { id: 2, name: "Urban Jacket", price: "$79", image: "/p2.jpg" },
  { id: 3, name: "Casual Shirt", price: "$39", image: "/p3.jpg" },
  { id: 4, name: "Denim Jeans", price: "$59", image: "/p4.jpg" },
];

const BestSellers = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <h2>Best Sellers</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((p) => (
          <div key={p.id} className="card bg-base-100 shadow">
            <figure className="h-60 relative">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </figure>
            <div className="card-body">
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button className="btn btn-primary btn-sm">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
