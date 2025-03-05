import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/data";


const ProductList = ({ setCartCount, checkout, setCheckout }) => {
  return (
    <div className="product-list grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} setCartCount={setCartCount} checkout={checkout} setCheckout={setCheckout}/>
      ))}
    </div>
  );
};

export default ProductList;
