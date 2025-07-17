import React from 'react';

// Button Component
const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200
        w-[280px] md:w-[340px] h-[50px] md:h-[55px] rounded-[14px]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
