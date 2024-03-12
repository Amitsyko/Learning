import React from 'react';
import InnerHero from './InnerHero';


export default function Hero() {
  const bannerStyle = {
    backgroundImage: 'url("/img/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '550px', // Set the desired height
    // Add more styles as needed
  };

  return (
    <div>
      <div className='heroBanner' style={bannerStyle}>
        
          <InnerHero/>
       
      </div>
    </div>
  );
}


