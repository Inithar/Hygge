import toast from "react-hot-toast";
import { ReactNode, createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { MAXIMUM_QUANTITY_OF_PRODUCTS_IN_CART } from "../constants/settings";

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
  shippingCost: number;
  productsTotal: number;
  discountTotal: number;
  cartTotal: number;
  isCartEmpty: boolean;
  setItemQty: (id: number, qty: number) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useLocalStorage<Item[]>("shopping-cart", []);

  const shippingCost = 8;

  const productsTotal = items.reduce(
    (acc, { currentPrice, oldPrice, qty }) => acc + (oldPrice ?? currentPrice) * qty,
    0
  );

  const discountTotal = items.reduce(
    (acc, { currentPrice, oldPrice, qty }) => acc + (oldPrice ? oldPrice - currentPrice : 0) * qty,
    0
  );

  const cartTotal = productsTotal - discountTotal + shippingCost;
  const isCartEmpty = items.length === 0;

  function setItemQty(id: number, qty: number) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  }

  function addToCart(itemToAdd: Item) {
    const errorMsg = `The maximum quantity of the same product in the cart is equal to ${MAXIMUM_QUANTITY_OF_PRODUCTS_IN_CART}`;
    const successMsg = "Product has been added to the cart";

    setItems((prev) => {
      if (prev.find((item) => item.id === itemToAdd.id)) {
        return prev.map((item) => {
          if (item.id !== itemToAdd.id) return item;

          if (item.qty + itemToAdd.qty > MAXIMUM_QUANTITY_OF_PRODUCTS_IN_CART) {
            toast.error(errorMsg);
            return item;
          }

          toast.success(successMsg);

          return { ...item, qty: item.qty + itemToAdd.qty };
        });
      }

      toast.success(successMsg);

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
    <CartContext.Provider
      value={{
        items,
        shippingCost,
        productsTotal,
        discountTotal,
        isCartEmpty,
        cartTotal,
        setItemQty,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
