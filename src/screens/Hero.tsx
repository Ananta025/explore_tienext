import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const handleStartNetworking = () => {
    console.log('Start Networking clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 to-teal-400 relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-12 h-12 flex items-center justify-center">
          <img src="/question.png" alt="" />
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
          <img src="/star.png" alt="" />
        </div>
        <div className="absolute top-7 right-16 bg-white rounded-xl shadow-lg" style={{ width: '65px', height: '65px', zIndex: 10 }}>
          <img src="/Tielogo.png" alt="Tie Logo" className="w-full h-full object-contain p-1" />
        </div>
        <div className="absolute top-36 right-24 w-12 h-12 flex items-center justify-center">
          <img src="/like.png" alt="" />
        </div>
        <div className="absolute top-64 left-12 w-12 h-12 flex items-center justify-center">
          <img src="/hand.png" alt="" />
        </div>
        <div className="absolute bottom-48 right-20 w-12 h-12 flex items-center justify-center">
          <img src="/love.png" alt="" />
        </div>
        <div className="absolute top-20 right-48 w-12 h-12 flex items-center justify-center">
          <img src="/one.png" alt="" />
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full px-4 text-center">
        {/* Logo Title */}
        <img
          src="/Tienext-Full-B.png"
          alt="Tienext Logo"
          className="w-[250px] md:w-[400px] mb-4"
        />

        {/* Subtitle */}
        <p className="text-white text-lg md:text-2xl font-medium mb-10">
          Convenience is Constant
        </p>

        {/* CTA Button */}
        <Button onClick={handleStartNetworking} className="text-lg">
          Start Networking
        </Button>
      </div>
    </div>
  );
};

export default Hero;
