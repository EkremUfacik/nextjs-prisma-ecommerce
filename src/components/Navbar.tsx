import Image from "next/image";
import Link from "next/link";
import shopping from "public/assets/shopping.png";
import NavCart from "./NavCart";
import { getCart } from "@/lib/db/cart";
import UserMenuButtons from "./UserMenuButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="navbar bg-primary h-20">
      <div className="flex-1 h-full">
        <Link href="/" className="btn btn-ghost h-full">
          <Image src={shopping} width={70} height={70} alt="shopping" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto me-4"
          />
        </div>

        <NavCart cart={cart} />

        <UserMenuButtons session={session} />
      </div>
    </div>
  );
};

export default Navbar;
