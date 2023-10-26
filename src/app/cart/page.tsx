import CartCard from "@/components/CartCard";
import { getCart } from "@/lib/db/cart";
import Image from "next/image";
import emptyCart from "public/assets/empty-cart.png";

const Cart = async () => {
  const cart = await getCart();
  console.log(cart);
  return (
    <div className="min-h-[600px] p-8">
      <h1 className="text-center text-4xl font-semibold">Cart</h1>
      {!cart?.size && (
        <div className="">
          <Image
            src={emptyCart}
            alt="empty cart"
            width={400}
            height={400}
            className="mx-auto "
          />
        </div>
      )}
      {cart?.items.map((cartProduct) => (
        <CartCard key={cartProduct.id} cartProduct={cartProduct} />
      ))}

      <p className="text-center my-12 font-bold text-xl">
        Total Price: <span>{cart?.subtotal}$</span>
      </p>
    </div>
  );
};

export default Cart;
