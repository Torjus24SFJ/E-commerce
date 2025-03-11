import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useCart();

  return (
    <div className="p-[10px] border-2 border-[#e9e9e9] rounded-[8px] bg-white text-black flex flex-col justify-between">
      <div className="flex justify-center">
        <Link to={`/products/${product.url}`}>
          <img
            src={product.img[0]}
            alt={`${product.name} image`}
            className="w-[240px] h-[192px] object-scale-down bg-white p-2 cursor-pointer"
          />
        </Link>
      </div>
      <h3 className="font-bold text-[16px] mb-[8px]">{product.name}</h3>
      <p className="font-medium text-[12px] mb-[10px]">{product.description}</p>
      <div className="mb-[10px]">
        <Rating
          name={`rating-${product.url}`}
          value={product.rating}
          precision={0.5}
          readOnly
        />
      </div>
      <p className="font-semibold">
        <span className="text-[#10b981]">{product.price}</span> kr
      </p>
      <p className="text-[12px] text-gray-500 font-semibold mb-[20px]">
        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
      </p>
      <button
        onClick={() => handleAddToCart(product)}
        disabled={product.stock === 0}
        className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-700 hover:bg-gray-800 text-white font-semibold cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;