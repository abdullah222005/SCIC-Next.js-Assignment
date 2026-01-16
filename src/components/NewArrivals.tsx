import Image from "next/image";

const arrivals = [
  { id: 1, name: "Oversized Tee", price: "$29", image: "/n1.jpg" },
  { id: 2, name: "Summer Dress", price: "$69", image: "/n2.jpg" },
  { id: 3, name: "Sneakers", price: "$89", image: "/n3.jpg" },
  { id: 4, name: "Formal Shirt", price: "$45", image: "/n4.jpg" },
];

const NewArrivals = () => {
  return (
    <section className="py-16 px-6">
      <h2>New Arrivals</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {arrivals.map((p) => (
          <div key={p.id} className="card bg-base-100 shadow">
            <figure className="h-60 relative">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </figure>
            <div className="card-body">
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button className="btn btn-outline btn-sm">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
