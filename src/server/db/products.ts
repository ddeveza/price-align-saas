import { db } from "@/drizzle/db";

export function getProducts(userId: string, { limit }: { limit?: number }) {
  try {
    return db.query.ProductTable.findMany({
      where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
      orderBy: ({ createdAt }, { desc }) => desc(createdAt),
      limit,
    });
  } catch (error) {
    console.log("Error on getProducts clerkUserId", error);
  }
}
