import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { getShippingDate } from "../../data/shippingdate";

const CartPage = ({ cartItems, setCartItems, setCartCount, setProducts }) => {
  const totalPrice = cartItems
    .reduce(
      (acc, cartProduct) => acc + cartProduct.price * cartProduct.amount,
      0
    )
    .toLocaleString();

  const navigation = useNavigate();

  const handleCheckOut = () => {
    setCartItems([]);
    setCartCount(0);
    navigation("/confirm");
  };

  const handleCancelItem = (remove) => {
    const removeProduct = cartItems.find(
      (cartProduct) => cartProduct.url === remove
    );
    if (!removeProduct) return;

    setCartItems(cartItems.filter((cartProduct) => cartProduct.url !== remove));
    setCartCount((oldCartCount) => oldCartCount - removeProduct.amount);

    if (removeProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.url === removeProduct.url
            ? { ...product, stock: product.stock + removeProduct.amount }
            : product
        )
      );
    }
  };

  const handleIncreaseQuantity = (cartProductUrl) => {
    const cartProduct = cartItems.find(
      (cartProduct) => cartProduct.url === cartProductUrl
    );
    if (!cartProduct || cartProduct.stock <= 0) return;

    setCartItems((prevCartItems) =>
      prevCartItems.map((cartProduct) =>
        cartProduct.url === cartProductUrl
          ? { ...cartProduct, amount: cartProduct.amount + 1 }
          : cartProduct
      )
    );
    setCartCount((oldCartCount) => oldCartCount + 1);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.url === cartProductUrl
            ? { ...product, stock: product.stock - 1 }
            : product
        )
      );
    }

  const handleDecreaseQuantity = (cartProductUrl) => {
    const cartProduct = cartItems.find(
      (cartProduct) => cartProduct.url === cartProductUrl
    );
    if (!cartProduct || cartProduct.amount <= 0) return;

    if (cartProduct.amount === 1) {
      handleCancelItem(cartProductUrl);
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartProduct) =>
          cartProduct.url === cartProductUrl
            ? { ...cartProduct, amount: cartProduct.amount - 1 }
            : cartProduct
        )
      )
      setCartCount((oldCartCount) => oldCartCount - 1);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.url === cartProductUrl
            ? { ...product, stock: product.stock + 1 }
            : product
        )
      );
    }
  };

  return (
    <section className="font-inter grid grid-rows-2 place-items-center text-black">
      <h4 className="font-bold text-[34px]">Checkout</h4>
      <hr className="text-black w-[100%]" />
      <div className="flex flex-col justify-items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
          {cartItems.map((cartProduct, index) => (
            <div
              key={cartProduct.id + index + cartProduct.name}
              className="w-100 grid grid-rows-[250px_1fr] justify-center text-center p-4 m-8"
            >
              <img
                src={cartProduct.img[0]}
                alt="product-image"
                className="w-full h-full object-contain p-2"
              />
              <div className="">
                <h4 className="font-semibold text-[16px]">
                  {cartProduct.name}
                </h4>
                <p className="text-[14px]">
                  {" "}
                  <span className="font-bold">Quantity:</span>{" "}
                  {cartProduct.amount}
                </p>
                <p className="font-semibold text-[14px]">
                  <span className="text-[#10b981]">{cartProduct.price} </span>
                  kr
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
                    className="transition hover:text-neutral-600 cursor-pointer"
                    onClick={() => handleIncreaseQuantity(cartProduct.url)}
                  />
                  <FaMinus
                    size={15}
                    className="transition hover:text-neutral-600 cursor-pointer"
                    onClick={() => handleDecreaseQuantity(cartProduct.url)}
                  />
                </div>
              </div>
            </div>
          ))}
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
