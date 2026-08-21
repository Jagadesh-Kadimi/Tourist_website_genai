import { useState } from "react";

function Gallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Photos
        </h2>

        <div className="bg-white rounded-2xl p-8 text-gray-500">
          Photos coming soon.
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore {name}
        </h2>

        <span className="text-gray-500">
          {images.length} Photos
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="group overflow-hidden rounded-2xl shadow-md cursor-pointer focus:outline-none"
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
          </button>
        ))}
      </div>

  {/* Image Modal */}
{selectedImage !== null && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative max-w-5xl w-full flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300"
      >
        ×
      </button>

      {/* Previous */}
      <button
        onClick={() =>
          setSelectedImage(
            selectedImage === 0
              ? images.length - 1
              : selectedImage - 1
          )
        }
        className="absolute left-0 md:-left-16 text-white text-5xl hover:text-gray-300"
      >
        ‹
      </button>

      {/* Large Image */}
      <img
        src={images[selectedImage]}
        alt={`${name} ${selectedImage + 1}`}
        className="w-full max-h-[80vh] object-contain rounded-xl"
      />

      {/* Next */}
      <button
        onClick={() =>
          setSelectedImage(
            selectedImage === images.length - 1
              ? 0
              : selectedImage + 1
          )
        }
        className="absolute right-0 md:-right-16 text-white text-5xl hover:text-gray-300"
      >
        ›
      </button>

      {/* Counter */}
      <p className="absolute -bottom-10 text-white">
        {selectedImage + 1} / {images.length}
      </p>
    </div>
  </div>
)}
    </section>
  );
}

export default Gallery;