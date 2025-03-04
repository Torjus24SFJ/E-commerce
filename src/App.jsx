import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Components/Layout/Layout";
import ProductList from "./Components/ProductList/ProductList";
import Cartpage from "./Components/Cartpage/Cartpage";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [checkout, setCheckout] = useState([]);

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route
            path="/"
            element={<ProductList setCartCount={setCartCount} checkout={checkout} setCheckout={setCheckout}/>}
          />
          <Route path="cart" element={<Cartpage cartCount={cartCount} checkout={checkout}/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

//!TODO Add stock limit on items
//!TODO Media queries
//!TODO Trending items, deals, top sellers etc