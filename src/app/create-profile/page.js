//TODO: I want to have a form here to collect Student Data
// this a server component

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function CreateProfile() {
  // Get current user details
  const { userId } = await auth();

  // Check if student already exists
  const existing = await db.query(
    `SELECT student_id FROM student WHERE clerk_id = $1`,
    [userId]
  );

  console.log(existing);
  if (existing.rows.length > 0) {
    const studentID = existing.rows[0].student_id;
    redirect(`/profile/${studentID}`);
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
    redirect(`/profile/${studentID}`);
  }

  return (
    <div className="p-4 bg-amber-900 h-[100dvh]">
      <h1 className="text-center text-xl">Create Student Profile</h1>

      <form action={handleSubmit}>
        <fieldset className="flex flex-col mt-10">
          <legend className="font-semibold">Student Details</legend>

          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            required
            className="border mb-2 pl-2"
          />

          <label htmlFor="family_name">Family Name:</label>
          <input
            type="text"
            name="family_name"
            required
            className="border mb-2 pl-2"
          />

          <label htmlFor="form_id">Form:</label>
          <select name="form_id" required className="bg-amber-800 mb-2">
            <option value="">Select Form</option>
            {forms.map((form) => (
              <option key={form.form_id} value={form.form_id}>
                {form.name}
              </option>
            ))}
          </select>

          <label htmlFor="house_id">House:</label>
          <select name="house_id" required className="bg-amber-800 mb-2">
            <option value="">Select House</option>
            {houses.map((house) => (
              <option key={house.house_id} value={house.house_id}>
                {house.text}
              </option>
            ))}
          </select>
        </fieldset>
        <button
          type="submit"
          className="bg-amber-950 border-1 rounded-md p-3 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
