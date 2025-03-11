import { useState } from "react"

export function useRating(product, setProducts) {
    const [userRating, setUserRating] = useState(product.rating)
    
    const handleChangeRating = (e, ratingValue) => {
        setUserRating(ratingValue)
        setProducts((prevProducts) => 
          prevProducts.map((product) => 
            product.url === product.url ? {...product, rating: ratingValue} : product
              )
            )
          }

    return {userRating, handleChangeRating}
}