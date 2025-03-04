const CartPage = ({ checkout }) => {
  const totalPrice = checkout.reduce(
    (quantity, item) => quantity + item.price, 0).toLocaleString();
    //!TODO Correct price for quantity of an item
    
    const handleCheckOut = () => {
      console.log("checked out")
    }

  return (
    <section className="font-inter grid grid-rows-2 text-black">
      <div className="flex flex-col justify-items-start">
        <h4 className="font-bold text-[26px]">Checkout</h4>
        <div className="grid grid-cols-2 gap-4 p-6">
          {checkout.map((item) => (
            <div key={item.id} className="flex flex-col">
              <img
                src={item.img}
                alt="product-image"
                className="w-60 h-60 p-2"
              />
              <h4 className="font-semibold text-[16px]">{item.name}</h4>
              <p className="italic font-semibold text-[14px] text-[#64952f]">
                {item.price} kr
              </p>
            </div>
          ))}
        </div>
        <div className="border-2 border-[#cbcbcb] bg-[#f1f1f1] p-8 mt-10">
          <h4 className="mb-8 font-bold">Total: <span className="text-[#64952f]">{totalPrice}</span> kr</h4>
          <p>Shipping</p>
          <p>Arrives Tue, Jul 20 - Thu, Jul 22</p>
          <p>Pickup</p>
          <p className="underline">Find a Store</p>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <button className="bg-[#353535] text-[#f1f1f1] rounded-full p-2 font-bold cursor-pointer" onClick={handleCheckOut}>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

//!TODO Set price total of all items
//!TODO Fix multiple items not using quantity
