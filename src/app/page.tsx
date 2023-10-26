import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import Image from "next/image";
import home from "public/assets/home.jpg";

const Home = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  console.log(products);

  return (
    <div className="pb-12">
      <div className="w-full h-[680px] relative">
        <Image src={home} alt="home" fill className="" priority />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-2xl font-bold tracking-widest">
          Welcome to Free Shop
        </p>
      </div>
      <h1 className="text-center py-8 text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit gap-8">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
