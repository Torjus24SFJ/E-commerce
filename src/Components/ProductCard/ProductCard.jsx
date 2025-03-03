import { Rating } from "@mui/material";

const ProductCard = ({ name, description, price, stock, img }) => {
    const handleAddToCart = () => {

    }
    return (
        <>
        <div className="product-card p-[10px]">
            <img src={img} alt={`${name} image`} className="w-[240px]"/>
            <h3 className="font-bold text-[24px] mb-[5px]">{name}</h3>
            <p className="font-medium text-[14px]">{description}</p>
            <div><Rating name="half-rating" defaultValue={0} precision={0.5} /></div> 
            <p>{price}</p>
            <p>{stock}</p>
            <button onClick={handleAddToCart} disabled={stock === 0}>Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;