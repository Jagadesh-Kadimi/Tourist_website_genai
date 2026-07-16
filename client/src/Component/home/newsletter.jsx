import newsletter from "../../data/home/newsletter";

function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          {newsletter.title}
        </h2>

        <p className="text-lg text-gray-100 mb-10">
          {newsletter.subtitle}
        </p>

       <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-full p-2 shadow-xl max-w-3xl mx-auto">

  <input
    type="email"
    placeholder="Enter your email..."
    className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700"
  />

  <button
    className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-full font-semibold text-black transition duration-300"
  >
    Subscribe
  </button>

</div>

        </div>

    </section>
  );
}

export default Newsletter;