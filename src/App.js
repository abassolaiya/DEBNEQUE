import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";

const Home = () => (
  <>
    <Helmet>
      <title>DEBNEQUE - Elegant Fashion Design</title>
      <meta
        name="description"
        content="Explore DEBNEQUE's ready-to-wear collections and custom fashion designs."
      />
    </Helmet>
    <Hero />
    <FeaturedProducts />
    <AboutSection />
    <Testimonials />
  </>
);

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<div>Shop Page (TBD)</div>} />
          <Route
            path="/custom-design"
            element={<div>Custom Design Page (TBD)</div>}
          />
          <Route path="/about" element={<div>About Page (TBD)</div>} />
          <Route path="/contact" element={<div>Contact Page (TBD)</div>} />
          <Route path="/cart" element={<div>Cart Page (TBD)</div>} />
          <Route path="/profile" element={<div>Profile Page (TBD)</div>} />
          <Route
            path="/product/:id"
            element={<div>Product Detail Page (TBD)</div>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
