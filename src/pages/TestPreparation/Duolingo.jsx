import React from "react";
import { Hero } from "../../components/ui";

const Duolingo = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Duolingo English Test Coaching"
        subtitle="Prepare for success with expert guidance"
        buttonText="Enroll Now"
        buttonLink="/contact"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              Duolingo English Test Coaching
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Duolingo English Test (DET) is a convenient, affordable, and
              fast-growing English proficiency exam accepted by 4000+
              universities globally.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Duolingo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Why Choose Duolingo?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Take the test from home with a webcam & internet</li>
              <li>Get results within 48 hours</li>
              <li>Shorter duration – just 1 hour</li>
              <li>Widely accepted in the USA, UK, Canada, Europe, and more</li>
              <li>No appointment needed – available anytime</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Duolingo Preparation Includes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Our Duolingo Preparation Includes:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Module-based preparation: Reading, Writing, Speaking & Listening
              </li>
              <li>Practice for adaptive question format</li>
              <li>Strategies for high scores (120+ recommended)</li>
              <li>Grammar & vocabulary building</li>
              <li>One-on-one speaking practice and writing feedback</li>
              <li>Latest question bank and mock test series</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Expert Support:
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our trainers help you master the test format with easy-to-follow
              methods and tech-savvy learning.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              📆 Enroll with Star Education & Migration for Duolingo Success
            </h3>
            <p className="text-lg mb-6">
              Ready to take the first step towards your global academic dream?
            </p>
            <p className="text-lg mb-6">Our Duolingo Program offers:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Online and In-Person Options</li>
              <li>Affordable Packages</li>
              <li>One-on-One Guidance</li>
            </ul>
            <p className="text-lg mt-6">
              🎯 Limited seats available! Book your slot and boost your chances
              of success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Duolingo;
