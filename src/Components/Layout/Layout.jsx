import { Navbar } from "../Navbar/Navbar";

export function Layout({ children, cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      {children}
    </>
  );
}
