import { useLocation } from "react-router-dom";

export function ItemPage() {
  const location = useLocation();
  const item = location.state;

  if(!item) return (
    <h4 className="item not found!"></h4>
  )

  return (
    <>
      <section className="flex flex-col items-center text-black">
        <h2 className="text-2xl font-bold">{item?.name || "Product"}</h2>
        <img src={item?.img} alt={item?.name} className="w-80 h-80" />
        <p>{item?.description}</p>
        <p className="text-lg">{item?.price} kr</p>
      </section>
    </>
  );
}
