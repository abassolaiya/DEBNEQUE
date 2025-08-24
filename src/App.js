import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import ShopPage from "./pages/ShopPage";
import CustomDesignPage from "./pages/CustomDesignPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

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
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/custom-design" element={<CustomDesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
