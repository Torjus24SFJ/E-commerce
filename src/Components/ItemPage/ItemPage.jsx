import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { useCart } from "../../context/useCart";

export function ItemPage() {
  const { url } = useParams();
  const {products, handleAddToCart, setProducts} = useCart()
  const selectedProduct = products.find((product) => product.url === url)
  const [imageIndex, setImageIndex] = useState(0);
  const [userRating, setUserRating] = useState(selectedProduct.rating || 0)

  useEffect(() => {
    const preloadImages = () => {
      selectedProduct.img.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [selectedProduct]);
 

  if (!selectedProduct) {
    return <h4 className="item-not-found">Item not found!</h4>;
  }

  const handleChangeRating = (e, ratingValue) => {
    setUserRating(ratingValue)
    setProducts((prevProducts) => 
      prevProducts.map((product) => 
        product.url === product.url ? {...product, rating: ratingValue} : product
          )
        )
      }

  const handleNextImage = () => {
    setImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= selectedProduct.img.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return selectedProduct.img.length - 1;
      }
      return prevIndex - 1;
    });
  };
  

  return (
    <section className="text-black flex flex-col justify-center items-center gap-4 pt-30 sm-20 md:flex-row">
      <IoIosArrowBack
        size={30}
        className="opacity-45 hover:opacity-100 transition hover:scale-120 cursor-pointer"
        onClick={handlePreviousImage}
      />
      <div className="w-100 h-100 flex items-center justify-center">
        <img
          src={selectedProduct.img[imageIndex]}
          alt={selectedProduct.name}
          className="w-cover h-cover"
        />
      </div>
      <IoIosArrowForward
        size={30}
        className="opacity-45 hover:opacity-100 transition hover:scale-120 cursor-pointer"
        onClick={handleNextImage}
      />
      <div className="w-100 h-100 p-8 flex flex-col gap-4 justify-center">
        <h2 className="text-[24px] font-semibold">{selectedProduct.name}</h2>
        <p className="text-neutral-500 text-[14px]">
          {selectedProduct.description}
        </p>
        <Rating
          name={`rating-${url}`}
          value={userRating}         
          defaultValue={selectedProduct.rating}
          onChange={handleChangeRating} 
          precision={0.5}
        />
        <p className="font-semibold text-[24px]">
          <span className="text-[#10b981]">{selectedProduct.price}</span> kr
        </p>
        <p className="text-[12px] text-gray-500 font-semibold">
          {selectedProduct.stock > 0
            ? `${selectedProduct.stock} in stock`
            : "Out of stock"}
        </p>
        <button
          onClick={() => handleAddToCart(selectedProduct)}
          disabled={selectedProduct.stock === 0}
          className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-700 text-white font-semibold hover:bg-gray-800 cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}