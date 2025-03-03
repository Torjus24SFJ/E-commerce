import { Navbar } from "../Navbar/Navbar";

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
