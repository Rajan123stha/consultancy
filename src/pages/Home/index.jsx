import React from "react";
import { Link } from "react-router-dom";
import { Hero, Card, Button, StudyAbroadHero } from "../../components/ui";
import {
  destinationsData,
  testPreparationsData,
} from "../../data/educationData";
import Visa from "../../assets/images/visa-assistance.jpg";
import Counseling from "../../assets/images/education-counseler.jpg";
import testPrepImg from "../../assets/images/test-prep.jpg";
import { blogData } from "../../data/blogData";
import Banner from "../../components/ui/Banner";

const HomePage = () => {
  // Using only first 4 items for home page
  const destinations = destinationsData.slice(0, 4);
  const testPreparations = testPreparationsData.slice(0, 3);

  const services = [
    {
      title: "Education Counseling",
      description:
        "Expert guidance for choosing the right course and university abroad.",
      image: Counseling,
    },
    {
      title: "Visa Assistance",
      description:
        "Complete support for student visa application and documentation.",
      image: Visa,
    },
    {
      title: "Test Preparation",
      description: "Comprehensive coaching for IELTS, PTE, and Duolingo.",
      image: testPrepImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Banner />
      {/* <StudyAbroadHero /> */}
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
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and guides in
              international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/blog" variant="primary" size="lg">
              View All Posts
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
