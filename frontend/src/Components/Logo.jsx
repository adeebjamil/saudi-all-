import React from 'react';
import { Helmet } from 'react-helmet-async';

const Logo = () => {
  const logos = [
    { id: 1, src: 'src/assets/img/logo/Barco.jpg', alt: 'Company 1' },
    { id: 2, src: 'src/assets/img/logo/bose.webp', alt: 'Company 2' },
    { id: 3, src: 'src/assets/img/logo/CTC.jpg', alt: 'Company 3' },
    { id: 4, src: 'src/assets/img/dahua/dahua.webp', alt: 'Company 4' },
    { id: 5, src: 'src/assets/img/logo/Epson.webp', alt: 'Company 5' },
    { id: 6, src: 'src/assets/img/logo/furman.jpg', alt: 'Company 6' },
    { id: 7, src: 'src/assets/img/logo/link.webp', alt: 'Company 7' },
    { id: 8, src: 'src/assets/img/logo/logo.webp', alt: 'Company 8' },
    { id: 9, src: 'src/assets/img/logo/logoneutrik.webp', alt: 'Company 9' },
    { id: 10, src: 'src/assets/img/logo/Megvii_logo.webp', alt: 'Company 10' },
    { id: 11, src: 'src/assets/img/logo/qsc.webp', alt: 'Company 11' },
    { id: 12, src: 'src/assets/img/logo/Poland.webp', alt: 'Company 12' },
    { id: 13, src: 'src/assets/img/logo/Ruijie.webp', alt: 'Company 13' },
    { id: 14, src: 'src/assets/img/logo/seagate-logo-text', alt: 'Company 14' },
    { id: 15, src: 'src/assets/img/logo/Shuru Logo.webp', alt: 'Company 15' },
    { id: 16, src: 'src/assets/img/logo/unv.webp', alt: 'Company 16' },
    { id: 17, src: 'src/assets/img/logo/westerndigital.webp', alt: 'Company 17' },
  ];
  
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <Helmet>
        <title>Our Partners - Leading Technology Companies</title>
        <meta name="description" content="Trusted by leading companies in technology, security and audio-visual solutions. Partners include Barco, Bose, Dahua, Epson and more." />
        <meta name="keywords" content="technology partners, security solutions, audio visual partners" />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Technology Partners" />
        <meta property="og:description" content="Partnering with world-leading technology companies" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "url": "https://www.yourcompany.com",
            "partner": logos.map(logo => ({
              "@type": "Organization",
              "name": logo.alt,
              "image": logo.src
            })),
            "brand": logos.map(logo => ({
              "@type": "Brand",
              "name": logo.alt,
              "logo": logo.src
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Trusted by leading companies
          </h2>
          <div className="overflow-hidden">
            <div 
              className="flex will-change-transform" 
              style={{
                animation: 'carousel 20s cubic-bezier(0.4, 0.0, 0.2, 1) infinite'
              }}
            >
              {duplicatedLogos.map((logo) => (
                <div
                  key={`${logo.id}-${Math.random()}`}
                  className="flex-shrink-0 w-[150px] mx-4"
                >
                  <div className="bg-white p-4 rounded-xl h-24 flex items-center justify-center">
                    <img
                      className="h-16 w-auto object-contain"
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes carousel {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default Logo;
