import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Item = {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  qty: number;
};

type CartContextType = {
  items: Item[];
  setItemQty: (id: number, qty: number) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useLocalStorage<Item[]>("shopping-cart", []);

  function setItemQty(id: number, qty: number) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  }

  function addToCart(itemToAdd: Item) {
    setItems((prev) => {
      if (prev.find((item) => item.id === itemToAdd.id)) {
        return prev.map((item) => (item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item));
      }

      return [...prev, itemToAdd];
    });
  }

  function removeFromCart(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, setItemQty, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};