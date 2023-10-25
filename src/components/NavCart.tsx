"use client";

import { ShoppingCart } from "@/lib/db/cart";
import Link from "next/link";

const NavCart = ({ cart }: { cart: ShoppingCart | null }) => {
  const closeDropdowm = () => {
    const dropdown = document.activeElement as HTMLElement;
    if (dropdown) dropdown.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item badge-neutral">
            {cart?.size}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{cart?.size} Products</span>
          <span className="text-info">Subtotal: ${cart?.subtotal}</span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeDropdowm}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCart;
