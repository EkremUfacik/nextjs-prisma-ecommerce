import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { incrementProductQuantity } from "@/app/actions/cart-actions";
import { Product } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";

const ProductDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product: Product | null = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  console.log(product);

  if (!product) return notFound();

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-center w-3/4 mb-48 mt-32 mx-auto">
      <div className="relative w-full h-[400px] bg-white rounded-lg lg:flex-1">
        <Image
          src={product.imageUrl}
          alt="product"
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      <div className="flex-[2]">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="py-6">{product.description}</p>
        <p className="mb-8 font-bold text-lg">
          Price:{" "}
          <span className="badge badge-neutral p-3 text-lg">
            {product.price}$
          </span>
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
