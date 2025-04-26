import React from "react";
import { Hero, Button } from "../../components/ui";
import aboutImage from "../../assets/images/test-prep-hero.png"; // You'll need to add this image

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Who We Are"
        subtitle="Dedicated professionals committed to your education and migration journey"
        backgroundImage={aboutImage}
      />

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Star Education & Migration
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Star Education & Migration is a proud member of the Star Group, a
              trusted name that has been serving clients across various sectors
              for the past 35 years. Backed by a strong legacy of excellence,
              trust, and commitment, we have emerged as a leading education
              consultancy dedicated to guiding students towards a brighter
              academic and professional future.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With decades of industry experience behind us, we understand that
              every student’s dream is unique—and so is their journey. That’s
              why we offer personalized counseling, country-specific guidance,
              complete documentation support, and hassle-free visa processing,
              ensuring that you are well-prepared at every step of your study
              abroad experience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Star Education & Migration, we don’t just help you choose the
              right country or course—we help you shape your future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
          </div>

          <ul className="space-y-4 max-w-3xl mx-auto">
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                30+ Years of Trusted Legacy
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                Part of the Esteemed Star Group
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                Dedicated Country-Specific Counseling
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                End-to-End Admission & Visa Assistance
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                High Success Rate & Satisfied Students
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-700">
                Affordable, Transparent, and Reliable Services
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700">
                  To empower students with the knowledge, resources, and support
                  they need to achieve their international education and career
                  goals, while making the process as smooth and stress-free as
                  possible.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700">
                  To be the most trusted and reliable education and migration
                  consultancy, known for our integrity, expertise, and
                  exceptional student outcomes, helping shape the next
                  generation of global leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700">
              The principles that guide our approach to helping students achieve
              their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 mx-auto"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our interactions
                with students and partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in all our services and continuously
                improve to meet evolving needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Student-Centric
              </h3>
              <p className="text-gray-600">
                Our students are at the heart of everything we do, and their
                success is our primary goal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Global Perspective
              </h3>
              <p className="text-gray-600">
                We embrace diversity and foster a global mindset in everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Global Reach
            </h2>
            <p className="text-lg text-gray-700">
              We have successfully placed students in top universities across
              these countries:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              "United Kingdom",
              "United States",
              "Canada",
              "Australia",
              "France",
              "Germany",
              "Ireland",
              "New Zealand",
              "Singapore",
              "Malaysia",
              "Netherlands",
              "Switzerland",
            ].map((country, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition duration-300"
              >
                <p className="font-medium text-gray-800">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Global Reach
            </h2>
            <p className="text-lg text-gray-700">
              We have successfully placed students in top universities across
              these countries:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">United Kingdom</h4>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="USA Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">United States</h4>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
                  alt="Australia Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">Australia</h4>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
                  alt="Canada Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">Canada</h4>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                  alt="France Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">France</h4>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
                  alt="Germany Flag"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <h4 className="font-semibold">Germany</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8">
              Discover the endless possibilities and opportunities waiting for
              you around the globe.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Explore
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
