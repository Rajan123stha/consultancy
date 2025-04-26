import React from "react";
import { Hero, Button } from "../../components/ui";
import mockTestHeroImage from "../../assets/images/test-prep-hero.png"; // You'll need to add this image

const MockTestPage = () => {
  // Sample mock test options
  const mockTests = [
    {
      id: 1,
      name: "IELTS Academic",
      description:
        "Full-length practice test with all four sections: Listening, Reading, Writing, and Speaking.",
      duration: "2 hours 45 minutes",
      sections: "All sections included",
    },
    {
      id: 2,
      name: "IELTS General Training",
      description:
        "Complete mock test with Listening, Reading, Writing, and Speaking modules specifically for GT candidates.",
      duration: "2 hours 45 minutes",
      sections: "All sections included",
    },
    {
      id: 3,
      name: "PTE Academic",
      description:
        "Comprehensive practice test covering all 20 question types in a computer-based format.",
      duration: "3 hours",
      sections: "Speaking & Writing, Reading, Listening",
    },
    {
      id: 4,
      name: "Duolingo English Test",
      description:
        "Adaptive mock test that adjusts to your skill level, similar to the actual Duolingo test format.",
      duration: "1 hour",
      sections: "Literacy, Comprehension, Conversation, Production",
    },
    {
      id: 5,
      name: "TOEFL iBT",
      description:
        "Internet-based test simulation covering all four language skills with integrated tasks.",
      duration: "3 hours",
      sections: "Reading, Listening, Speaking, Writing",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Get Ready with Our Mock Tests"
        subtitle="Practice under exam-like conditions and prepare effectively for your language proficiency tests"
        backgroundImage={mockTestHeroImage}
      />

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mock Tests – Be Exam Ready!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              No matter which test you’re preparing for – IELTS, PTE, or
              Duolingo – our Mock Test Series ensures you’re ready to succeed.
            </p>
            <p className="text-lg text-gray-700">
              After completing a mock test, you'll receive detailed performance
              analysis, section-wise scores, and personalized feedback to help
              you identify areas for improvement and refine your test-taking
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Mock Tests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="h-10 w-10"
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
                  Authentic Experience
                </h3>
                <p className="text-gray-600">
                  Experience tests that mirror the format, difficulty level, and
                  timing of actual exams, helping you know exactly what to
                  expect on test day.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Identify Strengths & Weaknesses
                </h3>
                <p className="text-gray-600">
                  Receive detailed performance analysis highlighting areas where
                  you excel and where you need additional practice to improve.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Time Management Practice
                </h3>
                <p className="text-gray-600">
                  Build the stamina and time management skills needed to
                  complete all sections effectively within the allocated time
                  limits.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Reduce Test Anxiety
                </h3>
                <p className="text-gray-600">
                  Familiarity with the test format and environment helps reduce
                  nervousness and anxiety on the actual test day, leading to
                  better performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Test Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mock Test Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Full-length tests for IELTS, PTE, and Duolingo
                </h3>
                <p className="text-gray-700">
                  Experience comprehensive mock tests that cover all sections of
                  your chosen exam, ensuring thorough preparation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Paper-based & computer-based formats
                </h3>
                <p className="text-gray-700">
                  Choose the format that suits you best and practice under real
                  exam-like conditions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Band score estimation and section-wise feedback
                </h3>
                <p className="text-gray-700">
                  Get accurate band score predictions and detailed feedback for
                  each section to improve your performance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Post-test analysis with instructor guidance
                </h3>
                <p className="text-gray-700">
                  Benefit from expert analysis and personalized guidance to
                  refine your test-taking strategies.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  Affordable pricing and packages
                </h3>
                <p className="text-gray-700">
                  Access high-quality mock tests at competitive prices with
                  flexible package options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Star Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Star Education For Test Preparation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600">
                  Detailed performance metrics and intelligent analysis help
                  pinpoint your improvement areas and track your progress over
                  time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Exam-Like Environment
                </h3>
                <p className="text-gray-600">
                  Our test centers are designed to replicate actual testing
                  conditions, including appropriate seating, timing, and
                  proctoring.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg
                    className="h-12 w-12"
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
                  Expert Feedback
                </h3>
                <p className="text-gray-600">
                  Receive personalized feedback from experienced instructors who
                  have in-depth knowledge of test patterns and scoring criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Our Students Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Anita S.</h4>
                    <p className="text-gray-600 text-sm">IELTS Band 8.0</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The mock tests were incredibly helpful in my IELTS
                  preparation. The detailed feedback helped me understand my
                  weak areas, and I was able to score 8.0 on my first attempt!"
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Rahul T.</h4>
                    <p className="text-gray-600 text-sm">PTE 85 Score</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Taking multiple mock tests at Star Education helped me get
                  comfortable with the computer-based format of PTE. The test
                  environment was exactly like the real exam, which really
                  helped reduce my anxiety."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Maria L.</h4>
                    <p className="text-gray-600 text-sm">Duolingo 135 Score</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The Duolingo mock test was spot-on in terms of question types
                  and adaptive difficulty. The strategies I learned helped me
                  achieve a score much higher than I expected!"
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">James H.</h4>
                    <p className="text-gray-600 text-sm">TOEFL iBT 110</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The mock tests and the personalized feedback sessions
                  afterward were instrumental in my preparation. The instructors
                  identified patterns in my mistakes that I wouldn't have
                  noticed myself."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl mb-8">
              Start with a mock test today and get valuable insights into your
              current proficiency level and areas for improvement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
    </div>
  );
};

export default MockTestPage;
