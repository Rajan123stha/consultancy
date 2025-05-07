import React from "react";
import { Hero, Button } from "../ui";
import { motion } from "framer-motion";

const DestinationLayout = ({ data, image }) => {
  console.log("Destination Data:", data);
  console.log("Image Data:", image); // Debugging line to check image data
   // Debugging line to check data structure
  return (
    <div className="min-h-screen">
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        backgroundImage={image}
      />

      {/* Intro Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.introText}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Why Study in {data.title.split(" ").pop()}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-3"
                >
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Popular Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.popularCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-indigo-900">
                    {course}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Admission Requirements
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.admissionRequirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{requirement}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-center text-gray-600">
                We'll assist you with everything—so you can focus on your
                future, not the formalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Career Opportunities
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              {data.careerOpportunities.text}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.careerOpportunities.opportunities.map(
                (opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-indigo-900">
                      {opportunity}
                    </h3>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Why Choose Star Education & Migration?
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid gap-6">
                {data.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and let us help you
              achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/contact" variant="white" size="lg">
                Schedule Consultation
              </Button>
              <Button
                to="/test-preparation"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                size="lg"
              >
                Explore Test Preparation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footnotes */}
      {/* {data.footnotes && data.footnotes.length > 0 && (
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {data.footnotes.map((note, index) => (
                <p key={index} className="text-sm text-gray-600">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default DestinationLayout;
