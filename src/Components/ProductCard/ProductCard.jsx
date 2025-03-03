import { Rating } from "@mui/material";

const ProductCard = ({ name, description, price, stock, img, rating }) => {
    const handleAddToCart = () => {

    }
    return (
        <>
        <div className="product-card p-[10px]">
            <img src={img} alt={`${name} image`} className="w-[240px]"/>
            <h3 className="font-bold text-[24px] mb-[5px]">{name}</h3>
            <p className="font-medium text-[14px]">{description}</p>
            <div><Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly /></div> 
            <p>{price} kr</p>
            <p className="text-[12px] text-gray-500 font-semibold">{stock} in stock</p>
            <button onClick={handleAddToCart} disabled={stock === 0} className="border-2 border-gray-800 rounded-full p-2 text-[12px] mt-2 bg-gray-500 font-semibold hover:opacity-75">Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;