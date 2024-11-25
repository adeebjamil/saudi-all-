import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { FiCheck, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AnimatedCounter = memo(({ value, suffix = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(value), {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <span className="ml-1">{suffix}</span>
    </div>
  );
});

const ProcessStep = memo(({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl mb-6">{step.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600">
          {step.description}
        </p>
      </div>

      {/* Connector Line (except for last item) */}
      {index < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-blue-200 transform -translate-y-1/2" />
      )}
    </motion.div>
  );
});

const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating modern, responsive websites and web applications',
    icon: '💻',
    features: ['Custom Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning']
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    icon: '📱',
    features: ['iOS Development', 'Android Apps', 'React Native', 'App Store Optimization']
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure',
    icon: '☁️',
    features: ['AWS/Azure', 'Cloud Migration', 'DevOps', 'Security']
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies',
    icon: '🎯',
    features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics']
  }
];

const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business needs and goals to create the perfect solution.",
    icon: "🔍"
  },
  {
    title: "Strategy",
    description: "Developing a comprehensive roadmap to achieve your digital transformation objectives.",
    icon: "📋"
  },
  {
    title: "Development",
    description: "Building your solution using cutting-edge technology and best practices.",
    icon: "⚙️"
  },
  {
    title: "Launch",
    description: "Deploying your solution and ensuring everything runs perfectly.",
    icon: "🚀"
  }
];

const STATS = [
  { number: "500", label: "Projects Completed", icon: <FiAward />, suffix: "+" },
  { number: "100", label: "Happy Clients", icon: <FiUsers />, suffix: "+" },
  { number: "10", label: "Years Experience", icon: <FiClock />, suffix: "+" },
  { number: "24", label: "Support Available", icon: <FiCheck />, suffix: "/7" }
];

const TECHNOLOGIES = ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"];

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but typically range from 4-12 weeks."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing options including fixed-price and time-and-materials."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various maintenance and support packages after project completion."
  }
];

const ServiceCard = memo(({ service, index }) => (
  <motion.article
    key={service.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.3 } 
    }}
    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <motion.div 
      className="text-4xl mb-4"
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, 0],
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        duration: 0.6 
      }}
    >
      {service.icon}
    </motion.div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {service.title}
    </h3>
    <p className="text-gray-600 mb-6">
      {service.description}
    </p>
    <ul className="space-y-2">
      {service.features.map((feature, idx) => (
        <motion.li 
          key={idx} 
          className="flex items-center text-gray-600"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + (idx * 0.1) }}
        >
          <FiCheck className="text-blue-600 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.article>
));

const FAQItem = memo(({ faq, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.9)" 
    }}
    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
  >
    <h3 
      className="text-lg font-semibold text-gray-900 mb-2"
      itemProp="name"
    >
      {faq.question}
    </h3>
    <div
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <p className="text-gray-600" itemProp="text">
        {faq.answer}
      </p>
    </div>
  </motion.div>
));

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.3) 100%),
    url('src/assets/img/audiovideo.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0;
  padding-left: 5%;
  
  @media (max-width: 1200px) {
    padding-left: 6%;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    text-align: center;
  }
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Service = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Professional Digital Services - Web, Mobile & Cloud Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
        <meta name="keywords" content="web development, mobile apps, cloud solutions, digital marketing, SEO, React, Node.js" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Professional Digital Services - Web, Mobile & Cloud Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Digital Services - Web, Mobile & Cloud Solutions" />
        <meta name="twitter:description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
      </Helmet>

      <div className="relative min-h-[120vh] bg-cover bg-center bg-fixed overflow-hidden"
           style={{
             backgroundImage: `linear-gradient(165deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.4) 100%), url('src/assets/img/audiovideo.jpg')`
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10 pt-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-400 mr-2">★</span>
                  <span className="text-white/90 text-sm font-medium">Trusted by Fortune 500 Companies</span>
                </motion.div>

                {/* Headlines */}
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Elevate Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Digital Presence
                  </span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-white/80 max-w-xl leading-relaxed">
                  Transform your business with cutting-edge technology solutions designed for the modern digital landscape.
                </h2>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center group cursor-pointer"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-12">
                  {[
                    { number: "500+", label: "Projects Completed" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Expert Support" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="text-center"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-2 gap-4 relative">
                {[
                  { icon: "⚡", title: "Lightning Fast", desc: "Optimized Performance" },
                  { icon: "🛡️", title: "Enterprise Security", desc: "Bank-Grade Protection" },
                  { icon: "🔄", title: "Scalable Solutions", desc: "Grow with Confidence" },
                  { icon: "💡", title: "Innovation First", desc: "Cutting-edge Tech" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/60 flex flex-col items-center gap-2 cursor-pointer hover:text-white/80 transition-colors"
          >
            <span className="text-sm font-medium">Explore More</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section - Enhanced with semantic HTML */}
      <section aria-label="Our Services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Add semantic HTML */}
      <section aria-label="Company Statistics" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  className="text-blue-600 text-2xl mb-4 mx-auto"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Add semantic HTML */}
      <section aria-label="Our Work Process" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Add semantic HTML */}
      <section aria-label="Technologies" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-gray-600">Latest tools and frameworks for optimal results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {TECHNOLOGIES.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow text-center"
              >
                <span className="text-gray-900 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Add semantic HTML and schema markup */}
      <section aria-label="Frequently Asked Questions" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* Add schema.org markup for FAQs */}
          <div 
            className="space-y-6"
            itemScope 
            itemType="https://schema.org/FAQPage"
          >
            {FAQS.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Add semantic HTML */}
      <section aria-label="Call to Action" className="bg-gradient-to-r from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Business?
          </h2>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
};

const MemoizedService = memo(Service);

const ServiceWithMeta = memo(() => (
  <>
    <Helmet>
      <title>Professional Digital Services - Web, Mobile & Cloud Solutions</title>
      <meta name="description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
      <meta name="keywords" content="web development, mobile apps, cloud solutions, digital marketing, SEO, React, Node.js" />
      <link rel="canonical" href="https://yourwebsite.com/services" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Professional Digital Services - Web, Mobile & Cloud Solutions" />
      <meta property="og:description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourwebsite.com/services" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professional Digital Services - Web, Mobile & Cloud Solutions" />
      <meta name="twitter:description" content="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services." />
    </Helmet>
    <MemoizedService />
  </>
));

export default ServiceWithMeta;
