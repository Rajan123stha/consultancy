import React from "react";
import DImage from "../../assets/images/banner.png"; // Default image
const UsableBanner = ({ image = DImage, title, subtitle }) => {
  return (
    <section
      className="relative w-full h-[200px] md:h-[300px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Text content */}
      <div className="relative z-10 px-6 md:px-16 text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default UsableBanner;
