import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const product: Product | null = await prisma.product.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(product, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};
