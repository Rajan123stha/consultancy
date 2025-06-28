import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../../components/ui";
import { motion } from "framer-motion";
import { destinationsData } from "../../../data/educationData";
import Card from "../../../components/ui/Card";
import UsableBanner from "../../../components/ui/UsableBanner";
import image from "../../../assets/images/europe.jpg"; // Replace with your actual image path
const EuropeDestinations = () => {
  // Define European country slugs
  const europeanSlugs = [
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Ireland",
    "Finland",
    "Poland",
    "Malta",
    "Cyprus",
    "Switzerland",
  ];

  // Filter only European destinations
  const europeanDestinations = destinationsData.filter((destination) =>
    europeanSlugs.includes(destination.title)
  );

  return (
    <div className="min-h-screen">
      <UsableBanner
        title="Study in Europe"
        subtitle="Discover world-class education opportunities across European destinations"
        image={image} // Replace with your actual image path
      />

      {/* // <Hero
      //   title="Study in Europe"
      //   subtitle="Discover world-class education opportunities across European destinations"
      // /> */}

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              Why Choose Europe for Your Studies?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Europe offers a diverse range of educational opportunities with
              world-renowned universities, cutting-edge research facilities, and
              a rich cultural heritage. From tuition-free options in Germany to
              prestigious institutions in France, European education provides
              excellent value with globally recognized qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* European Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
            European Study Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {europeanDestinations.map((destination, index) => (
              <Card
                key={destination.id}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                linkTo={destination.linkTo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Studying in Europe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
              Benefits of Studying in Europe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-700">
                  Europe is home to some of the world's oldest and most
                  prestigious universities, offering high-quality education and
                  internationally recognized degrees.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Cultural Diversity
                </h3>
                <p className="text-gray-700">
                  Immerse yourself in diverse cultures, languages, and
                  traditions while building a global network of connections.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Affordable Education
                </h3>
                <p className="text-gray-700">
                  Many European countries offer free or low-cost education for
                  international students, making it a cost-effective choice
                  compared to other study destinations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Travel Opportunities
                </h3>
                <p className="text-gray-700">
                  Europe's excellent transportation network makes it easy to
                  explore multiple countries during your study period, enhancing
                  your international experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Begin Your European Education Journey?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for personalized guidance on studying in Europe.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EuropeDestinations;
