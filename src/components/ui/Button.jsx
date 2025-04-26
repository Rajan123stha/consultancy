import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  // Define button base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none transition duration-300";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    white: "bg-white text-blue-600 hover:bg-gray-50",
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${
    variantClasses[variant]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  // Animation variants
  const buttonAnimation = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  // Render as Link if 'to' prop is provided (for internal navigation)
  if (to && !disabled) {
    return (
      <motion.div>
        <motion.div
          className={buttonClasses}
          whileHover="hover"
          whileTap="tap"
          variants={buttonAnimation}
        >
          <Link
            to={to}
            className="w-full h-full flex items-center justify-center"
            {...props}
          >
            {children}
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  // Render as anchor tag if 'href' prop is provided (for external links)
  if (href && !disabled) {
    return (
      <motion.div>
        <motion.div
          className={buttonClasses}
          whileHover="hover"
          whileTap="tap"
          variants={buttonAnimation}
        >
          <a
            href={href}
            className="w-full h-full flex items-center justify-center"
            {...props}
          >
            {children}
          </a>
        </motion.div>
      </motion.div>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : "hover"}
      whileTap={disabled ? {} : "tap"}
      variants={buttonAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
