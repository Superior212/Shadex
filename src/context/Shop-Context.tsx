import  { createContext, useState } from "react";
import { products } from "@/lib/data";
import { ShopContextType } from "@/types";

interface ShopContextValue {
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  resetCart: () => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number | undefined;
  getTotalItems: () => number;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

const getDefaultCart = () => {
  const cart: { [key: number]: number } = {};
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props: { children: JSX.Element }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [shippingMode, setShippingMode] = useState("standard");

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ShopContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    resetCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalItems,
    shippingMode,
    setShippingMode,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
