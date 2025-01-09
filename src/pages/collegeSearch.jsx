import React, { useState } from 'react';

const CollegeSearch = () => {
  const [cutOffRank, setCutOffRank] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [collegeType, setCollegeType] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [community, setCommunity] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');

  const cities = ['Salem', 'Chennai', 'Coimbatore', 'Madurai'];
  const courses = ['Computer Science', 'Electrical', 'Mechanical', 'Civil'];
  const collegeTypes = ['Management', 'Government'];
  const affiliations = ['Anna-University', 'Autonomous'];
  const communities = ['General', 'OBC', 'SC', 'ST'];
  const colleges = ['College A', 'College B', 'College C'];

  const handleSearch = () => {
    console.log({
      cutOffRank,
      city,
      course,
      collegeType,
      affiliation,
      community,
      selectedCollege,
    });
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-indigo-50 via-white to-indigo-50 shadow-md rounded-lg">
      <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-8">
        Find Your Dream College
      </h2>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Cutoff Rank */}
        <div>
          <label htmlFor="cutOffRank" className="block text-sm font-semibold text-gray-700">
            Engineering Cutoff/Rank
          </label>
          <input
            id="cutOffRank"
            type="number"
            value={cutOffRank}
            onChange={(e) => setCutOffRank(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter cutoff or rank"
          />
        </div>

        {/* City Dropdown */}
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
            City
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Course Dropdown */}
        <div>
          <label htmlFor="course" className="block text-sm font-semibold text-gray-700">
            Course
          </label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* College Type Dropdown */}
        <div>
          <label htmlFor="collegeType" className="block text-sm font-semibold text-gray-700">
            Type of College
          </label>
          <select
            id="collegeType"
            value={collegeType}
            onChange={(e) => setCollegeType(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select College Type</option>
            {collegeTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Affiliation Dropdown */}
        <div>
          <label htmlFor="affiliation" className="block text-sm font-semibold text-gray-700">
            Affiliation
          </label>
          <select
            id="affiliation"
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Affiliation</option>
            {affiliations.map((aff, index) => (
              <option key={index} value={aff}>
                {aff}
              </option>
            ))}
          </select>
        </div>

        {/* Community Dropdown */}
        <div>
          <label htmlFor="community" className="block text-sm font-semibold text-gray-700">
            Community
          </label>
          <select
            id="community"
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Community</option>
            {communities.map((community, index) => (
              <option key={index} value={community}>
                {community}
              </option>
            ))}
          </select>
        </div>

        {/* College Dropdown */}
        <div>
          <label htmlFor="selectedCollege" className="block text-sm font-semibold text-gray-700">
            Select College
          </label>
          <select
            id="selectedCollege"
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select College</option>
            {colleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="text-center">
        <button
          onClick={handleSearch}
          className="py-3 px-6 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search College
        </button>
      </div>
    </div>
  );
};

export default CollegeSearch;
