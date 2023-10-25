import Image from "next/image";
import home from "public/assets/home.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const CartCard = () => {
  return (
    <div className="flex justify-between items-center border-b-2 w-full lg:w-4/5 m-auto md:flex-row flex-col gap-4">
      <div className="flex justify-center items-center self-start p-2">
        <div className="flex-shrink-0">
          <Image
            className=" w-[120px] h-[140px] object-contain"
            src={home}
            alt="product"
          />
        </div>

        <div className="flex flex-col justify-center items-start ml-6">
          <p className="font-semibold text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, nam!
          </p>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            iste.
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-center items-center mb-2">
        {/* <p className="font-bold">{product.item_total_price}$</p> */}
        <p className="font-bold text-lg">29$</p>

        <div className="flex justify-center items-center gap-4 bg-primary rounded-2xl px-4 py-1 text-lg text-white">
          <AiOutlineMinus className="fa-solid fa-minus text-sm text-gray-300 hover:text-red-600 hover:scale-110 transition-all active:scale-75 cursor-pointer " />
          2
          <AiOutlinePlus className=" hover:text-green-600 hover:scale-110 transition-all active:scale-75 cursor-pointer text-gray-300 text-sm" />
        </div>
        <div>
          <BsFillTrashFill className="w-8 h-8 text-red-400 cursor-pointer hover:text-red-500 p-2" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
