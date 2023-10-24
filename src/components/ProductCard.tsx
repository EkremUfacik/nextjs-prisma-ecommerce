import Image from "next/image";
import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card w-80 bg-slate-800 hover:shadow-lg hover:shadow-slate-800 pb-4 cursor-pointer transition-all relative group ">
      <Link href={`/product/${product.id}`}>
        <figure className="relative w-full h-80 rounded-t-xl">
          <Image
            src={product.imageUrl}
            alt="Shoes"
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-neutral">Fashion</div>
            <div className="badge badge-secondary">Products</div>
          </div>
          <div className="badge badge-success p-3 font-bold">20$</div>
        </div>
      </Link>
      <button className="absolute -bottom-12 left-1/2 -translate-x-1/2 btn btn-secondary opacity-0 group-hover:-translate-y-6 group-hover:opacity-100 ">
        Add Cart
      </button>
    </div>
  );
};

export default ProductCard;
