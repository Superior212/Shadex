export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  isFavorite: boolean;
  color?: string;
  material?: string;
};

export type ShopContextType = {
  cartItems: { [key: number]: number };
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  resetCart: () => void;
  updateCartItemCount: (id: number, count: number) => void;
  getTotalCartAmount: () => number;
  getTotalItems: () => number;
  shippingMode: string;
  setShippingMode: (mode: string) => void;
};
