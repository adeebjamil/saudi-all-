import React, { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Extract menu items outside component to prevent recreating on each render
const MENU_ITEMS = [
  { title: 'Home', href: '/' },
  { title: 'Audio & Video', href: '/audiovideo' },
  { title: 'Service', href: '/service' },
  { title: 'Clients', href: '/Client' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

// Extract reusable components
const MenuItem = memo(({ item, activePage, handleNavigation }) => {
  return (
    <div key={item.title} className="relative group">
      <Link
        to={item.href}
        onClick={() => handleNavigation(item.href)}
        className={`px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-all duration-200 ${
          activePage === item.href
            ? 'bg-blue-100 text-blue-900 font-bold'
            : 'text-blue-700 hover:text-blue-900 hover:bg-blue-100'
        }`}
      >
        {item.title}
        {item.submenu && (
          <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
        )}
      </Link>
      {item.submenu && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
          <div className="py-2">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem}
                to="#"
                className="block px-5 py-3 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-150"
              >
                {subItem}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

// NavBar Component
const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);

  // Dropdown solutions menu items
  const solutions = [
    "Meeting Room Solutions",
    "Smart Classroom Solutions",
    "BGM Solutions",
    "PA and VA Systems",
    "Home Cinema",
    "Command & Control Center Solutions",
    "LED & Video Wall Solutions",
    "Crisis Management Solutions"
  ];

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = useCallback((href) => {
    setActivePage(href);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Navigation | Your Company Name</title>
        <meta name="description" content="Navigate through our website to explore various sections and services we offer including audio-video solutions, services, client projects and more." />
        <meta name="keywords" content="navigation, menu, services, audio video solutions, smart classroom, meeting room solutions" />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Navigation | Your Company Name" />
        <meta property="og:description" content="Explore our comprehensive range of solutions and services" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://yourwebsite.com/#organization",
                "name": "Your Company Name",
                "url": "https://yourwebsite.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.webp"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://yourwebsite.com/#website",
                "url": "https://yourwebsite.com",
                "name": "Your Company Name",
                "publisher": {
                  "@id": "https://yourwebsite.com/#organization"
                }
              },
              {
                "@type": "SiteNavigationElement",
                "name": "Main Navigation",
                "hasPart": MENU_ITEMS.map(item => ({
                  "@type": "SiteNavigationElement",
                  "name": item.title,
                  "url": `https://yourwebsite.com${item.href}`
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": MENU_ITEMS.map((item, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@id": `https://yourwebsite.com${item.href}`,
                    "name": item.title
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg backdrop-blur-lg bg-blue-50/95'
          : 'bg-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <img 
                src="src/assets/img/logo/logo.webp" 
                alt="Company Logo"
                className="w-22 h-20 object-contain"
                loading="lazy"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.title} item={item} activePage={activePage} handleNavigation={handleNavigation} />
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 relative">
              <div className="relative group">
                <button
                  className="p-2.5 rounded-full text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-all duration-200"
                >
                  <ChevronDown size={20} />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        to="#"
                        className="block px-5 py-3 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-150"
                      >
                        {solution}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-all duration-200 lg:hidden"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-blue-50 border-t border-blue-100">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
              {MENU_ITEMS.map((item) => (
                <div key={item.title} className="py-1">
                  <Link
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                      activePage === item.href
                        ? 'bg-blue-100 text-blue-900 font-bold'
                        : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.submenu && (
                      <ChevronDown size={16} className={`transition-transform duration-200 ${
                        activePage === item.href ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 border-l-2 border-blue-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          to="#"
                          className="block px-4 py-3 text-sm text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-xl transition-colors duration-150"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </HelmetProvider>
  );
};

// Utility function for debounce
function debounce(func, wait) {
  let timeout;
  const debouncedFn = function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
  debouncedFn.cancel = () => clearTimeout(timeout);
  return debouncedFn;
}

export default memo(NavBar);
