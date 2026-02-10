import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href: string }[] = [];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain scale-[1.3] origin-left my-2"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596"
              className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2"
            >
              Seja Sócio
              <Rocket size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://app.portalgfi.com/auth/register?sponsorAccountNo=0550000062596"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-white text-black px-4 py-3 rounded-lg font-bold"
            >
              Quero ser Sócio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;