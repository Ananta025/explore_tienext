import React from 'react';
import Button from '../components/Button';

const LoginPrompt: React.FC = () => {
  const handleLogin = () => {
    // Navigate to login page or trigger modal
    console.log('Redirecting to login...');
  };

  return (
    <section className="bg-teal-400 text-center py-16 px-4">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
        You seem interested!
      </h2>
      <p className="text-white text-lg md:text-xl mb-8">
        Why don’t you log in to Tienext
      </p>
      <Button onClick={handleLogin}>
        Log in to Tienext
      </Button>
    </section>
  );
};

export default LoginPrompt;
