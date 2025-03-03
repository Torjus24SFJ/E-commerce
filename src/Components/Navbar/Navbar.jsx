import { FaCartShopping } from "react-icons/fa6";

export function Navbar() {
    return (
        <>
        <nav>
        <ul className="flex flex-row justify-around font-bold mt-2">
            <li><a href="">Shop</a></li>
            <li><a href="">Best sellers</a></li>
            <li><a href="">Deals</a></li>
            <li className="flex gap-2 justify-baseline"><FaCartShopping />0</li>
        </ul>
        </nav>
        </>
    )
}