import React from 'react';

const MomentsSection: React.FC = () => {
  return (
    <section className="bg-white w-full">
      {/* Logo */}
      <div className="text-center py-6">
        <img
          src="/tiemoment.png" // your logo PNG
          alt="Tienext Moments Logo"
          className="mx-auto h-14 md:h-16"
        />
      </div>

      {/* Main Content */}
      <div className="bg-[#8B1A1A] px-6 md:px-16 py-10">
        {/* Quote box */}
        <div className="bg-white rounded-lg px-6 py-8 max-w-5xl mx-auto">
          <p className="text-black text-xl md:text-2xl font-bold text-left mb-4">
            Don’t let the camera disturb your special moments.
          </p>
          <p className="text-[#A71919] text-xl md:text-2xl font-bold text-center leading-snug">
            Instead share at Tienext moments, <br />
            expressing the same.
          </p>
        </div>

        {/* Card + Icons Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-10 max-w-6xl mx-auto">
          {/* Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src="/img3.png"
              alt="Moment Reaction Card"
              className="rounded-xl shadow-md w-[90%] max-w-sm"
            />
          </div>

          {/* Emoji Grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 w-full md:w-1/2 justify-items-center">
            <img src="/one.png" alt="+1" className="w-10 h-10" />
            <img src="/love.png" alt="Love" className="w-10 h-10" />
            <img src="/like.png" alt="Like" className="w-10 h-10" />
            <img src="/hand.png" alt="Clap" className="w-10 h-10" />
            <img src="/question.png" alt="Question" className="w-10 h-10" />
            <img src="/star.png" alt="Star" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
