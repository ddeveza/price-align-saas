import { db } from "@/drizzle/db";
import { ProductTable, UserSubscriptionTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function deleteUser(clerkUserId: string) {
  try {
    return await db.batch([
      db
        .delete(UserSubscriptionTable)
        .where(eq(UserSubscriptionTable.clerkUserId, clerkUserId)),
      db.delete(ProductTable).where(eq(ProductTable.clerkUserId, clerkUserId)),
    ]);
  } catch (error) {
    console.error(`Failed to delete user data for ${clerkUserId}:`, error);
  }
}
