import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = ({ onCartClick }) => {
  const { getCartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-light/30 backdrop-blur-md font-body">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary"></div>
          <h1 className="text-2xl italic tracking-wide font-heading text-primary-dark">
            AfriBella
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 font-medium text-text-dark md:flex">
          <a href="#shop" className="transition-colors hover:text-primary-dark">
            Shop
          </a>
          <a
            href="#collections"
            className="transition-colors hover:text-primary-dark"
          >
            Collections
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-primary-dark"
          >
            About
          </a>
        </nav>

        {/* Cart */}
        <div className="relative">
          <button onClick={onCartClick} className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer text-text-dark" />
            <span className="absolute -top-2 -right-2 bg-primary text-text-light text-xs font-semibold px-1.5 rounded-full">
              {getCartCount()}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
