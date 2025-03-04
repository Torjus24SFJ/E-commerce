import { Rating } from "@mui/material";

const ProductCard = ({ name, description, price, stock, img, rating , setCartCount}) => {
    const handleAddToCart = () => {
        setCartCount((oldCartCount) => oldCartCount + 1)
    }
    return (
        <>
        <div className="product-card p-[10px] border-2 border-[#e9e9e9] rounded-[8px] bg-white text-black flex flex-col justify-between">
            <div className="flex justify-center">
            <img src={img} alt={`${name} image`} className="w-[240px] h-[192px] object-scale-down bg-white p-2"/>
            </div>
            <h3 className="font-bold text-[16px] mb-[8px]">{name}</h3>
            <p className="font-medium text-[12px] mb-[10px]">{description}</p>
            <div className="mb-[10px] "><Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly /></div> 
            <p className="font-semibold">{price} kr</p>
            <p className="text-[12px] text-gray-500 font-semibold mb-[20px]">{stock} in stock</p>
            <button onClick={handleAddToCart} disabled={stock === 0} className="rounded-[5px] p-2 text-[12px] w-fit bg-gray-800 text-white font-semibold hover:bg-gray-700 cursor-pointer">Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;