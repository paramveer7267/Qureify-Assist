import { useState } from "react";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <HowItWorks />
      <Features />
      <Testimonials />
      <Contact />
      <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} /> */}
        {/* add more pages here */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
