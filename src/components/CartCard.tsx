"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

type props = {
  cartProduct: CartItemWithProduct;
};

const CartCard = ({ cartProduct }: props) => {
  const [loading, setLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState(cartProduct.quantity);

  const router = useRouter();
  const handleQuantity = async (quantity: number, id: string) => {
    try {
      setProductQuantity(quantity);
      setLoading(true);
      const data = await axios.put(`/api/cart-products`, {
        quantity,
        id,
      });
      console.log(data);
      router.refresh();
    } catch (error) {
      setProductQuantity(cartProduct.quantity);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (productQuantity === 0) {
    return null;
  }

  console.log(cartProduct);
  return (
    <div className="flex justify-between items-center border-b-2 w-full lg:w-4/5 m-auto md:flex-row flex-col gap-4 mt-8 pb-4">
      <div className="flex justify-center items-center self-start p-2">
        <div className="relative flex-shrink-0 w-[120px] h-[120px] bg-white rounded-lg">
          <Image
            className="  object-contain p-2"
            src={cartProduct.product.imageUrl}
            alt="product"
            fill
          />
        </div>

        <div className="flex flex-col justify-center items-start ml-6">
          <p className="font-semibold text-lg">{cartProduct.product.name}</p>
          <p className="text-left">
            {cartProduct.product.description.slice(0, 180)}...
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-center items-center mb-2">
        {/* <p className="font-bold">{product.item_total_price}$</p> */}
        <p className="font-bold text-lg">
          {cartProduct.product.price * productQuantity}$
        </p>

        <div className="flex justify-center items-center gap-3 bg-primary rounded-2xl px-4 py-1 text-lg text-white h-8 w-24">
          <AiOutlineMinus
            className="fa-solid fa-minus w-10 text-gray-300 hover:text-red-600 hover:scale-110 transition-all active:scale-75 cursor-pointer "
            style={{ pointerEvents: loading && "none" }}
            onClick={() =>
              handleQuantity(cartProduct.quantity - 1, cartProduct.id)
            }
          />
          {/* {loading ? (
            <span className="loading loading-spinner loading-md" />
          ) : ( */}
          {productQuantity}
          {/* )} */}
          <AiOutlinePlus
            className=" hover:text-green-600 hover:scale-110 transition-all active:scale-75 cursor-pointer text-gray-300 w-10"
            style={{ pointerEvents: loading && "none" }}
            onClick={() =>
              handleQuantity(cartProduct.quantity + 1, cartProduct.id)
            }
          />
        </div>
        <div>
          <BsFillTrashFill
            className="w-8 h-8 text-red-400 cursor-pointer hover:text-red-500 p-2"
            style={{ pointerEvents: loading && "none" }}
            onClick={() => handleQuantity(0, cartProduct.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
