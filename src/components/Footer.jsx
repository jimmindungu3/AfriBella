const Footer = () => {
  return (
    <footer className="border-t border-primary-light/30 font-body">
      <div className="px-6 py-12 mx-auto text-center max-w-7xl">
        {/* Brand Name */}
        <h2 className="mb-3 text-3xl italic tracking-wide font-heading text-primary-dark">
          AfriBella
        </h2>

        {/* Tagline */}
        <p className="mb-6 text-sm text-text-dark md:text-base">
          Discover elegance in every shade — your destination for handcrafted
          jewelry, makeup, and accessories.
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AfriBella. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
