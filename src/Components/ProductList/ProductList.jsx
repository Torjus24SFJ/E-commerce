import ProductCard from "../ProductCard/ProductCard";

const products = [
    {
        id: 1, name: 'Product-1', img: './assets/placeholder_products.png', description: 'Description of product goes here', stock: 10, price: 0
    },
    {
        id: 2, name: 'Product-2', img: './assets/placeholder_products.png', description: 'Description of product goes here', stock: 10, price: 0
    },
]

const ProductList = () => {
    return (
        <div className="product-list">
        {products.map(product => (
            <ProductCard key={product.id} {...product}/>
        ))}
    </div>
    )
}

export default ProductList;