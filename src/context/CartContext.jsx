import { createContext, useState } from "react";
import { products as initialProducts } from "../data/data";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
    if (!product || product.stock < 1) return;
    setCartCount((prev) => prev + 1);
    const itemInCart = cartItems.find((item) => item.url === product.url);
    if (!itemInCart) {
      setCartItems((prev) => [...prev, { ...product, amount: 1 }]);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.url === product.url ? { ...item, amount: item.amount + 1 } : item
        )
      );
    }
    setProducts((prev) =>
      prev.map((p) =>
        p.url === product.url ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const handleIncreaseQuantity = (url) => {
    const product = products.find((product) => product.url === url);
    if (product.stock <= 0) return;
    console.log("Product added to cart:", product);
    setCartItems((prev) =>
      prev.map((item) =>
        item.url === url ? { ...item, amount: item.amount + 1 } : item
      )
    );
    setCartCount((prev) => prev + 1);
    setProducts((prev) =>
      prev.map((p) => (p.url === url ? { ...p, stock: p.stock - 1 } : p))
    );
  };

  //!TODO Simplefy this logic
  const handleDecreaseQuantity = (url) => {
    setCartItems((prev) => {
      const item = prev.find((item) => item.url === url)
      if (!item || item.amount <= 0) return
      if (item.amount === 1) {
        return prev.filter((item) => item.url !== url)
      }
      return prev.map((item) =>
        item.url === url ? { ...item, amount: item.amount - 1 } : item
      );
    });
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
    setProducts((prev) =>
      prev.map((p) => (p.url === url ? { ...p, stock: p.stock + 1 } : p))
    );
  };

  const handleCancelItem = (url) => {
    const item = cartItems.find((item) => item.url === url);
    if (item) {
      setCartCount((prev) => prev - item.amount);
      setCartItems((prev) => prev.filter((item) => item.url !== url));
      setProducts((prev) =>
        prev.map((p) =>
          p.url === url ? { ...p, stock: p.stock + item.amount } : p
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        cartCount,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleCancelItem,
        setCartItems,
        setCartCount,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
