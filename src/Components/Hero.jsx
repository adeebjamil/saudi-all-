import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../Components/Button/button';
import styled from 'styled-components';

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

// Add these styled components
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(165deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.4) 25%, rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

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
          background: "linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.98))"
        }}
        className="text-center p-4 rounded-xl bg-white shadow-sm transition-all duration-300 border border-sky-100"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-sky-800 to-blue-600 bg-clip-text text-transparent"
        >
          {formatValue()}
        </motion.div>
        <div className="text-sky-900 font-medium mt-1">{stat.label}</div>
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
    <HeroSection
      aria-label="Hero Section"
    >
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
                className="bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Transform Your
              </motion.span>
              <br />
              <span className="text-gray-900 relative">
                Digital Future
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full h-2 bg-sky-100 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Enhanced Description with semantic markup */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-sky-900 max-w-xl mx-auto lg:mx-0"
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
              src="src/assets/img/hero.jpg"
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
    </HeroSection>
  );
};

export default Hero;
