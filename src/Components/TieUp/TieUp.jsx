// TieUp.jsx
import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';

const TieUp = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const features = useMemo(
    () => [
      {
        id: 1,
        title: 'Premium Client',
        company: 'Tech Solutions Inc.',
        description:
          'Leading technology solutions provider with over 10 years of excellence in digital transformation.',
        image: 'src/assets/img/unv.png', // Replace with your image path
        stats: '500+ Projects Delivered',
        color: 'bg-sky-50',
        link: '/unv',
      },
      {
        id: 2,
        title: 'Enterprise Partner',
        company: 'Global Innovations Ltd.',
        description:
          'International consulting firm specializing in business strategy and innovation.',
        image: 'src/assets/img/hikevision.jpg', // Replace with your image path
        stats: '100+ Countries Served',
        color: 'bg-blue-50',
        link: '/hikvision',
      },
      {
        id: 3,
        title: 'Strategic Client',
        company: 'Future Dynamics',
        description:
          'Next-generation AI and machine learning solutions for enterprise businesses.',
        image: 'src/assets/img/dahua.png', // Replace with your image path
        stats: '50M+ Users Reached',
        color: 'bg-indigo-50',
        link: '/dahua',
      },
    ],
    []
  );

  const FeatureCard = memo(({ feature }) => (
    <motion.div
      key={feature.id}
      role="listitem"
      aria-label={`${feature.company} Feature Card`}
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      }}
      className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100"
    >
      <div
        className="relative h-48 mb-6 group flex items-center justify-center"
        role="img"
        aria-label={`${feature.company} Image`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute w-3/4 h-3/4 rounded-xl overflow-hidden"
        >
          <div
            className="w-full h-full rounded-xl bg-contain bg-no-repeat bg-center transform transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: `url(${feature.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>

      <motion.h3
        className="text-2xl font-bold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
      >
        {feature.title}
      </motion.h3>

      <motion.h4 className="text-xl font-semibold text-gray-700 mb-4">
        {feature.company}
      </motion.h4>

      <motion.p className="text-gray-600 mb-6 leading-relaxed">
        {feature.description}
      </motion.p>

      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gray-50 px-4 py-2 rounded-full font-medium text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {feature.stats}
        </motion.div>

        <motion.a
          href={feature.link}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gray-900 px-4 py-2 rounded-full font-medium text-sm text-white shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </motion.div>
  ));

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      aria-label="Featured Clients Section"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Our Featured Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 font-medium"
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </motion.div>

        <motion.div
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(TieUp);
