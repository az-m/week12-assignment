"use server";

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export async function interactPet(act, houseID) {
  const petID = (
    await db.query(`SELECT house_pet_id FROM house WHERE house_id = $1`, [
      houseID,
    ])
  ).rows[0].house_pet_id;

  switch (act) {
    case "feed":
      db.query(
        `UPDATE pet SET pet_mood_score = pet_mood_score - $1, pet_food_score = pet_food_score + $2 WHERE pet_id = $3`,
        [1, 2, petID]
      );
      break;

    case "play":
      db.query(
        `UPDATE pet SET pet_mood_score = pet_mood_score + $1, pet_food_score = pet_food_score - $2 WHERE pet_id = $3`,
        [2, 1, petID]
      );
      break;
  }
  revalidatePath(`/pet`);
}
