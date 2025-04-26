import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({
  title,
  description,
  image,
  linkTo,
  linkText = "Learn More",
  className = "",
  icon = null,
}) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Optional overlay with icon */}
          {icon && (
            <div className="absolute bottom-3 right-3 bg-blue-600 p-2 rounded-full text-white">
              {icon}
            </div>
          )}
        </div>
      )}

      <div className="p-5">
        {title && (
          <motion.h3
            className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        )}

        {description && (
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}

        {linkTo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              to={linkTo}
              className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 inline-flex items-center group"
            >
              {linkText}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
