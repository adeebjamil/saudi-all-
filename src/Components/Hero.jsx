import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../Components/Button/button';

// Custom Hook: Count Animation
const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const nextCount = Math.min(end, (progress / duration) * end);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
};

const Hero = () => {
  // Move animation variants outside component to prevent recreation on each render
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Memoize complex components and handlers
  const StatItem = React.memo(({ stat, index }) => {
    const isPercentage = stat.number.includes('%');
    const isTime = stat.number.includes('/');
    const isPlus = stat.number.includes('+');
    
    const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
    const animatedValue = useCountAnimation(numericValue);
    
    const formatValue = () => {
      if (isTime) return '24/7';
      let value = Math.round(animatedValue);
      if (isPercentage) return `${value}%`;
      if (isPlus) return `${value}+`;
      return value;
    };

    return (
      <motion.li
        key={index}
        variants={scaleIn}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.08)",
          y: -8,
          background: "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.95))"
        }}
        className="text-center p-4 rounded-xl bg-white shadow-sm transition-all duration-300 border border-gray-100"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          {formatValue()}
        </motion.div>
        <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
      </motion.li>
    );
  });

  // Memoize stats data
  const stats = React.useMemo(() => [
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
    { number: "100+", label: "Countries" },
  ], []);

  // Use CSS transform instead of motion.div for simple animations
  const backgroundStyle = {
    transform: 'translate(-50%, -50%)',
    animation: 'float 6s ease-in-out infinite',
  };

  // Stagger children animation variant
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Add these new animation variants
  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Add new floating animation variant
  const float = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Add new shine animation variant
  const shine = {
    initial: { backgroundPosition: "-200%" },
    animate: {
      backgroundPosition: "200%",
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear"
      }
    }
  };

  return (
    <section
      aria-label="Hero Section"
      className="relative min-h-screen bg-white overflow-hidden py-8 sm:py-12"
    >
      {/* Updated Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Updated blob colors to be more subtle */}
        <div
          className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-gray-50 to-gray-100/80 rounded-full mix-blend-multiply filter blur-xl"
          style={backgroundStyle}
        />
        <div
          className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-gray-50/80 rounded-full mix-blend-multiply filter blur-xl"
          style={backgroundStyle}
        />
        <div
          className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gray-100/60 rounded-full mix-blend-multiply filter blur-xl"
          style={backgroundStyle}
        />
      </div>

      {/* Updated grid pattern to be more subtle */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 pb-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.article
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8"
          >

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
            >
              <motion.span
                variants={shine}
                initial="initial"
                animate="animate"
                className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Transform Your
              </motion.span>
              <br />
              <span className="text-gray-900 relative">
                Digital Future
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full h-2 bg-gray-100 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Enhanced Description with semantic markup */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0"
            >
              Discover our innovative solutions to take your business to the next level.
            </motion.p>

            {/* Call to Action */}
            <div className="flex justify-center lg:justify-start mt-8 gap-4">
              <Button href="/contact" variant="primary">Get Started</Button>
              <Button href="/services" variant="outline">Learn More</Button>
            </div>
          </motion.article>

          {/* Right Image Section */}
          <motion.div
            variants={slideIn}
            className="flex-1 hidden lg:block mt-12 lg:mt-0"
          >
            <img
              src="/assets/images/hero-image.png"
              alt="Transform Your Business"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
