import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto bg-white shadow-md rounded-lg mt-8">
        <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">
          About Aahzi
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Aahzi</strong> is an innovative educational consultancy dedicated to helping students achieve their academic and career aspirations. We specialize in guiding students through the complex process of selecting the right courses, colleges, and universities that align with their interests and career goals.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to provide personalized recommendations based on current technology trends, job market demands, and student preferences. With a team of experienced educators and industry professionals, Aahzi ensures students make informed decisions about their futures.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We understand that navigating the world of higher education can be overwhelming. That’s why our platform is designed to be user-friendly, accessible, and reliable. Whether you are looking for information about courses, colleges, or study locations, <strong>Aahzi</strong> is here to simplify your journey.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our ultimate goal is to empower students to unlock their potential and excel in their chosen fields. Join us on this journey to success!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
