import { create } from "zustand";
import { persist } from "zustand/middleware";

// Product type (basic info about a product)
export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// CartItem is a Product + quantity
type CartItem = Product & { quantity: number };

// Cart state type (what is inside our store)
type CartState = {
  cart: CartItem[];                // list of items in cart
  addToCart: (product: Product) => void; // add product to cart
  increase: (id: number) => void;        // increase quantity
  decrease: (id: number) => void;        // decrease quantity
  clearCart: () => void;                 // remove all items
  totalPrice: () => number;              // calculate total price
};

// Create a Zustand store with persist (saves data in localStorage)
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [], // start with empty cart

      // Add product to cart
      addToCart: (product) =>
        set((state) => {
          const exist = state.cart.find((item) => item.id === product.id);
          if (exist) {
            // If product already exists → increase quantity
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          // If product is new → add with quantity 1
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      // Increase quantity by id
      increase: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      // Decrease quantity by id (remove if quantity is 0)
      decrease: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),

      // Clear all items from cart
      clearCart: () => set({ cart: [] }),

      // Get total price of cart
      totalPrice: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "cart-storage" } // key name in localStorage
  )
);
