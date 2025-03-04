import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Components/Layout/Layout";
import ProductList from "./Components/ProductList/ProductList";
import Cartpage from "./Components/Cartpage/Cartpage";

function App() {
  const [cartCount, setCartCount] = useState(0);
  // console.log("Cart: ", cartCount);

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route
            path="/"
            element={<ProductList setCartCount={setCartCount} />}
          />
          <Route path="cart" element={<Cartpage cartCount={cartCount} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

//!TODO Add stock limit on items
//!TODO Media queries
//!TODO Trending items, deals, top sellers etc