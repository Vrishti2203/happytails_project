import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ADD ITEM
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🆕 CLEAR CART (THIS IS STEP 5)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart, // 👈 VERY IMPORTANT
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
