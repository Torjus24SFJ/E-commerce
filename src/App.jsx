import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import ProductList from "./Components/ProductList/ProductList";
import Cartpage from "./Components/Cartpage/Cartpage";
import { ConfirmPurchase } from "./Components/ConfirmPurchase/ConfirmPurchase";
import { ItemPage } from "./Components/ItemPage/ItemPage";
import { CartProvider } from "./context/CartContext";
import { Search } from "./Components/Search/Search";

function App() {
  return (
    <Router>
      <CartProvider>
        <main className="flex flex-col gap-20">
          {/* <Layout /> */}
          <Search />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<Cartpage />} />
            <Route path="confirm" element={<ConfirmPurchase />} />
            <Route path="products/:url" element={<ItemPage />} />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
