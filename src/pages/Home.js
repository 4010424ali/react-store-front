import React from 'react';

import Showcase from '../components/Showcase';
import Products from '../components/Products';
import Navbar from '../components/layout/Navbar';
import PhotoSection from '../components/PhotoSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Products />
      <PhotoSection />
      <Footer />
    </>
  );
};

export default Home;
