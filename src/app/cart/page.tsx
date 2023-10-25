import CartCard from "@/components/CartCard";
import { getCart } from "@/lib/db/cart";
import Image from "next/image";
import emptyCart from "public/assets/empty-cart.png";

// const getLocaleCart = async () => {
//   const res = await fetch("http://localhost:3000/api/cart-products", {
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   return data;
// };

const Cart = async () => {
  const cart = await getCart();
  console.log(cart);
  return (
    <div className="min-h-[600px] p-8">
      <h1>Cart</h1>
      {/* <div className="">
        <Image
          src={emptyCart}
          alt="empty cart"
          width={400}
          height={400}
          className="mx-auto "
        />
      </div> */}

      <CartCard />
      <CartCard />
      <p className="text-center my-12 font-bold text-xl">
        Total Price: <span>999$</span>
      </p>
    </div>
  );
};

export default Cart;
