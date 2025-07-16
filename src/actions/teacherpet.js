"use server";

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export async function rewardPet(house, type) {
  await db.query(
    `UPDATE pet SET acc_${type} = NOT acc_${type} WHERE pet_id = $1`,
    [house]
  );

  revalidatePath(`/pet`);
}
