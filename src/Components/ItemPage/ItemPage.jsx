import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

export function ItemPage({ item, url }) {
  const path = useParams(url);
  const products = item.filter((product) => product.url === path.url);
  console.log("This is product: ", products);
  console.log("This is path: ", path.url);

  if (!item) return <h4 className="item not found!"></h4>;

  return (
    <>
      <section className="flex flex-col items-center text-black gap-4">
        <h2 className="text-2xl font-bold">{products[0]?.name}</h2>
        <img
          src={products[0]?.img}
          alt={products[0]?.name}
          className="w-80 h-80"
        />
        <p className="text-[24px] text-center">{products[0]?.description}</p>
        <Rating name="half-rating" defaultValue={products[0]?.rating} precision={0.5} />
        <p className="font-bold text-3xl">
          <span className="text-[#64952f]">{products[0]?.price}</span> kr
        </p>
      </section>
    </>
  );
}
