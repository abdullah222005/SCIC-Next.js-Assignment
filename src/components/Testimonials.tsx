const reviews = [
  {
    name: "Arafat Hossain",
    comment: "Amazing quality! The hoodie feels premium and fits perfectly.",
  },
  {
    name: "Nusrat Jahan",
    comment: "Loved the new arrivals collection. Stylish and comfortable!",
  },
  {
    name: "Sabbir Ahmed,",
    comment: "Fast delivery and great fabric quality. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-base-200 text-center">
      <h2>What Our Customers Say</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {reviews.map((r) => (
          <div key={r.name} className="card bg-base-100 p-6 shadow">
            <p className="italic">“{r.comment}”</p>
            <h4 className="mt-4 font-semibold">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
