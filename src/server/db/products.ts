import { db } from "@/drizzle/db";
import { ProductCustomizationTable, ProductTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

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

export async function createProduct(data: typeof ProductTable.$inferInsert) {
  const [newProduct] = await db
    .insert(ProductTable)
    .values(data)
    .returning({ id: ProductTable.id });

  try {
    await db
      .insert(ProductCustomizationTable)
      .values({
        productId: newProduct.id,
      })
      .onConflictDoNothing({
        target: ProductCustomizationTable.productId,
      });
  } catch (error) {
    await db.delete(ProductTable).where(eq(ProductTable.id, newProduct.id));
    console.log("Error on Creating Product Customization", error);
  }

  return newProduct;
}
