import React from "react";
import { useCart } from "../context/CartContext";
import { X, Send } from "lucide-react";

const CartPage = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  const sendToWhatsApp = () => {
    const phoneNumber = "254717055495";
    let message = "Hello! I would like to order:\n\n";

    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${item.price}\n`;
    });

    message += `\nTotal: KES ${getCartTotal().toFixed(2)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
      <div className="w-full h-full max-w-md p-6 overflow-y-auto bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="py-8 text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-24 h-24 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-pink-600">
                  KES {getCartTotal().toFixed(2)}
                </span>
              </div>

              <button
                onClick={sendToWhatsApp}
                className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
              >
                <Send size={20} />
                Order via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
