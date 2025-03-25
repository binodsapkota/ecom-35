import React from 'react';
import { FaTachometerAlt, FaUser, FaCog, FaSignOutAlt, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Side Menu */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="py-2">
              <a href="#" className="flex items-center text-gray-300 hover:bg-indigo-600 hover:text-white rounded px-2 py-1 transition duration-200">
                <FaTachometerAlt className="mr-3" />
                Dashboard
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center text-gray-300 hover:bg-indigo-600 hover:text-white rounded px-2 py-1 transition duration-200">
                <FaUser className="mr-3" />
                Profile
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center text-gray-300 hover:bg-indigo-600 hover:text-white rounded px-2 py-1 transition duration-200">
                <FaCog className="mr-3" />
                Settings
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center text-gray-300 hover:bg-indigo-600 hover:text-white rounded px-2 py-1 transition duration-200">
                <FaSignOutAlt className="mr-3" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between h-16 bg-white shadow-md px-4">
          <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            {/* Notification Icon */}
            <button className="relative">
              <FaBell className="text-gray-600 hover:text-indigo-600 transition duration-200" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            {/* User Account Icon */}
            <button className="text-gray-600 hover:text-indigo-600 transition duration-200">
              <FaUserCircle className="text-2xl" />
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200">
              Sign In
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Home Page!</h2>
          <p className="text-gray-600">
            This is where your main content will go. You can add more sections, cards, or any other components to enhance the user experience.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <h3 className="font-semibold text-lg">Card Title 1</h3>
              <p className="text-gray-600">Some description about this card.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <h3 className="font-semibold text-lg">Card Title 2</h3>
              <p className="text-gray-600">Some description about this card.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <h3 className="font-semibold text-lg">Card Title 3</h3>
              <p className="text-gray-600">Some description about this card.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
