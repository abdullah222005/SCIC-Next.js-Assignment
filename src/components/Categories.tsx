import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Men", image: "/cat-men.jpg", link: "/men" },
  { name: "Women", image: "/cat-women.jpg", link: "/women" },
  { name: "Accessories", image: "/cat-accessories.jpg", link: "/accessories" },
  { name: "New Arrivals", image: "/new.jpg", link: "/new" },
];

const Categories = () => {
  return (
    <section className="py-16 px-6">
      <h2>Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.link}>
            <div className="relative h-60 rounded-lg overflow-hidden group">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl">{cat.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
