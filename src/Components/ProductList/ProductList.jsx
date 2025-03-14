import ProductCard from "../ProductCard/ProductCard";
import { useCart } from "../../context/useCart";

const ProductList = () => {
  const { products } = useCart();

  return (
    <div className="product-list grid lg:grid-cols-4 gap-15 md:grid-cols-3 sm:grid-cols-1 p-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;