"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
  name: z.string().min(3),
  description: z.string().min(5),
  imageUrl: z.string(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
});

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/products", { ...data, price: Number(data.price) });
    } catch (err) {
      console.log(err);
    }
  });

  console.log(errors);

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold py-8">Add Product</h1>
      <form
        className="flex flex-col justify-center items-center max-w-2xl mx-auto gap-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Product name"
          className="input input-bordered input-ghost w-full"
          {...register("name")}
        />
        <textarea
          placeholder="Product description"
          rows={6}
          className="textarea textarea-bordered textarea-ghost w-full resize-none"
          {...register("description")}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered input-ghost w-full"
          {...register("imageUrl")}
        />
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered input-ghost w-full"
          {...register("price")}
        />
        <button className="btn btn-block" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
