import React from 'react';

const RequirementsSection: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
        <div className="text-left text-3xl md:text-5xl font-bold text-teal-500 leading-tight">
          <p>Personal.</p>
          <p>Professional.</p>
          <p>Daily.</p>
        </div>
        <div className="text-right text-2xl md:text-4xl font-bold text-black mt-6 md:mt-0">
          <p>No matter the need,</p>
          <p>we got you covered.</p>
        </div>
      </div>

      {/* Main Gradient Content */}
      <div className="bg-gradient-to-br from-[#6d1d1d] via-[#7b2a2a] to-teal-500 py-10 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Section */}
        <div className="text-white max-w-xl">
          <img
            src="/tier.png"
            alt="Tienext Requirements"
            className="mb-4"
          />

          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            New place? No pals?
          </h3>
          <p className="text-xl font-bold text-red-200 mb-4">
            Get your required stuff at <br /> Tienext Requirements
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Post a Requirement, select the profession you need, enter a location where you
            need it, mention a bit details about the Requirement and get people coming to
            you. Takes a minute makes a day.
          </p>
        </div>

        {/* Right Side: Card Image + Tagline below */}
        <div className="flex flex-col items-center gap-4 ">
          <img
            src="/img2.png"
            alt="Requirement Card"
            className="w-full max-w-sm rounded-lg shadow-xl"
          />

          {/* Tagline directly under card */}
          <p className="text-white text-sm md:text-base font-medium">
            Takes a minute, makes a day
          </p>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
