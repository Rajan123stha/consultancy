import React from "react";
import { Hero } from "../../components/ui";
import UsableBanner from "../../components/ui/UsableBanner";

const PTE = () => {
  return (
    <div className="min-h-screen">
      <UsableBanner
        title="PTE Preparation"
        subtitle="Achieve your dream score with expert guidance"
      />
      {/* <Hero
        title="PTE Preparation"
        subtitle="Achieve your dream score with expert guidance"
        buttonText="Enroll Now"
        buttonLink="/contact"
      /> */}

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              PTE Preparation at Star Education & Migration
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Pearson Test of English (PTE Academic) is a computer-based
              English test accepted by universities, colleges, and governments
              around the world for study, work, and migration.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose PTE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Why Choose PTE?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fast results (within 2–5 days)</li>
              <li>Completely computer-based (unbiased scoring)</li>
              <li>Accepted by Australia, UK, Canada, New Zealand, and more</li>
              <li>Multiple test dates with year-round availability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              What We Offer:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Certified and experienced PTE trainers</li>
              <li>
                In-depth training for all four modules: Speaking, Writing,
                Reading & Listening
              </li>
              <li>Real-time test environment simulations</li>
              <li>
                Guidance for scoring 79+ for top-tier admissions and PR
                eligibility
              </li>
              <li>Grammar & pronunciation workshops</li>
              <li>Detailed performance analysis after every mock test</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our PTE Coaching Includes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Our PTE Coaching Includes:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Regular classes (Online & Offline)</li>
              <li>Flexible timings (Morning/Evening)</li>
              <li>Updated digital resources and practice sets</li>
              <li>Weekly mock tests with scoring and analysis</li>
              <li>Affordable fee structure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              📆 Enroll with Star Education & Migration for PTE Success
            </h3>
            <p className="text-lg mb-6">
              Ready to take the first step towards your global academic dream?
            </p>
            <p className="text-lg mb-6">Our PTE Program offers:</p>
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

export default PTE;
