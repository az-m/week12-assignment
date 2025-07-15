"use server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export async function isTeacher() {
  const user = await currentUser();

  const isTeacher = (
    await db.query(`SELECT teacher_id FROM teacher WHERE clerk_id = $1`, [
      user.id,
    ])
  ).rows[0];

  return isTeacher;
}
