const testimonials = [
  {
    name: "Rahul Sharma",
    country: "India",
    review:
      "This AI Tourism Guide made planning my vacation incredibly easy. Highly recommended!"
  },
  {
    name: "Emily Johnson",
    country: "USA",
    review:
      "The destination suggestions and budget planner were fantastic."
  },
  {
    name: "Aarav Patel",
    country: "India",
    review:
      "Loved the hotel recommendations and emergency location feature."
  }
];

function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Travelers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-xl p-8 shadow"
            >
              <p className="italic text-gray-700">
                "{user.review}"
              </p>

              <h3 className="font-bold mt-6">
                {user.name}
              </h3>

              <p className="text-gray-500">
                {user.country}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;