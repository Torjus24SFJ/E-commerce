import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Product-1",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 1999,
    rating: 2,
  },
  {
    id: 2,
    name: "Product-2",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 2499,
    rating: 3.5,
  },
  {
    id: 3,
    name: "Product-3",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 599,
    rating: 4,
  },
  {
    id: 4,
    name: "Product-4",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 12499,
    rating: 5,
  },
  {
    id: 5,
    name: "Product-5",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 249,
    rating: 3,
  },
  {
    id: 6,
    name: "Product-6",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 6999,
    rating: 3.5,
  },
  {
    id: 7,
    name: "Product-7",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 34499,
    rating: 5,
  },
  {
    id: 8,
    name: "Product-8",
    img: "/assets/placeholder_products.png",
    description: "Description of product goes here",
    stock: 10,
    price: 49,
    rating: 4.5,
  },
];

const ProductList = () => {
  return (
    <div className="product-list grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
