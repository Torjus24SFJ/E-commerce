export function ConfirmPurchase() {
  return (
    <div className="text-black flex flex-col place-items-center gap-10">
      <h2 className="text-4xl font-bold">Purchase complete!</h2>
      <div className="bg-[#f1f1f1] border-2 border-[#353535] p-10 w-200 h-100">
        <p className="font-bold">Shipping</p>
        <p className="font-bold">Arrives Tue, Jul 20 - Thu, Jul 22</p>
        <p className="font-bold">Pickup</p>
        <div className="mt-6">
          <ul className="flex flex-col gap-4">
            <h4 className="font-bold">Items:</h4>
            <li>feature coming</li>
            <li>feature coming</li>
            <li>feature coming</li>
            <li>feature coming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
