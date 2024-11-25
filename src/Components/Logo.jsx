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

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Trusted by leading companies
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="col-span-1 flex justify-center items-center animate-float"
            >
              <img
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
