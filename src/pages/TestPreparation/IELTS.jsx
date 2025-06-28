import React from "react";
import { Hero } from "../../components/ui";
import image from "../../assets/images/test1.jpg";
import UsableBanner from "../../components/ui/UsableBanner";
const IELTS = () => {
  return (
    <div className="min-h-screen">
      <UsableBanner
        title="IELTS Preparation"
        subtitle="Achieve your dream score with expert guidance"
        image={image} // Replace with your actual image path
      />
      {/* <Hero
        title="IELTS Preparation"
        subtitle="Achieve your dream score with expert guidance"
        buttonText="Enroll Now"
        buttonLink="/contact"
      /> */}

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              What is the IELTS Exam?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The International English Language Testing System (IELTS) is a
              globally recognized English language proficiency test designed for
              non-native English speakers. It is accepted by thousands of
              institutions and governments across the world for study, work, and
              migration.
            </p>
          </div>
        </div>
      </section>

      {/* Owned & Managed By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Owned & Managed By:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>British Council</li>
              <li>IDP: IELTS Australia</li>
              <li>Cambridge Assessment English</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Purpose of IELTS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Purpose of IELTS:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Admission to universities and colleges</li>
              <li>Job applications and professional registration</li>
              <li>
                Immigration to English-speaking countries like the UK,
                Australia, Canada, and New Zealand
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* IELTS Test Formats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              IELTS Test Formats:
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-indigo-900 mb-2">
                  IELTS Academic
                </h4>
                <p className="text-gray-700">
                  For students aiming to pursue undergraduate or postgraduate
                  studies abroad. Focuses on academic vocabulary, complex
                  grammar, and analytical writing.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-indigo-900 mb-2">
                  IELTS General Training
                </h4>
                <p className="text-gray-700">
                  For individuals planning to work, train, or migrate to
                  English-speaking countries. Covers practical, everyday English
                  usage in social and workplace settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS Test Structure Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              ⏱ IELTS Test Structure:
            </h3>
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-gray-200 px-4 py-2">Section</th>
                  <th className="border border-gray-200 px-4 py-2">Format</th>
                  <th className="border border-gray-200 px-4 py-2">Duration</th>
                  <th className="border border-gray-200 px-4 py-2">
                    Skills Assessed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Listening
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Audio recordings (4 parts)
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    30 minutes
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Understanding spoken English
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Reading</td>
                  <td className="border border-gray-200 px-4 py-2">
                    3 reading passages
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    60 minutes
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Reading comprehension
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Writing</td>
                  <td className="border border-gray-200 px-4 py-2">
                    2 tasks: description + essay
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    60 minutes
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Grammar, coherence, written skills
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Speaking</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Interview with an examiner
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    11–14 minutes
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Fluency, pronunciation, vocabulary
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🌟 Why Choose Star Education & Migration for IELTS Preparation?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Certified instructors by IDP IELTS, British Council</li>
              <li>
                Customized training programs for Academic & General Training
              </li>
              <li>
                In-depth focus on all 4 modules with real exam simulations
              </li>
              <li>Regular mock tests and feedback sessions</li>
              <li>Small batches for individual attention</li>
              <li>
                Updated study materials aligned with the latest IELTS trends
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              📆 Enroll with Star Education & Migration for IELTS Success
            </h3>
            <p className="text-lg mb-6">
              Ready to take the first step towards your global academic dream?
            </p>
            <p className="text-lg mb-6">Our IELTS Program offers:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Online and In-Person Options</li>
              <li>Affordable Packages</li>
              <li>One-on-One Guidance</li>
            </ul>
            <p className="text-lg mt-6">
              🎯 Limited seats available! Book your slot and boost your chances
              of success.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Book Your Slot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IELTS;
