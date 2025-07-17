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
  <div className="min-h-screen bg-[#882c57] flex flex-col items-center justify-center p-8">
    <h1 className="rounded-lg text-center text-xl font-bold text-white mb-6 hover:text-2xl text-purple  duration-500">
      Create Student Profile
    </h1>

    <form action={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg border-black hover:shadow-[0_0_20px_4px_rgba(253,224,71,0.8)] transition-all duration-500">

      <fieldset className="flex flex-col gap-2 bg-[#f4d6e9">
        <legend className="font-bold  mb-2">Student Details</legend>

        <label htmlFor="first_name" >First Name:</label>
        <input
          type="text"
          name="first_name"
          required
          className="mb-2 p-2 rounded bg-[#f4d6e9] "
        />

        <label htmlFor="family_name">Family Name:</label>
        <input
          type="text"
          name="family_name"
          required
          className="mb-2 p-2 rounded bg-[#f4d6e9] "
        />

        <label htmlFor="form_id"></label>
        <select name="form_id" required className="bg-[#f4d6e9] mb-2 p-2 rounded">
          <option value="">Select Form</option>
          {forms.map((form) => (
            <option key={form.form_id} value={form.form_id}>
              {form.name}
            </option>
          ))}
        </select>

        <label htmlFor="house_id"></label>
        <select name="house_id" required className="bg-[#f4d6e9]  mb-2 p-2 rounded">
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
        className="w-full mt-4 border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  </div>
);
}
