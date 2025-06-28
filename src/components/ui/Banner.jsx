import React, { useEffect, useState } from "react";
import Image from "../../assets//images/BannerHome.jpg"; // Replace with your actual image path

// Carousel content only (text)
const slides = [
  {
    id: 1,
    title: "Education Counseling",
    subtitle:
      "Expert guidance for choosing the right course and university abroad.",
  },
  {
    id: 2,
    title: "Study Abroad Safely",
    subtitle: "Your health, our priority – wherever you go.",
  },
  {
    id: 3,
    title: "Visa Assistance",
    subtitle:
      "Complete support for student visa application and documentation.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[300px] md:h-[500px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${Image})`, // Replace with your actual background path
      }}
    >
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>

      {/* Carousel Text Content */}
      <div className="relative z-10 px-4 md:px-10 max-w-4xl text-white ml-4 md:ml-16">
        <h1 className="text-2xl md:text-5xl font-bold uppercase">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          {slides[currentIndex].subtitle}
        </p>
        <button className=" mt-4 md:mt-6 px-6 py-3   font-semibold rounded text-white hover:bg-gray-200 hover:text-black transition border border-gray-300 ">
          Learn More
        </button>

        {/* Carousel Dots */}
        <div className="flex gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border border-white ${
                index === currentIndex ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
