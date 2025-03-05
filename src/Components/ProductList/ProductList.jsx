import ProductCard from "../ProductCard/ProductCard";

const products = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      ref: "wireless-headphones",
      img: "/assets/Wireless_headphones.jpeg",
      description: "Immerse yourself in high-fidelity sound with active noise cancellation.",
      stock: 10,
      price: 1999,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartwatch Series 8",
      img: "/assets/Series-8.jpg",
      description: "Track your health, fitness, and notifications with a sleek design.",
      stock: 8,
      price: 2499,
      rating: 4,
    },
    {
      id: 3,
      name: "Mechanical Gaming Keyboard",
      img: "/assets/Mechanical-keyboard.jpg",
      description: "RGB backlit keys with fast response for the ultimate gaming experience.",
      stock: 15,
      price: 599,
      rating: 4.2,
    },
    {
      id: 4,
      name: "4K Ultra HD Smart TV",
      img: "/assets/Smart-tv.webp",
      description: "Cinematic visuals with HDR and voice control compatibility.",
      stock: 5,
      price: 12499,
      rating: 5,
    },
    {
      id: 5,
      name: "Ergonomic Office Chair",
      img: "/assets/Office-chair.jpg",
      description: "Adjustable lumbar support and breathable mesh for all-day comfort.",
      stock: 12,
      price: 249,
      rating: 3.8,
    },
    {
      id: 6,
      name: "Gaming Laptop - RTX 4060",
      img: "/assets/Gaming-laptop.jpeg",
      description: "High-performance gaming with a powerful GPU and fast refresh rate.",
      stock: 7,
      price: 6999,
      rating: 4.3,
    },
    {
      id: 7,
      name: "Professional DSLR Camera",
      img: "/assets/DSLR-camera.jpg",
      description: "Capture stunning images with 24MP and 4K video recording.",
      stock: 4,
      price: 34499,
      rating: 5,
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      img: "/assets/Charging-pad.jpg",
      description: "Fast and efficient charging for all Qi-compatible devices.",
      stock: 20,
      price: 149,
      rating: 3,
    },
  ];

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
