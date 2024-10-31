import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import NoProducts from "./_component/empty-products";

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();

  if (userId === null) return redirectToSignIn();

  const products = await getProducts(userId, { limit: 6 });

  if (products?.length === 0) return <NoProducts />;

  return <div>page</div>;
}
