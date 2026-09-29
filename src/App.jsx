import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedSchools from "./components/FeaturedSchools";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import PopularCities from "./components/PopularCities";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Schools from "./pages/Schools";
import SchoolDetails from "./pages/SchoolDetails";
import Compare from "./pages/Compare";

function Home() {
  return (
    <>
      <Hero />
       <br />
      <br />
      <Categories />
       <br />
      <br />
      <FeaturedSchools />
       <br />
      <br />
      <WhyChooseUs />
       <br />
      <br />
      <HowItWorks />
      <br />
      <br />
      <PopularCities />
       <br />
      <br />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/:id" element={<SchoolDetails />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;