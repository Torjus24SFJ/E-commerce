import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Navbar({ cartCount }) {
  return (
    <>
      <nav>
        <ul className="flex flex-row justify-between font-bold fixed w-full bg-[#18181b] p-[20px] z-100">
            <Link to="/">
          <li className="text-amber-300">
            EShop <span className="text-[12px]">com</span>
          </li>
            </Link>
          {/* <li className="hover:underline">
            <a href="">Trending</a>
          </li>
          <li className="hover:underline">
            <a href="">Best sellers</a>
          </li>
          <li className="hover:underline">
            <a href="">Deals</a>
          </li> */}
          <Link to="/cart" className="flex gap-2">
            <li className="flex gap-2 align-middle">
              <FaCartShopping size={20} />
              <span className={`text-[#606060] text-[14px] ${cartCount > 0 ? 'text-green-500' : ''}`}>{cartCount}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
