import { Navbar } from "../Navbar/Navbar";
import { useCart } from "../../context/useCart";

export function Layout({ children }) {
  const { cartCount } = useCart(); 

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="p-4">{children}</main>
    </>
  );
}