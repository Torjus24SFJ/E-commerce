import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { getShippingDate } from "../../data/shippingdate";
import { useCart } from "../../context/useCart";

const CartPage = () => {
  const {
    cartItems,
    setCartItems,
    setCartCount,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleCancelItem,
    getCartQuantity,
    getMaxStock,
  } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toLocaleString();

  const handleCheckOut = () => {
    setCartItems([]);
    setCartCount(0);
    navigate("/confirm");
  };

  return (
    <section className="font-inter grid grid-rows-2 place-items-center text-black">
      <h4 className="font-bold text-[34px]">Checkout</h4>
      <hr className="text-black w-[100%]" />
      <div className="flex flex-col justify-items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
          {cartItems.map((cartProduct, index) => {
            const cartQty = getCartQuantity(cartProduct.url);
            const maxStock = getMaxStock(cartProduct.url);
            const isIncreaseDisabled = cartQty >= maxStock;
            return (
              <div
                key={cartProduct.id + index + cartProduct.name}
                className="w-100 grid grid-rows-[250px_1fr] justify-center text-center p-4 m-8"
              >
                <img
                  src={cartProduct.img[0]}
                  alt="product-image"
                  className="w-full h-full object-contain p-2"
                />
                <div>
                  <h4 className="font-semibold text-[16px]">{cartProduct.name}</h4>
                  <p className="text-[14px]">
                    <span className="font-bold">Quantity:</span> {cartProduct.amount}
                  </p>
                  <p className="font-semibold text-[14px]">
                    <span className="text-[#10b981]">{cartProduct.price}</span> kr
                  </p>
                  <div className="flex flex-row justify-end text-neutral-400 transition hover:text-neutral-600 cursor-pointer">
                    <MdCancel
                      size={20}
                      onClick={() => handleCancelItem(cartProduct.url)}
                    />
                  </div>
                  <div className="flex gap-2 text-neutral-400 w-20 h-20 items-center justify-center">
                    <FaPlus
                      size={15}
                      className={`transition hover:text-neutral-600 ${
                        isIncreaseDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      }`}
                      onClick={() => !isIncreaseDisabled && handleIncreaseQuantity(cartProduct.url)}
                    />
                    <FaMinus
                      size={15}
                      className="transition hover:text-neutral-600 cursor-pointer"
                      onClick={() => handleDecreaseQuantity(cartProduct.url)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-2 border-[#cbcbcb] sm:min-w-120 lg:min-w-150 xl:min-w-200 bg-[#f1f1f1] p-8 mt-10">
          <h4 className="mb-8 font-bold">
            Total: <span className="text-[#10b981]">{totalPrice}</span> kr
          </h4>
          <p className="font-bold">Estimated Arrival</p>
          <p className="font-regular">{getShippingDate()}</p>
          <p className="font-bold">Pickup</p>
          <p className="underline">Find a Store</p>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <button
            className="bg-gray-800 hover:bg-gray-900 text-[#f1f1f1] rounded-full p-2 font-bold cursor-pointer"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;