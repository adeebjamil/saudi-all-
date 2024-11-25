import React from 'react';

const Unv = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero/About Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Content */}
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Ideas
                <span className="block text-blue-600">Into Reality</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                We are a leading innovative company dedicated to providing cutting-edge solutions
                for our clients. With years of experience and a commitment to excellence,
                we continue to push boundaries and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <button className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="px-6 md:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 mt-8 md:mt-0">
              <div className="relative px-4 md:px-0">
                <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <img 
                  src="/path-to-your-image.jpg" 
                  alt="Company Overview" 
                  className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Hikvision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who is Hikvision
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hikvision is committed to serving various industries through its cutting-edge technologies 
                of machine perception, artificial intelligence, and big data, leading the future of AIoT. 
                Through comprehensive machine perception technologies, we aim to help people better connect 
                with the world around them. With a wealth of intelligent products, we strive to identify 
                and satisfy diverse demands by delivering intelligence at your fingertips.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Featuring an extensive and highly skilled R&D workforce, Hikvision manufactures a full suite 
                of comprehensive products and solutions for a broad range of vertical markets. In addition to 
                the security industry, Hikvision extends its reach to smart home tech, industrial automation, 
                and automotive electronics industries to achieve its long-term vision.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/path-to-hikvision-image.jpg" 
                alt="Hikvision Overview" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6 p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To explore innovative ways to better perceive and understand the world, 
                empower vision for decision-makers and practitioners, and work together 
                to enhance safety and advance sustainable development around the world.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6 p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                To lead the future of AIoT solutions through machine perception, artificial 
                intelligence, and big data, creating a safer and smarter world for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of innovative solutions designed to meet your needs
              and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={`/path-to-product${item}.jpg`}
                      alt={`Product ${item}`} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Product Name {item}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Experience the next level of innovation with our cutting-edge solution
                      that revolutionizes how you work.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        Learn More →
                      </button>
                      <span className="text-gray-500 text-sm">New Release</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Clients' },
              { number: '100+', label: 'Projects' },
              { number: '10+', label: 'Years' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unv;
