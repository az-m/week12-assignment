"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export async function saveChat({ parentId = null }, formData) {
  const user = await currentUser();

  const userID = (
    await db.query(`SELECT student_id FROM student WHERE clerk_id = $1`, [
      user.id,
    ])
  ).rows[0].student_id;

  await db.query(
    `INSERT INTO posts (student_id, text, parent_post_id) VALUES ($1, $2, $3)`,
    [userID, formData.get("text"), parentId]
  );

  revalidatePath(`/chat`);
  return { success: true };
}
