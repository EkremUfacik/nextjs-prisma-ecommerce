// import { NextRequest, NextResponse } from "next/server";
// import { Prisma } from "@prisma/client";
// import { cookies } from "next/headers";
// import { prisma } from "@/lib/db/prisma";

// export type CartWithProducts = Prisma.CartGetPayload<{
//   include: { items: { include: { product: true } } };
// }>;

// export type CartItemWithProduct = Prisma.CartItemGetPayload<{
//   include: { product: true };
// }>;

// export type ShoppingCart = CartWithProducts & {
//   size: number;
//   subtotal: number;
// };

// export const createCart = async (): Promise<ShoppingCart> => {
//   const newCart = await prisma.cart.create({
//     data: {},
//   });
//   console.log(newCart, "newCart");

//   cookies().set("localCartId", newCart.id);

//   return {
//     ...newCart,
//     items: [],
//     size: 0,
//     subtotal: 0,
//   };
// };

// export const getCart = async (): Promise<ShoppingCart | null> => {
//   const localCartId = cookies().get("localCartId")?.value;
//   console.log(localCartId, "localCartId");
//   const cart = localCartId
//     ? await prisma.cart.findUnique({
//         where: { id: localCartId },
//         include: { items: { include: { product: true } } },
//       })
//     : await createCart();

//   if (!cart) {
//     return null;
//   }

//   return {
//     ...cart,
//     size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
//     subtotal: cart.items.reduce(
//       (acc, item) => acc + item.quantity * item.product.price,
//       0
//     ),
//   };
// };

// export const GET = async (req: NextRequest) => {
//   try {
//     const newCart = await prisma.cart.create({
//       data: {},
//     });
//     console.log(newCart, "newCart");
//     cookies().set("localCartId", newCart.id);

//     const cart = { ...newCart, items: [], size: 0, subtotal: 0 };
//     // const cart = await getCart();
//     // console.log(cart, "cart");
//     const response = NextResponse.json(cart, { status: 200 });
//     response.cookies.set({
//       name: "localCartId",
//       value: cart?.id || "",
//       maxAge: 60 * 60 * 24 * 30,
//     });
//     return response;
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err, { status: 500 });
//   }
// };
