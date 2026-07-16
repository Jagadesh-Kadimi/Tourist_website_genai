import testimonials from "../../data/home/testimonial";

function Testimonials() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Travelers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((user) => (

            <div
              key={user.id}
              className="bg-slate-100 rounded-xl p-8 shadow"
            >
              <div className="text-yellow-500 text-xl">
                {"⭐".repeat(user.rating)}
              </div>

              <p className="italic text-gray-700 mt-4">
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