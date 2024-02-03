// SplashText.js

import React from 'react';
import { Link } from 'react-router-dom';

const SplashText = () => {
  return (
    <div className='flex flex-col justify-center items-start px-24 h-screen'>
      <h1 className='text-6xl font-bold mb-6'>Welcome to MUTAGEN</h1>
      <p className='text-lg text-gray-300 mb-8'>
        Explore a new world of possibilities.
      </p>
      <Link className='bg-amber-50 hover:bg-amber-100 text-black font-bold py-2 px-4 rounded' to='/rules'>
        Learn the Basics
      </Link>
    </div>
  );
};

export default SplashText;
