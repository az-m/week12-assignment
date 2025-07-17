import TeacherPetButtons from "@/components/TeacherPetButtons";
import { isTeacher, house } from "@/actions/checkrole";
import { db } from "@/utils/dbConnection";
import PetButtons from "@/components/PetButtons";
import necroStyles from "@/styles/petNecro.module.css";
import natStyles from "@/styles/petNat.module.css";

import NecromancyDragon from "@/components/NecromancyDragon";


export default async function PetPage() {
  const teacher = await isTeacher();
  const houseID = await house();

  const natPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 3`)).rows[0];
  const necroPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 4`))
    .rows[0];

  let styles = {};
  if (houseID == "4") {
    styles = natStyles;
  } else {
    styles = necroStyles;
  }

  return (
    <div className={styles.wrapper}>

      <NecromancyDragon />

      {!teacher && (
        <div className={styles.petScores}>
          <p>
            FOOD:{" "}
            {houseID == "4" ? natPet.pet_food_score : necroPet.pet_food_score}
          </p>
          <p>
            MOOD:{" "}
            {houseID == "4" ? natPet.pet_mood_score : necroPet.pet_mood_score}
          </p>
        </div>
      )}

      {teacher ? (
        <TeacherPetButtons
          natPet={natPet}
          necroPet={necroPet}
          styles={styles}
        />
      ) : (
        <PetButtons houseID={houseID} styles={styles} />
      )}
    </div>
  );
}
