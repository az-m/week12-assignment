//TODO: I want to have a form here to collect Student Data
// this a server component

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function CreateProfile() {
  // server function --> an asynchronous function that runs in the server
  async function handleSubmit(formData) {
    //we need to tell Next to run this function in the server
    "use server";

    // extracting the userId from clerk
    const { userId } = await auth();
    if (!userId) {
      console.log("User not found or not authenticated");
      return;
    }

    //collect the data
    formData = {
      first_name: formData.get("first_name"),
      family_name: formData.get("family_name"),
      form_id: formData.get("form_id"),
      house_id: formData.get("house_id"),
    };

    //insert the data into the database
    const studentID = (
      await db.query(
        `INSERT INTO student (first_name,family_name,form_id,house_id,clerk_id) VALUES ($1, $2, $3, $4, $5) RETURNING student_id`,
        [
          formData.first_name,
          formData.family_name,
          formData.form_id,
          formData.house_id,
          userId,
        ]
      )
    ).rows[0].student_id;

    //when we submit new data into the table, we need to revalidate the cache
    revalidatePath("/create-profile");
    //redirect to profilepage after signup
    redirect(`/profile/${studentID}`);
  }

  return (
    <>
      <h1>Student Profile</h1>

      <form action={handleSubmit}>
        <fieldset>
          <legend>Student Details</legend>

          <label htmlFor="first_name">First Name: </label>
          <input type="text" name="first_name" required />

          <label htmlFor="family_name">Family Name</label>
          <input type="text" name="family_name" required />
          <label htmlFor="form_id">Form ID</label>
          <select name="form_id">
            <option value=""> Select Form</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="house_id">House ID</label>
          <select name="house_id">
            <option value=""> Select House ID</option>
            <option value="3">Nature</option>
            <option value="4">Necromancy</option>
          </select>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
