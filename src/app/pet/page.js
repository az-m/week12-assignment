import TeacherPetButtons from "@/components/TeacherPetButtons";
import { isTeacher, house } from "@/actions/checkrole";
import { db } from "@/utils/dbConnection";
import PetButtons from "@/components/PetButtons";
import natStyles from "@/styles/petNat.module.css";

export default async function PetPage() {
  const teacher = await isTeacher();
  const houseID = await house();

  const natPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 3`)).rows[0];
  const necroPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 4`))
    .rows[0];

  let styles = natStyles;
  return (
    <>
      <div>HERE WILL BE A PET</div>
      {teacher ? (
        <TeacherPetButtons
          natPet={natPet}
          necroPet={necroPet}
          styles={styles}
        />
      ) : (
        <PetButtons houseID={houseID} styles={styles} />
      )}
    </>
  );
}
