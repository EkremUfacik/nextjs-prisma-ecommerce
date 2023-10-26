import Image from "next/image";
import { Product } from "@prisma/client";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "@/app/actions/cart-actions";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card w-80 bg-slate-800 hover:shadow-lg hover:shadow-slate-800 pb-4 cursor-pointer transition-all relative group ">
      <Link href={`/product/${product.id}`}>
        <figure className="relative w-full h-80 rounded-t-xl bg-white">
          <Image
            src={product.imageUrl}
            alt="Shoes"
            fill
            className="object-contain p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title  ">
            {product.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="">{product.description.slice(0, 90)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-neutral">Fashion</div>
            <div className="badge badge-secondary">Products</div>
          </div>
          <div className="badge badge-success p-3 text-lg font-bold">
            {product.price}$
          </div>
        </div>
      </Link>
      <AddToCartButton
        productId={product.id}
        incrementProductQuantity={incrementProductQuantity}
        className={
          "absolute -bottom-12 left-1/2 -translate-x-1/2 btn btn-secondary opacity-0 group-hover:-translate-y-6 group-hover:opacity-100 disabled:opacity-80 disabled:bg-blue-950"
        }
      />
    </div>
  );
};

export default ProductCard;
