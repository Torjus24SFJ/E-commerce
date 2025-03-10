import ProductCard from "../ProductCard/ProductCard";
// import { products } from "../../data/data";

const ProductList = ({ setCartCount, cartItems, setCartItems, products, setProducts }) => {
  return (
    <div className="product-list grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          setCartCount={setCartCount}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setProducts={setProducts}
        />
      ))}
    </div>
  );
};

export default ProductList;
