import { Layout } from "./Components/Layout/Layout"
import ProductList from "./Components/ProductList/ProductList"
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  console.log("Cart: ", cartCount)

  return (
    <Layout cartCount={cartCount}>
    <main className="md:p-24 sm:p-12 p-8 grid gap-30">
    <ProductList setCartCount={setCartCount}/>
    </main>
    </Layout>
  )
}

export default App
