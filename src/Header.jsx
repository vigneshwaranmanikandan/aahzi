import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Aahzi</h1>
        <nav>
          {/* Updated navigation links */}
          <Link to="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link to="/collegeSearch" className="px-4 hover:underline">
            Find College/Course
          </Link>
          <Link to="/about" className="px-4 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
