const ContactPage = () => {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="bg-yellow-50 dark:bg-blue-950/30 p-8 rounded-xl shadow-md space-y-6">
        <p className="text-center text-gray-700 dark:text-gray-300">
          Have questions or need assistance? We'd love to hear from you!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows={5}
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>

        <div className="mt-6 text-center text-gray-600 dark:text-gray-400 space-y-2">
          <p>Email: support@clothique.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123 Fashion Street, Dhaka, Bangladesh</p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
