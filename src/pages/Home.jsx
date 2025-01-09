import React from 'react';
import { Link } from 'react-router-dom';
import higherEducationImage from '../assets/highereducation.jpg'; // Import the image

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Inline Styles for Animation */}
      <style>
        {`
          @keyframes zoom-in-out {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          .animate-zoom {
            animation: zoom-in-out 6s infinite;
          }
        `}
      </style>

      {/* Hero Section with Image */}
      <section className="relative">
        <div className="overflow-hidden rounded-lg shadow-xl max-w-6xl mx-auto">
          <img
            src={higherEducationImage} // Use the imported image
            alt="Higher Education"
            className="w-full h-80 object-cover transform animate-zoom mt-8"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <main className="p-6 max-w-6xl mx-auto">
        <section className="bg-white text-gray-800 shadow-xl rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
            Hello Future Engineers! Welcome to Aahzi
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Aahzi</strong>, an educational consultancy, offers optimal career paths for students who have completed their schooling. This service is delivered by a team of seasoned educators and industry specialists.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Aahzi assists by recommending suitable courses, institutions, universities, study locations, and relevant information aligned with current technology trends and job market demands.
          </p>
          <p className="text-lg leading-relaxed">
            The portal is designed to be exceptionally user-friendly, eliminating the need for expertise in college education or reliance on additional educational consultants. <strong>Aahzi</strong> serves as a comprehensive educational consultant.
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <Link
            to="/collegeSearch"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Get Started with Aahzi
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
