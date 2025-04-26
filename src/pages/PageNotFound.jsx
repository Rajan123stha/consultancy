import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
