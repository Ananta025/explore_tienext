import React, { useState } from 'react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqs = [
    'Question #1',
    'Question #2',
    'Question #3',
  ];

  return (
    <section className="bg-white px-6 md:px-24 py-14 text-left">
      {/* Heading */}
      <h2 className="text-teal-500 text-2xl md:text-3xl font-extrabold mb-8">
        Questions that you might wanna ask!
      </h2>

      {/* Accordion */}
      <div className="space-y-4 max-w-2xl">
        {faqs.map((question, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg px-4 py-3 cursor-pointer flex justify-between items-center"
            onClick={() => toggle(idx)}
          >
            <span className="font-medium">{question}</span>
            <span className="text-lg font-bold">{openIndex === idx ? '−' : '+'}</span>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-20 flex flex-col items-center justify-center">
        {/* Logo */}
        <img
          src="/tielife.png" // your PNG logo here
          alt="Tienext Lifestyle"
          className="h-10 md:h-12 mb-4"
        />

        {/* Footer Links */}
        <div className="text-gray-500 text-sm space-x-6 text-center">
          <a href="#">Explore</a>
          <a href="#">Privacy Center</a>
          <a href="#">Tienext</a>
          <a href="#">Articles</a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
