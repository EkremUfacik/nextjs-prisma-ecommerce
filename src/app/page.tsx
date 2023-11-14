import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import Image from "next/image";
import home from "public/assets/home.jpg";

type props = {
  searchParams: { search: string; page: string };
};

const Home = async ({ searchParams: { search, page = "1" } }: props) => {
  console.log(page);

  console.log(search);

  const totalItems = await prisma.product.count();
  console.log(totalItems);
  const pageSize = 6;
  const totalPages = Math.ceil(totalItems / pageSize);

  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
    skip: (Number(page) - 1) * pageSize,
    take: pageSize,
    where: {
      OR: [
        { name: { contains: search || "", mode: "insensitive" } },
        { description: { contains: search || "", mode: "insensitive" } },
      ],
    },
  });
  console.log(products);

  return (
    <div className="pb-10">
      <div className="w-full h-[680px] relative">
        <Image src={home} alt="home" fill className="" priority />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-2xl font-bold tracking-widest">
          Welcome to Free Shop
        </p>
      </div>
      <h1 className="text-center my-16 text-3xl font-bold">Products</h1>
      {products.length === 0 ? (
        <p className="text-center my-10 text-xl">Product was not found!!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit gap-8">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination totalPages={totalPages} currentPage={Number(page)} />
    </div>
  );
};

export default Home;
