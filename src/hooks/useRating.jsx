import { useState } from "react";
import { useCart } from "../context/useCart";

export function useRating(productUrl, initialRating) {
    const { setProducts } = useCart()
    const [userRating, setUserRating] = useState(initialRating)
    
    const handleChangeRating = (ratingValue) => {
        setUserRating(ratingValue)
        setProducts((prevProducts) => 
          prevProducts.map((product) => 
            product.url === productUrl ? {...product, rating: ratingValue } : product
              )
            )
          }

    return { userRating, handleChangeRating }
}