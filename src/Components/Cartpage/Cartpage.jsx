const CartPage = () => {
  return (
    <section className="font-inter">
      <div className="flex flex-col gap-5">
        <h3 className="text-black text-[20px] font-bold">Cart</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black w-70 h-70" />

          <div className="flex flex-col justify-start">
            <h4 className="text-[#303030] font-semibold text-sm">
              Product Name
            </h4>
            <p className="text-sm text-[#606060]">Product Description</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[#303030]">Shipping: Standard Shipping</p>
          <p className="text-[#303030]">Estimated Arrival: 3-5 business days</p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

// {cartCount} refer to number of items
