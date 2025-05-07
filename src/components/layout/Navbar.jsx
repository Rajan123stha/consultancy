import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/images/Logo.png"; // Import the actual logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationsDropdown, setDestinationsDropdown] = useState(false);
  const [testDropdown, setTestDropdown] = useState(false);
  // Add separate state for mobile dropdowns
  const [mobileDestDropdown, setMobileDestDropdown] = useState(false);
  const [mobileTestDropdown, setMobileTestDropdown] = useState(false);

  const destinationsRef = useRef(null);
  const testRef = useRef(null);
  const mobileDestRef = useRef(null);
  const mobileTestRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Handle desktop dropdowns
      if (
        destinationsRef.current &&
        !destinationsRef.current.contains(event.target)
      ) {
        setDestinationsDropdown(false);
      }
      if (testRef.current && !testRef.current.contains(event.target)) {
        setTestDropdown(false);
      }

      // Handle mobile dropdowns
      if (
        mobileDestRef.current &&
        !mobileDestRef.current.contains(event.target)
      ) {
        setMobileDestDropdown(false);
      }
      if (
        mobileTestRef.current &&
        !mobileTestRef.current.contains(event.target)
      ) {
        setMobileTestDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to close all dropdowns when navigating
  const handleNavigation = () => {
    setIsOpen(false);
    setDestinationsDropdown(false);
    setTestDropdown(false);
    setMobileDestDropdown(false);
    setMobileTestDropdown(false);
  };

  // Destinations list
  const destinations = [
    {
      name: "Europe",
      path: "/europe",
      subMenu: [
        { name: "Cyprus", path: "/destinations/cyprus" },
        { name: "France", path: "/destinations/france" },
        { name: "Spain", path: "/destinations/spain" },
        { name: "Germany", path: "/destinations/germany" },

        { name: "Italy", path: "/destinations/italy" },
        { name: "Finland", path: "/destinations/finland" },
        { name: "Poland", path: "/destinations/poland" },
        { name: "Malta", path: "/destinations/malta" },
      ],
    },
    { name: "United Kingdom", path: "/destinations/uk" },
    { name: "Canada", path: "/destinations/canada" },
    { name: "Australia", path: "/destinations/australia" },
    { name: "UAE", path: "/destinations/uae" },
    { name: "India", path: "/destinations/india" },
  ];

  // Test preparation list
  const testPreparations = [
    { name: "IELTS", path: "/test-preparation/ielts" },
    { name: "PTE Academic", path: "/test-preparation/pte" },
    { name: "Duolingo", path: "/test-preparation/duolingo" },
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between h-18 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Logo image with enhanced shadow and vertical centering */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-16 my-auto flex items-center justify-center"
              >
                <img
                  src={LogoImage}
                  alt="Star Education & Migration Consultancy Logo"
                  className="h-12 w-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop menu with larger font */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link
              to="/"
              className="px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>

            {/* Destinations Dropdown with adjusted positioning */}
            <div ref={destinationsRef} className="relative">
              <button
                onClick={() => {
                  setDestinationsDropdown(!destinationsDropdown);
                  setTestDropdown(false);
                }}
                className="flex items-center px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none"
              >
                Destinations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    destinationsDropdown ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {destinationsDropdown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute  translate-x-4 mt-2 py-2 w-56 bg-white rounded-md shadow-2xl z-50"
                  >
                    {destinations.map((destination, index) => (
                      <div key={index} className="relative group">
                        <Link
                          to={destination.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                          onClick={() => setDestinationsDropdown(false)}
                        >
                          <div className="flex items-center justify-between">
                            {destination.name}
                            {destination.subMenu && (
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </div>
                        </Link>
                        {destination.subMenu && (
                          <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {destination.subMenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                                onClick={() => setDestinationsDropdown(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <Link
                        to="/destinations"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        onClick={() => setDestinationsDropdown(false)}
                      >
                        View All Destinations
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Test Preparation Dropdown with adjusted positioning */}
            <div ref={testRef} className="relative">
              <button
                onClick={() => {
                  setTestDropdown(!testDropdown);
                  setDestinationsDropdown(false);
                }}
                className="flex items-center px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none"
              >
                Test Preparation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    testDropdown ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {testDropdown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute  translate-x-4 mt-2 py-2 w-56 bg-white rounded-md shadow-2xl z-50"
                  >
                    {/* <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                      Test Preparation
                    </div> */}
                    {testPreparations.map((test, index) => (
                      <Link
                        key={index}
                        to={test.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                        onClick={() => setTestDropdown(false)}
                      >
                        {test.name}
                      </Link>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <Link
                        to="/test-preparation"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        onClick={() => setTestDropdown(false)}
                      >
                        View All Tests
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/mock-test"
              className="px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Mock Test
            </Link>

            <Link
              to="/about"
              className="px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="px-2 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="ml-2 px-2 py-2 text-lg font-normal bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Destinations submenu - fixed toggle behavior */}
              <div className="block px-3 py-2" ref={mobileDestRef}>
                <button
                  onClick={() => {
                    setMobileDestDropdown(!mobileDestDropdown);
                    setMobileTestDropdown(false);
                  }}
                  className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none"
                >
                  Destinations
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      mobileDestDropdown ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileDestDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-1 border-l-2 border-blue-100"
                    >
                      {destinations.map((destination, index) => (
                        <Link
                          key={index}
                          to={destination.path}
                          className="block py-1 text-gray-600 hover:text-blue-600 transition duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {destination.name}
                        </Link>
                      ))}
                      <Link
                        to="/destinations"
                        className="block py-1 text-blue-600 hover:text-blue-800 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Destinations
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Test Preparation submenu - fixed toggle behavior */}
              <div className="block px-3 py-2" ref={mobileTestRef}>
                <button
                  onClick={() => {
                    setMobileTestDropdown(!mobileTestDropdown);
                    setMobileDestDropdown(false);
                  }}
                  className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none"
                >
                  Test Preparation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      mobileTestDropdown ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileTestDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-1 border-l-2 border-blue-100"
                    >
                      {testPreparations.map((test, index) => (
                        <Link
                          key={index}
                          to={test.path}
                          className="block py-1 text-gray-600 hover:text-blue-600 transition duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {test.name}
                        </Link>
                      ))}
                      <Link
                        to="/test-preparation"
                        className="block py-1 text-blue-600 hover:text-blue-800 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Tests
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/mock-test"
                className="block px-3 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Mock Test
              </Link>

              <Link
                to="/about"
                className="block px-3 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-lg font-normal text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                className="block mx-3 my-2 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
