import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Components/Layout/Layout";
import ProductList from "./Components/ProductList/ProductList";
import Cartpage from "./Components/Cartpage/Cartpage";
import { ConfirmPurchase } from "./Components/ConfirmPurchase/ConfirmPurchase";
import { ItemPage } from "./Components/ItemPage/ItemPage";
import { products as initialProducts } from "./data/data";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(initialProducts);
 

  console.log(products)

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cartpage
                cartCount={cartCount}
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route path="confirm" element={<ConfirmPurchase />} />
          <Route
            path="products/:url"
            element={
              <ItemPage
              setCartCount={setCartCount}
              cartItems={cartItems}
              products={products}
              setCartItems={setCartItems}
              setProducts={setProducts}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


