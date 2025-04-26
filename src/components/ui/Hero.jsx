import React from "react";
import { motion } from "framer-motion";
import { Button } from "./";
import heroAbroadImage from "../../assets/images/abroad.jpg";

const Hero = ({
  title,
  subtitle,
  backgroundImage = heroAbroadImage, // Default to the HeroAbroad image
  backgroundOverlay = false, // Changed default to false
  buttonText,
  buttonLink,
  height = "h-[500px]", // Reduced default height
  mobileHeight = "h-[350px]", // Reduced mobile height
  textAlignment = "text-center lg:text-left", // Center on mobile, left on desktop
  children,
}) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-blue-50 overflow-hidden py-8">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className={`z-10 ${textAlignment}`}>
            {title && (
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-900 mb-2"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                className="text-sm md:text-xl text-indigo-700/80 mb-4"
                initial="hidden"
                animate="visible"
                variants={subtitleVariants}
              >
                {subtitle}
              </motion.p>
            )}

            {buttonText && buttonLink && (
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={buttonVariants}
                className="mb-4"
              >
                <Button
                  to={buttonLink}
                  variant="primary"
                  size="md"
                  className="shadow-md"
                >
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </motion.div>
            )}

            {children}
          </div>

          {/* Image */}
          <motion.div
            className="order-first lg:order-last relative max-w-lg mx-auto" // Changed from max-w-md to max-w-lg
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={heroAbroadImage}
              alt="Hero image"
              className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-lg" // Increased max-h from 300px to 350px
            />

            {/* Optional stats card - hidden on mobile */}
            <motion.div
              className="absolute top-3 right-3 bg-white p-2 rounded-lg shadow-md hidden md:block" // Added hidden md:block to hide on mobile
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="font-bold text-base text-indigo-900">We Care</p>
              <p className="text-xs text-gray-600">Expert Guidance</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
