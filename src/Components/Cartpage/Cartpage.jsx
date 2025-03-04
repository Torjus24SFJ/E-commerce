const CartPage = () => {
  return (
    <section className="font-inter">
      <div className="flex flex-col gap-5">
        <h3 className="text-black text-[20px] font-bold">Cart</h3>
        <div className="grid grid-cols-2 w-[50%]">
          <div className="bg-black w-70 h-70" />
          <h4 className="text-[#303030]">Product name</h4>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

// {cartCount} refer to number of items
