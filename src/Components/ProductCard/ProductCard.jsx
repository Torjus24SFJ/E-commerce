const ProductCard = ({ name, description, rating, price, stock, img }) => {
    const handleAddToCart = () => {

    }
    return (
        <>
        <div className="product-card p-[10px]">
            <img src={img} alt={`${name} image`} className="w-[240px]"/>
            <h3 className="">{name}</h3>
            <p>{description}</p>
            <div>{rating}</div>
            <p>{price}</p>
            <p>{stock}</p>
            <button onClick={handleAddToCart} disabled={stock === 0}>Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;