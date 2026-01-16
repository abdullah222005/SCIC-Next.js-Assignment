const features = [
  {
    title: "Premium Quality",
    desc: "High-grade fabrics for long-lasting comfort.",
  },
  { title: "Fast Delivery", desc: "Quick shipping all over the country." },
  { title: "Easy Returns", desc: "7-day hassle-free return policy." },
  { title: "Affordable Prices", desc: "Style that fits your budget." },
];

const WhyClothique = () => {
  return (
    <section className="py-16 px-6 bg-base-200">
      <h2>Why Choose Clothique?</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {features.map((f) => (
          <div key={f.title} className="card bg-base-100 p-6 shadow">
            <h3>{f.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyClothique;
