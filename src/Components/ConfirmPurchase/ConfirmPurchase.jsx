import { getShippingDate } from "../../data/shippingdate";

export function ConfirmPurchase() {

  console.log(getShippingDate())

  
  return (
    <div className="text-black flex flex-col place-items-center gap-10">
      <h2 className="text-[34px] font-bold">Purchase complete!</h2>
      <hr className="w-[100%]" />
      <div className="bg-[#f1f1f1] border-2 border-[#cbcbcb] p-10 w-200 h-fit flex flex-col gap-2">
        <p className="font-bold">Estimated Arrival</p>
        <p className="font-regular">{getShippingDate()}</p>
        <p className="font-bold">Pickup</p>
        <p className="font-regular">Location</p>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}
