import React, { useState } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        alt: "Paisaje de montaña",
        label: "First Slide"
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        alt: "Bosque en la niebla"
    },
    {
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
        alt: "Ciudad de noche"
    }
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <div className="max-w-2xl mx-auto pt-24">
      <div className="relative">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {images.map((img, idx) => (
            <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                aria-hidden={idx !== current}
            >
                {img.label && (
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                    {img.label}
                </span>
                )}
                <img
                src={img.src}
                className="block w-full h-full object-cover rounded-lg"
                alt={img.alt}
                />
            </div>
            ))}
        </div>
        {/* Slider indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-600" : "bg-white"}`}
              aria-current={current === idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => goToSlide(idx)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={goToPrev}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
      <p className="mt-5">
        This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
        more by going to the official{" "}
        <a className="text-blue-600 hover:underline"
          href="https://flowbite.com/docs/getting-started/introduction/"
          target="_blank" rel="noopener noreferrer">
          Flowbite Documentation
        </a>.
      </p>
    </div>
  );
};

export default Carousel;