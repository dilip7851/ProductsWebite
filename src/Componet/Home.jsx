import React from 'react'
import { FaRocket, FaMobileAlt, FaCog } from 'react-icons/fa'; 
function Home() {
  return (
    <>
    {/* Hero Section */}
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">Welcome to Our Website</h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            A beautiful and simple website template built with Tailwind CSS
          </p>
          <div className="mt-5 sm:mt-8">
            <button className="rounded-md bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">Get Started</button>
          </div>
        </div>
      </div>
    </div>

    {/* Features Grid */}
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaRocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Fast Performance</h3>
            <p className="mt-2 text-gray-500">Lightning fast performance out of the box. No configuration needed.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaMobileAlt className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Responsive Design</h3>
            <p className="mt-2 text-gray-500">Fully responsive design that looks great on any device.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaCog className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Easy Customization</h3>
            <p className="mt-2 text-gray-500">Easily customize the design to match your brand.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Everything you need</h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="mt-8">
              <button className="text-blue-600 font-medium hover:text-blue-500">Learn more →</button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-200 rounded-lg h-96">
              <img src="https://picsum.photos/seed/picsum/200/300" className='w-full h-full' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home





