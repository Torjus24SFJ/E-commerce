import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const CartPage = ({ checkout, setCheckout, setCartCount }) => {
  const totalPrice = checkout
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toLocaleString();

  const navigation = useNavigate();
  const handleCheckOut = () => {
    setCheckout([]);
    setCartCount(0);
    navigation("/confirm");
  };

  const handleCancelItem = (remove) => {
    const removeProduct = checkout.find((item) => item.url === remove);
    if (removeProduct) {
      setCheckout(checkout.filter((item) => item.url !== remove));
      setCartCount((oldCartCount) => oldCartCount - removeProduct.amount);
    }
  };

  return (
    <section className="font-inter grid grid-rows-2 place-items-center text-black">
        <h4 className="font-bold text-[36px]">Checkout</h4>
        <hr className="text-black w-[100%]"/>
      <div className="flex flex-col justify-items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
          {checkout.map((item, index) => (
            <div
              key={item.id + index + item.name}
              className="w-100 grid grid-rows-[250px_1fr] justify-center text-center p-4 m-8"
            >
              <img
                src={item.img[0]}
                alt="product-image"
                className="w-full h-full object-contain p-2"
              />
              <div className="">
                <h4 className="font-semibold text-[16px]">{item.name}</h4>
                <p className="text-[14px]">
                  {" "}
                  <span className="font-bold">Quantity:</span> {item.amount}
                </p>
                <p className="font-semibold text-[14px] text-[#10b981]">
                  {item.price} kr
                </p>
                <div className="flex flex-row justify-end text-neutral-400 cursor-pointer">
                  <MdCancel
                    size={20}
                    onClick={() => handleCancelItem(item.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 border-[#cbcbcb] min-w-200 bg-[#f1f1f1] p-8 mt-10">
          <h4 className="mb-8 font-bold">
            Total: <span className="text-[#10b981]">{totalPrice}</span> kr
          </h4>
          <p>Shipping</p>
          <p>Arrives Tue, Jul 20 - Thu, Jul 22</p>
          <p>Pickup</p>
          <p className="underline">Find a Store</p>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <button
            className="bg-[#353535] text-[#f1f1f1] hover:bg-[#2b2a2a] rounded-full p-2 font-bold cursor-pointer"
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

//!TODO Remove items from cart
//!TODO Reduce stock when buying
//!TODO Empty cart when checkout pressed
//!TODO Change Quantity from cart
