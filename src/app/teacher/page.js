import { db } from "@/utils/dbConnection";
import styles from "@/styles/teacherProfile.module.css";
import Link from "next/link";
import { hasRecord } from "@/actions/checkrole";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function TeacherPage() {
  const { userId } = await auth();

  const teacher = (
    await db.query(`SELECT * FROM teacher WHERE clerk_id = $1`, [userId])
  ).rows[0];

  const hasprofile = await hasRecord();

  if (!teacher) {
    if (!hasprofile) {
      redirect("/create-profile");
    } else {
      return "You are not a teacher";
    }
  }

  const { rows: students } = await db.query(
    `SELECT student_id, first_name, family_name, name AS form_name FROM student JOIN form ON student.form_id = form.form_id WHERE student.form_id = $1`,
    [teacher.form_id]
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{teacher.name}</h2>
      <div className={styles.form}>
        <h3 className={styles.header}>{students[0].form_name}</h3>
        <ul className={styles.list}>
          {students.map((student) => (
            <li key={student.student_id} className={styles.item}>
              <Link href={`/profile/${student.student_id}`}>
                {student.first_name}
                {` `}
                {student.family_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
