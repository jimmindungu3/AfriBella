import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Rose Gold Hoop Earrings",
      description: "Elegant hoops with rose gold finish",
      price: "KES 24.00",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
      category: "Jewelry",
    },
    {
      id: 2,
      name: "Complete Makeup Kit",
      description: "All-in-one beauty essentials set",
      price: "KES 45.00",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500",
      category: "Makeup",
    },
    {
      id: 3,
      name: "Stackable Bangles Set",
      description: "Set of 3 rose gold bangles",
      price: "KES 18.00",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
      category: "Jewelry",
    },
    {
      id: 4,
      name: "Pink Gem Necklace",
      description: "Delicate gold chain with pink gemstone pendant",
      price: "KES 35.00",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      category: "Jewelry",
    },
    {
      id: 5,
      name: "Floral Crystal Hairband",
      description: "Elegant accessory for special occasions",
      price: "KES 28.00",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Rose Gold Pink Ring",
      description: "Perfect finishing touch to your look",
      price: "KES 22.00",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
      category: "Jewelry",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-600">
            Featured Collection
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Discover our handpicked jewelry, makeup, and accessories
          </p>
        </div>

        {/* Product Grid - Modified for 2 columns */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white shadow-md rounded-xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image - Adjusted height */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-40 sm:h-52 transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute px-2 py-0.5 text-[10px] sm:text-xs font-medium text-gray-700 bg-green-100 rounded-full top-2 right-2">
                  {product.category}
                </span>
              </div>

              {/* Product Details - Adjusted padding and text sizes */}
              <div className="p-3 sm:p-4">
                <h3 className="mb-1 text-sm sm:text-lg font-semibold text-gray-900 line-clamp-1">
                  {product.name}
                </h3>
                <p className="mb-2 text-gray-600 text-xs sm:text-sm line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-col gap-2">
                  <span className="text-base sm:text-lg font-bold text-pink-600">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center gap-1 px-3 py-1.5 font-medium text-white bg-pink-600 rounded-lg transition-all duration-300 hover:bg-pink-700 text-xs sm:text-sm w-full"
                  >
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
