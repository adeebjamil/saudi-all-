import React from 'react';

const Logo = () => {
  const logos = [
    { id: 1, src: '/path-to-logo1.png', alt: 'Company 1' },
    { id: 2, src: '/path-to-logo2.png', alt: 'Company 2' },
    { id: 3, src: '/path-to-logo3.png', alt: 'Company 3' },
    { id: 4, src: '/path-to-logo4.png', alt: 'Company 4' },
    { id: 5, src: '/path-to-logo5.png', alt: 'Company 5' },
    { id: 6, src: '/path-to-logo6.png', alt: 'Company 6' },
  ];
  
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Trusted by leading companies
        </h2>
        <div className="relative">
          <div className="flex animate-carousel">
            {duplicatedLogos.map((logo) => (
              <div
                key={`${logo.id}-${Math.random()}`}
                className="flex-shrink-0 w-[200px] mx-8"
              >
                <img
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
