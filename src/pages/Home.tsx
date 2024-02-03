// Home.js

import React from 'react';
import SplashText from '../components/home/SplashText';
import splashImage from '../assets/images/splash.png';

const Home = () => {
  return (
    <div className='h-screen font-mono flex space-between' style={{ backgroundColor: '#233039' }}>
      <SplashText />
      <div className='flex flex-col justify-center h-screen max-w-1/2'>
        <img
          src={splashImage}
          alt='splash'
          className='max-w-3/4 h-3/4 object-cover'
        />
      </div>
    </div>
  );
};

export default Home;
