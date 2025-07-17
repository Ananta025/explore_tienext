import React from 'react';

const SearchSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold text-teal-600 mb-12">
        The Convenience Social Network
      </h2>

      {/* Content Box */}
      <div className="bg-teal-400 rounded-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="text-white max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Fulfill Every Need in <br /> One Click
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Today we have a lot of social networks but do they actually provide a reliable networking solution? If I want to find 5 photographers in my locality, can I? No I can't. Because most of these platforms are focused on delivering content which wastes your life but not connections which makes your life.
            <br /><br />
            Tienext is a social network with personalized tools & features to help ambitious ones to find the best for themselves. A solution for better & faster networking. Basically Tienext allows you to search "Photographers in NYC" or "SDEs in Mumbai" or "Doctors in Delhi" with accurate results & sleek profiles to directly jump into.
            <br /><br />
            Tienext is the go to platform for not getting semi-nude videos but for getting opportunities which gets you to your goals.
          </p>
        </div>

        {/* Right Section: Static PNG Image */}
        <div className="w-full max-w-sm">
          <img
            src="/img1.png" // ⬅️ Replace with your actual image path
            alt="Search UI Mockup"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
