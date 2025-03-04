import { Navbar } from "../Navbar/Navbar";

export function Layout({ children, cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="md:p-24 sm:p-12 p-8 grid gap-30">{children}</main>
    </>
  );
}
