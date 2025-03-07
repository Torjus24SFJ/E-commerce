export function ConfirmPurchase() {
  return (
    <div className="text-black flex flex-col place-items-center gap-10">
      <h2 className="text-4xl font-bold">Purchase complete!</h2>
      <div className="bg-[#f1f1f1] border-2 border-[#cbcbcb] p-10 w-200 h-fit">
        <p className="font-bold">Shipping</p>
        <p className="font-bold">Arrives Tue, Jul 20 - Thu, Jul 22</p>
        <p className="font-bold">Pickup</p>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}
