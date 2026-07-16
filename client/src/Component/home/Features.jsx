import features from "../../data/home/features";

function Features() {
  return (
    <section className="py-16 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose AI Tourism?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;