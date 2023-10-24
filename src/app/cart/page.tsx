import CartCard from "@/components/CartCard";
import Image from "next/image";
import emptyCart from "public/assets/empty-cart.png";

const Cart = () => {
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
