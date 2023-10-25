import Image from "next/image";
import Link from "next/link";
import profile from "public/assets/profile.png";
import shopping from "public/assets/shopping.png";
import NavCart from "./NavCart";
import { getCart } from "@/lib/db/cart";

const Navbar = async () => {
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

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="bg-white rounded-full">
              <Image src={profile} width={30} height={30} alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="#">Settings</Link>
            </li>
            <li>
              <Link href="#">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
