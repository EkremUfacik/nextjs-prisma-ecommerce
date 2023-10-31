"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import profile from "public/assets/profile.png";

const UserMenuButtons = ({ session }: { session: Session | null }) => {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="bg-white rounded-full">
          <Image
            src={user?.image || profile}
            width={30}
            height={30}
            alt="profile"
          />
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
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButtons;
