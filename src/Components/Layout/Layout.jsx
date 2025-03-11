import { Navbar } from "../Navbar/Navbar";
import { useCart } from "../../context/useCart";

export function Layout({ children }) {
  const { cartCount } = useCart(); 

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="md:p-24 sm:p-12 p-8 grid gap-30">{children}</main>
    </>
  );
}