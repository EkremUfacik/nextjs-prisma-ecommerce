import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import home from "public/assets/home.jpg";
import { incrementProductQuantity } from "@/app/actions/cart-actions";

const ProductDetails = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-center w-2/3 py-20 mx-auto">
      <Image
        src={home}
        alt="product"
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-3xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus,
          atque quisquam id eos nesciunt possimus in veritatis dolorem delectus
          quae non, rem autem ratione aliquam reiciendis voluptatem ex nulla.
        </h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          soluta, quis animi officia ab reprehenderit labore nam beatae
          consequatur amet, itaque vitae ex sit officiis id, quas exercitationem
        </p>
        <p className="mb-8 font-bold text-lg">
          Price: <span className="badge badge-neutral p-3 text-lg">49$</span>
        </p>
        <AddToCartButton
          productId={id}
          incrementProductQuantity={incrementProductQuantity}
          className={"btn btn-info disabled:bg-current"}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
