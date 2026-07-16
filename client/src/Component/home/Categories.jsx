import categories from "../../data/home/categories";

function Categories() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category.id}
              className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-4 font-semibold">
                {category.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;