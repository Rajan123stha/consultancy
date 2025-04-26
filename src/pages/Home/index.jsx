import React from "react";
import { Hero, Card, Button, StudyAbroadHero } from "../../components/ui";
import {
  destinationsData,
  testPreparationsData,
} from "../../data/educationData";

const HomePage = () => {
  // Using only first 4 items for home page
  const destinations = destinationsData.slice(0, 4);
  const testPreparations = testPreparationsData.slice(0, 3);

  return (
    <div className="min-h-screen">
      <StudyAbroadHero />
      {/* Hero Section */}

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Star Education & Migration
            </h2>
            <p className="text-lg text-gray-600">
              We are dedicated to helping students achieve their dreams of
              studying abroad. With our expert guidance and personalized
              services, we make the complex process of overseas education and
              migration simple and successful.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-12 w-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Education Counseling
              </h3>
              <p className="text-gray-600">
                Personalized guidance to help you choose the right course and
                university based on your academic profile and career goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-12 w-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Visa Assistance
              </h3>
              <p className="text-gray-600">
                Complete support for student visa applications, including
                documentation, preparation for visa interviews, and follow-ups.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-12 w-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Test Preparation
              </h3>
              <p className="text-gray-600">
                Expert coaching for IELTS, PTE, and Duolingo English tests with
                study materials, practice tests, and personalized feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore top educational destinations around the world and find the
              perfect place to pursue your academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                linkTo={destination.linkTo}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/destinations" variant="primary" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Test Preparation Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Test Preparation Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prepare for English proficiency tests with our expert guidance and
              achieve the scores you need for admission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testPreparations.map((test) => (
              <Card
                key={test.id}
                title={test.title}
                description={test.description}
                image={test.image}
                linkTo={test.linkTo}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/test-preparation" variant="primary" size="lg">
              Explore Test Preparation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Take the first step towards your international education and
              career. Our consultants are ready to guide you every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/destinations" variant="white" size="lg">
                Explore Destinations
              </Button>
              <Button
                to="/contact"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
