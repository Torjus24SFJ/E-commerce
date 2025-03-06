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
  const [checkout, setCheckout] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                setCartCount={setCartCount}
                checkout={checkout}
                setCheckout={setCheckout}
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
                checkout={checkout}
                setCheckout={setCheckout}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="confirm" element={<ConfirmPurchase />} />
          <Route path="products/:url" element={<ItemPage item={products} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

//!TODO Media queries
