import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

export function ItemPage({
  products,
  setProducts,
  setCartItems,
  cartItems,
  setCartCount,
}) {
  const { url } = useParams();
  const correctProduct = products.filter((product) => product.url === url);
  const [addItem, setAddItem] = useState({ ...correctProduct[0], amount: 0 });
  const [imageIndex, setImageIndex] = useState(0)

  console.log("This is product: ", correctProduct[0]?.url);
  console.log("This is path: ", url);
  console.log("Adding item: ", addItem);

  useEffect(() => {
    console.log("Stock:", correctProduct[0]?.stock);
  }, [correctProduct]);

  if (!products || correctProduct.length === 0) {
    return <h4 className="item-not-found">Item not found!</h4>;
  }

  const handleAddToCart = () => {
    if (correctProduct[0].stock < 1) return;

    setCartCount((oldCartCount) => oldCartCount + 1);

    const itemInCart = cartItems.find((item) => item.url === url);
    if (!itemInCart) {
      setCartItems((oldCartItems) => [
        ...oldCartItems,
        { ...correctProduct[0], amount: 1 },
      ]);
    } else {
      setCartItems((oldCartItems) =>
        oldCartItems.map((item) =>
          item.url === url ? { ...item, amount: item.amount + 1 } : item
        )
      );
    }
    setAddItem((prev) => ({ ...prev, amount: prev.amount + 1 }));

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.url === url ? { ...product, stock: product.stock - 1 } : product
      )
    );
  };

  const handleNextImage = () => {
     setImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= correctProduct[0].img.length) {
        return 0
      }
      return nextIndex;
     })
  }

  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return correctProduct[0].img.length - 1;
      }
      return prevIndex - 1;
    })
  }

  return (
    <section className="text-black flex flex-col justify-center items-center gap-4 pt-30 sm-20 md:flex-row">
      <IoIosArrowBack 
      size={30} 
      className="opacity-45 hover:opacity-100 transition hover:scale-120 cursor-pointer"
      onClick={handlePreviousImage}
      />
      <div className="w-100 h-100 flex items-center justify-center">
        <img
          src={correctProduct[0].img[imageIndex]}
          alt={correctProduct[0].name}
          className="w-cover h-cover"
        />
      </div>
      <IoIosArrowForward
        size={30}
        className="opacity-45 hover:opacity-100 transition hover:scale-120 cursor-pointer"
        onClick={handleNextImage}
      />
      <div className="w-100 h-100 p-8 flex flex-col gap-4 justify-center">
        <h2 className="text-[24px] font-semibold">{correctProduct[0].name}</h2>
        <p className="text-neutral-500 text-[14px]">
          {correctProduct[0].description}
        </p>
        <Rating
          name="half-rating"
          defaultValue={correctProduct[0].rating}
          precision={0.5}
        />
        <p className="font-semibold text-[24px]">
          <span className="text-[#10b981]">{correctProduct[0].price}</span> kr
        </p>
        <p className="text-[12px] text-gray-500 font-semibold">
          {correctProduct[0].stock} in stock
        </p>
        <button
          onClick={handleAddToCart}
          disabled={correctProduct[0].stock === 0}
          className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-700 text-white font-semibold hover:bg-gray-800 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
