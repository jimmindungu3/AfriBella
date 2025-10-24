import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-accent">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <HeroSection />
        <FeaturedProducts />
        <Footer />
        <CartPage isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
