//this should hold all the logic for the buttons to work re:the necromancy dragon
//splitting this by house for animations sake

//we will also need to control the teacher boolean here (unless we write it directly into a toggle)
"use server";

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

/* const starting_food = await db.query(
  `SELECT pet_food_score FROM pet WHERE pet_id = 4`
);
console.log(starting_food, "FOOD"); //for testing

const starting_fun = await db.query(
  `SELECT pet_mood_score FROM pet WHERE pet_id = 4`
);
console.log(starting_fun, "FUN"); //for testing
 */
//THIS WAS FOR TESTING - no longer needed, but I will leave it in here

export async function interactionNecromancy(act) {
  switch (act) {
    case "feed":
      db.query(
        `UPDATE pet SET pet_mood_score = pet_mood_score - $1, pet_food_score = pet_food_score + $2 WHERE pet_id = $3`,
        [1, 2, 4]
      );
      break;

    case "play":
      db.query(
        `UPDATE pet SET pet_mood_score = pet_mood_score + $1, pet_food_score = pet_food_score - $2 WHERE pet_id = $3`,
        [2, 1, 4]
      );
      break;
  }
  //page should be updated after an interaction
  revalidatePath(`/pet`);
}
