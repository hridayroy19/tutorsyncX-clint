import Image from 'next/image';
import React from 'react';

const TutorsFindBanner = () => {
    return (
        <div>
                <section className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-8 rounded-2xl shadow-lg">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-blue-900">Find the Best Tutors for Your Needs</h1>
        <p className="mt-4 text-lg text-gray-700">
          Browse experienced tutors, filter by subject & rating, and book your session in just a few clicks!
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Find Tutors
        </button>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image 
          src="https://i.ibb.co.com/8DKxgM71/1815078.webp" 
          alt="Find Tutors" 
          width={400} 
          height={300} 
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
        </div>
    );
};

export default TutorsFindBanner;