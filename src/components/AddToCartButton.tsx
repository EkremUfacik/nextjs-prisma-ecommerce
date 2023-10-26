"use client";

import { useState, useTransition } from "react";

interface props {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
  className: string;
}

const AddToCartButton = ({
  productId,
  incrementProductQuantity,
  className,
}: props) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleAddToCart = () => {
    startTransition(async () => {
      await incrementProductQuantity(productId);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    });
  };

  return (
    <div className="">
      <button
        className={`${className} w-28 transition-all`}
        disabled={isPending}
        onClick={handleAddToCart}
      >
        {isPending ? (
          <span className="loading loading-spinner loading-md " />
        ) : (
          "Add Cart"
        )}
      </button>
      {success && (
        <div className="toast toast-bottom toast-end z-40">
          <div className="alert alert-info">
            <span>Product added.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
