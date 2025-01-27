import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import AdvertisingSection from './components/AdvertisingSection';
import PopularDishes from './components/PopularDishes';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AdvertisingSection />
      <PopularDishes />
      <CategorySection />
      <ReviewsSection />
      <Footer />
    </>
  )
}


export default App;