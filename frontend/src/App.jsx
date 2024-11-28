import React, { Suspense, lazy } from 'react';  // Import Suspense and lazy
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Components/Lazylaoding/Loading'; // Import the Loading component

// Lazily load components using React.lazy()
const Hero = lazy(() => import('./Components/Hero'));
const Features = lazy(() => import('./Components/Features'));
const Blog = lazy(() => import('./Components/Blog'));
const Logo = lazy(() => import('./Components/logo'));
const Newsletter = lazy(() => import('./Components/Newsletter'));
const About = lazy(() => import('./pages/About'));
const Service = lazy(() => import('./pages/Service'));
const Contact = lazy(() => import('./pages/Contact'));
const Client = lazy(() => import('./pages/Clients'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AudioVideo = lazy(() => import('./pages/AudioVideo'));
const Unv = lazy(() => import('./pages/Unv'));
const Hikvision = lazy(() => import('./pages/hikvision'));
const Dahua = lazy(() => import('./pages/Dahua'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));  // Lazy load NotFound component

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="h-screen w-full bg-gradient-to-b from-blue-900 to-blue-700">
          <NavBar />
          <Suspense fallback={<Loading />}> {/* Suspense to show loading state */}
            <Routes>
              {/* Home Page */}
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <Features />
                    <Blog />
                    <Logo />
                    <Newsletter />
                  </>
                } 
              />
              {/* About Page */}
              <Route path="/About" element={<About />} />
              {/* Service Page */}
              <Route path="/Service" element={<Service />} />
              {/* Contact Page */}
              <Route path="/Contact" element={<Contact />} />
              {/* Client Page */}
              <Route path="/Client" element={<Client />} />
              {/* AudioVideo Page */}
              <Route path="/AudioVideo" element={<AudioVideo />} /> 
              {/* Hikvision Page */}
              <Route path="/Hikvision" element={<Hikvision />} />
              {/* Dahua Page */}
              <Route path="/Dahua" element={<Dahua />} />
              {/* Unv Page */}
              <Route path="/Unv" element={<Unv />} />
              {/* Privacy Page */}
              <Route path="/Privacy" element={<Privacy />} />
              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<NotFound />} /> {/* This will display the NotFound component */}
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
