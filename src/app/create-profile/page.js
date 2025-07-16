//TODO: I want to have a form here to collect Student Data
// this a server component






import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";



export default async function CreateProfile() {
  // Get current user details
  const user = await currentUser();
  const { userId } = await auth();

  // Check if student already exists
  const existing = await db.query(
    `SELECT student_id FROM student WHERE clerk_id = $1`,
    [userId]
  );

  if (existing.rows.length > 0) {
    const studentID = existing.rows[0].student_id;
    return redirect("/pet"  )      // this has to be changed to the profile when it's ready       
    //  /profile/${studentID}`);
  }


  const { rows: forms } = await db.query(`SELECT * FROM form`);
  const { rows: houses } = await db.query(`SELECT * FROM house`);


  async function handleSubmit(formData) {
    "use server";

    const { userId } = await auth();

    const first_name = formData.get("first_name");
    const family_name = formData.get("family_name");
    const form_id = formData.get("form_id");
    const house_id = formData.get("house_id");

    const result = await db.query(
      `INSERT INTO student (first_name, family_name, form_id, house_id, clerk_id)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING student_id`,
      [first_name, family_name, form_id, house_id, userId]
    );

    const studentID = result.rows[0].student_id;

    revalidatePath("/create-profile");
    redirect("/chat")      // this has to be changed to the profile when it's ready  
      // `/profile/${studentID}`); 
  }


  return (
    <>
      <h1>Create Student Profile</h1>

      <form action={handleSubmit}>
        <fieldset>
          <legend>Student Details</legend>

          <label htmlFor="first_name">First Name:</label>
          <input type="text" name="first_name" required />

          <label htmlFor="family_name">Family Name:</label>
          <input type="text" name="family_name" required />

          <label htmlFor="form_id">Form:</label>
          <select name="form_id" required>
            <option value="">Select Form</option>
            {forms.map((form) => (
              <option key={form.form_id} value={form.form_id}>
                {form.name}
              </option>
            ))}
          </select>

          <label htmlFor="house_id">House:</label>
          <select name="house_id" required>
            <option value="">Select House</option>
            {houses.map((house) => (
              <option key={house.house_id} value={house.house_id}>
                {house.text}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

