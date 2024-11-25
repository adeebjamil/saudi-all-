import React from 'react';
import TieUp from '../Components/TieUp/TieUp'; // Import the TieUp component
import { Helmet } from 'react-helmet-async'; // For SEO enhancements

const Features = () => {
  return (
    <>
      {/* Adding Helmet for SEO optimization */}
      <Helmet>
        <title>Features | Your Website Name</title>
        <meta
          name="description"
          content="Explore the key features and tie-ups that make our platform unique and innovative."
        />
        <meta name="keywords" content="features, tie-ups, partnerships, innovation" />
      </Helmet>
      <TieUp /> {/* Use the TieUp component here */}
    </>
  );
};

export default Features;
