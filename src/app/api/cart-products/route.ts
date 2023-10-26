import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const { id, quantity } = await req.json();
    if (quantity === 0) {
      await prisma.cartItem.delete({
        where: { id },
      });
    } else {
      await prisma.cartItem.update({
        where: { id },
        data: { quantity },
      });
    }

    // const newProduct = await prisma.product.create({
    //   data: body,
    // });
    return NextResponse.json({ message: "Updated" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};
