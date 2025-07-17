import TeacherPetButtons from "@/components/TeacherPetButtons";
import { isTeacher, house, hasRecord } from "@/actions/checkrole";
import { db } from "@/utils/dbConnection";
import PetButtons from "@/components/PetButtons";
import necroStyles from "@/styles/petNecro.module.css";
import natStyles from "@/styles/petNat.module.css";
import { redirect } from "next/navigation";
import NecromancyDragon from "@/components/NecromancyDragon";
import NatureDragon from "@/components/NatureDragon";
import Apple from "@/components/Apple";
import Music from "@/components/Music";


export default async function PetPage() {
  const teacher = await isTeacher();
  const houseID = await house();
  if (!teacher) {
    const hasprofile = await hasRecord();

    if (!hasprofile) {
      redirect("/create-profile");
    }
  }
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
      <Music />
      <NecromancyDragon />
      <NatureDragon />
      <Apple />

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
