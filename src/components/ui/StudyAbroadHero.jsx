import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StudyAbroadHero = () => {
  const destinations = [
    { name: "France", path: "/destinations/france" },
    { name: "UK", path: "/destinations/uk" },
    { name: "Canada", path: "/destinations/canada" },
    { name: "USA", path: "/destinations/usa" },
    { name: "New Zealand", path: "/destinations/newzealand" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-5 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Nepal's leading study abroad consultants
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-indigo-700/80 mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              We've helped 60,000+ students turn their dreams into reality, for
              FREE!*
            </motion.p>

            {/* Destination Buttons */}
            <motion.div
              className=" flex-wrap gap-3 mb-10 hidden md:flex"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {destinations.map((destination) => (
                <motion.div
                  key={destination.name}
                  variants={buttonVariants}
                  whileHover="hover"
                  className="overflow-hidden"
                >
                  <Link
                    to={destination.path}
                    className="inline-flex items-center px-6 py-3 bg-white rounded-full text-indigo-800 font-medium border border-indigo-100 shadow-sm hover:shadow transition-all"
                  >
                    {destination.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Card - Visa Success Rate */}
            <motion.div
              className="z-10 absolute bottom-10 left-1/2 bg-white p-3 rounded-xl shadow-lg hidden md:block"
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="font-bold text-xl text-indigo-900">97.9%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <img
              src="/src/assets/images/HomeHero.png"
              alt="Students studying abroad"
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Stats Card - Universities */}
            <motion.div
              className="absolute top-2 right-2 bg-white p-3 rounded-xl shadow-lg hidden md:block"
              variants={statCardVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="font-bold text-xl text-indigo-900">
                750+ Universities
              </p>
              <p className="text-sm text-gray-600">Global Partners</p>
            </motion.div>

            {/* End-to-end services tag */}
            <motion.div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg hidden md:block"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <p className="text-center">
                <span className="font-bold text-indigo-900">Free Services</span>{" "}
                <span className="text-gray-600">End-to-End</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadHero;
