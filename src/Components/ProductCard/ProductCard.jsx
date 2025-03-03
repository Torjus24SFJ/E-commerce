const ProductCard = ({ name, description, rating, image, price, stock }) => {
    const handleAddToCart = () => {

    }
    return (
        <>
        <div className="product-card">
            <img src={image} alt="product" />
            <h3>{name}</h3>
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