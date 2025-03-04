import { FaCartShopping } from "react-icons/fa6";

export function Navbar({cartCount}) {
    return (
        <>
        <nav>
        <ul className="flex flex-row justify-around font-bold fixed w-full bg-[#18181b] p-[20px] z-100">
            <li className="text-amber-300">EShop <span className="text-[12px]">com</span></li>
            <li className="hover:underline"><a href="">Trending</a></li>
            <li className="hover:underline"><a href="">Best sellers</a></li>
            <li className="hover:underline"><a href="">Deals</a></li>
            <li className="flex gap-2 align-baseline"><FaCartShopping size={20} /><span className="text-[#606060]">{cartCount}</span></li>
        </ul>
        </nav>
        </>
    )
}