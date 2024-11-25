import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Search Overlay Component
const SearchOverlay = memo(({ searchOpen, searchQuery, setSearchQuery, handleSearch, onClose }) => {
  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300">
      <div className="absolute inset-x-0 top-0 bg-white p-4 shadow-xl">
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to search..."
            className="w-full pl-12 pr-12 py-3.5 bg-white/50 rounded-full border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base transition-all duration-200"
            autoFocus
          />
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
          >
            <X size={20} />
          </button>
        </form>
      </div>
    </div>
  );
});

// NavBar Component
const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const menuItems = useMemo(() => [
    { title: 'Home', href: '/' },
    { title: 'Audio & Video', href: '/audiovideo' },
    { title: 'Service', href: '/service' },
 

    {
      title: 'Clients',
      href: '/Client',
    },

    
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },


  ], []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  }, [searchQuery]);

  const handleNavigation = useCallback((href) => {
    setActivePage(href);
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg backdrop-blur-lg bg-white/95'
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-xl shadow-lg">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LOGO</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`px-5 py-2.5 rounded-full flex items-center text-sm font-medium transition-all duration-200 ${
                      activePage === item.href
                        ? 'bg-gray-100 text-gray-900 font-bold'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
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
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 lg:hidden"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
              {menuItems.map((item) => (
                <div key={item.title} className="py-1">
                  <Link
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                      activePage === item.href
                        ? 'bg-gray-100 text-gray-900 font-bold'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
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
                    <div className="ml-4 mt-1 border-l-2 border-gray-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          to="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-xl transition-colors duration-150"
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

      {/* Search Overlay */}
      <SearchOverlay
        searchOpen={searchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};

export default memo(NavBar);