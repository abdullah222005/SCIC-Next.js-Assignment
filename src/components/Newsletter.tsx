const Newsletter = () => {
  return (
    <section className="py-20 px-6 text-center bg-black text-white">
      <h2>Join the Clothique Community</h2>
      <p className="mt-3">Get 10% off on your first order & stay updated.</p>

      <div className="mt-6 flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-sm text-black"
        />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
