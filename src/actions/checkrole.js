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

export async function house() {
  const user = await currentUser();

  const house = (
    await db.query(`SELECT house_id FROM student WHERE clerk_id = $1`, [
      user.id,
    ])
  ).rows[0];

  let houseID;
  if (house ? (houseID = house.house_id) : null) return houseID;
}

export async function hasRecord() {
  const user = await currentUser();

  const hasRecord = (
    await db.query(`SELECT student_id FROM student WHERE clerk_id = $1`, [
      user.id,
    ])
  ).rows[0];

  return hasRecord;
}
