import { createContext, useContext, useState } from "react";
import { products as initialProducts } from "../data/data";

const CartContext = createContext()

export function CartProvider({children}) {
    const [products, setProducts] = useState(initialProducts)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const handleAddToCart = () => {
        if (selectedProduct[0].stock < 1) return;
    
        setCartCount((oldCartCount) => oldCartCount + 1);
    
        const itemInCart = cartItems.find((item) => item.url === url);
        if (!itemInCart) {
          setCartItems((oldCartItems) => [
            ...oldCartItems,
            { ...selectedProduct[0], amount: 1 },
          ]);
        } else {
          setCartItems((oldCartItems) =>
            oldCartItems.map((item) =>
              item.url === url ? { ...item, amount: item.amount + 1 } : item
            )
          );
        }
    }
}