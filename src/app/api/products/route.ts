import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const newProduct = await prisma.product.create({
      data: body,
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};
