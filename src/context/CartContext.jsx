import { createContext, useState } from "react";
import { products as initialProducts } from "../data/data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    if (!product || product.stock < 1) return;

    setCartCount((prevCartCount) => prevCartCount + 1);

    const itemInCart = cartItems.find((item) => item.url === product.url);
    if (!itemInCart) {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, amount: 1 },
      ]);
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.url === product.url ? { ...item, amount: item.amount + 1 } : item
        )
      );
    }

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.url === product.url ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const handleIncreaseQuantity = (cartProductUrl) => {
      const cartProduct = cartItems.find(
        (cartProduct) => cartProduct.url === cartProductUrl
      );
      if (!cartProduct || cartProduct.stock <= 0) return;
  
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartProduct) =>
          cartProduct.url === cartProductUrl
            ? { ...cartProduct, amount: cartProduct.amount + 1 }
            : cartProduct
        )
      );
      setCartCount((oldCartCount) => oldCartCount + 1);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.url === cartProductUrl
              ? { ...product, stock: product.stock - 1 }
              : product
          )
        );
      }
  
    const handleDecreaseQuantity = (cartProductUrl) => {
      const cartProduct = cartItems.find(
        (cartProduct) => cartProduct.url === cartProductUrl
      );
      if (!cartProduct || cartProduct.amount <= 0) return;
  
      if (cartProduct.amount === 1) {
        handleCancelItem(cartProductUrl);
      } else {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartProduct) =>
            cartProduct.url === cartProductUrl
              ? { ...cartProduct, amount: cartProduct.amount - 1 }
              : cartProduct
          )
        )
        setCartCount((prevCartCount) => prevCartCount - 1);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.url === cartProductUrl
              ? { ...product, stock: product.stock + 1 }
              : product
          )
        );
      }
    };

  const handleCancelItem = (url) => {
    const removeProduct = cartItems.find((item) => item.url === url);
    if (!removeProduct) return;

    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.url !== url)
    );
    setCartCount((prevCount) => prevCount - removeProduct.amount);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.url === url
          ? { ...product, stock: product.stock + removeProduct.amount }
          : product
      )
    );
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


