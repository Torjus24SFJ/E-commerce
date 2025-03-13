import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { useCart } from "../../context/useCart";

export function ItemPage() {
  const { url } = useParams();
  const { products, handleAddToCart, setProducts } = useCart();

  const [imageIndex, setImageIndex] = useState(0);
  const [userRating, setUserRating] = useState(0); 

  useEffect(() => {
    if (!products || !products.length) return;

    const selectedProduct = products.find((product) => product.url === url);
    if (!selectedProduct) return;

    setUserRating(selectedProduct.rating || 0);

    const preloadImages = () => {
      selectedProduct.img.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [products, url]); 

  if (!products) return <h4>Loading products...</h4>;

  const selectedProduct = products.find((product) => product.url === url);
  if (!selectedProduct) return <h4 className="item-not-found">Item not found!</h4>;

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

  const addToCart = () => {
    console.log("Adding to cart from ItemPage:", selectedProduct);
    handleAddToCart(selectedProduct);
  };

  const handleChangeRating = (e, ratingValue) => {
    setUserRating(ratingValue);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.url === url ? { ...product, rating: ratingValue } : product
      )
    );
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
        <p className="text-neutral-500 text-[14px]">{selectedProduct.description}</p>
        <Rating
          name={`rating-${url}`}
          value={userRating}
          onChange={handleChangeRating}
          precision={0.5}
        />
        <p className="font-semibold text-[24px]">
          <span className="text-[#10b981]">{selectedProduct.price}</span> kr
        </p>
        <p className="text-[12px] text-gray-500 font-semibold">
          {selectedProduct.stock > 0 ? `${selectedProduct.stock} in stock` : "Out of stock"}
        </p>
        <button
          onClick={addToCart}
          disabled={selectedProduct.stock === 0}
          className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-700 text-white font-semibold hover:bg-gray-800 cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}