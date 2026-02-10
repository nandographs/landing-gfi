import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-12 w-auto object-contain scale-[1.3]"
        />
      </div>
    </footer>
  );
};

export default Footer;