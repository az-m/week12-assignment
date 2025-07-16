import NaturePetButtons from "@/components/NaturePetButtons";
import NecromancyPetButtons from "@/components/NecromancyPetButtons";
import TeacherPetButtons from "@/components/TeacherPetButtons";
import { isTeacher, house } from "@/actions/checkrole";
import { db } from "@/utils/dbConnection";

export default async function PetPage() {
  const teacher = await isTeacher();
  const houseID = await house();

  const natPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 3`)).rows[0];
  const necroPet = (await db.query(`SELECT * FROM pet WHERE pet_id = 4`))
    .rows[0];

  return (
    <>
      <div>HERE WILL BE A PET</div>
      {houseID == "4" && <NaturePetButtons />}
      {houseID == "5" && <NecromancyPetButtons />}
      {teacher && <TeacherPetButtons natPet={natPet} necroPet={necroPet} />}
    </>
  );
}
