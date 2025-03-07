import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  name,
  description,
  price,
  stock,
  img,
  rating,
  setCartCount,
  checkout,
  setCheckout,
  url,
  setProducts,
}) => {
  const [addItem, setAddItem] = useState({
    name: name,
    img: img,
    price: price,
    description: description,
    amount: 0,
    url,
  });
  const handleAddToCart = () => {
    if(stock < 1) return

    setCartCount((oldCartCount) => oldCartCount + 1);

    if (addItem.amount === 0) {
        setCheckout((oldCheckout) => [...oldCheckout, { ...addItem, amount: 1 }]);
      } else {
        setCheckout((oldCheckout) =>
          oldCheckout.map((item) =>
            item.url === url ? { ...item, amount: item.amount + 1 } : item
          )
        );
      }

      setAddItem((prev) => ({ ...prev, amount: prev.amount + 1 }))

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.url === url ? { ...product, stock: product.stock - 1 } : product
        )
      );
  };
  
  useEffect(() => {
    console.log("This is the checkout: ", checkout);
    console.log(addItem);
  }, [checkout, addItem]);

  return (
    <>
      <div className="product-card p-[10px] border-2 border-[#e9e9e9] rounded-[8px] bg-white text-black flex flex-col justify-between">
        <div className="flex justify-center">
          <Link to={`/products/${url}`}>
            <img
              src={img[0]}
              alt={`${name} image`}
              className="w-[240px] h-[192px] object-scale-down bg-white p-2 cursor-pointer"
            />
          </Link>
        </div>
        <h3 className="font-bold text-[16px] mb-[8px]">{name}</h3>
        <p className="font-medium text-[12px] mb-[10px]">{description}</p>
        <div className="mb-[10px]">
          <Rating
            name="half-rating"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="font-semibold"><span className="text-[#10b981]">{price}</span> kr</p>
        <p className="text-[12px] text-gray-500 font-semibold mb-[20px]">
          {stock} in stock
        </p>
        <button
          onClick={handleAddToCart}
          disabled={stock === 0}
          className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-700 hover:bg-gray-800 text-white font-semibold cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
