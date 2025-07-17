import Navbar from "./Navbar";
import { isTeacher } from "@/actions/checkrole";
import { auth } from "@clerk/nextjs/server"; //the auth object contains all user's data eg userid
import styles from "@/styles/footer.module.css";
import { db } from "@/utils/dbConnection";
import { SignOutButton } from "@clerk/nextjs";

export default async function Footer() {
  const { userId } = await auth();
  const teacher = await isTeacher();

  let profile;
  if (!teacher) {
    const student = (
      await db.query(`SELECT student_id FROM student WHERE clerk_id = $1`, [
        userId,
      ])
    ).rows[0];
    if (!student) {
      profile = null;
    } else {
      profile = `/profile/${student.student_id}`;
    }
  } else {
    profile = `/teacher`;
  }

  // console.log(userId)

  return (
    <div className={styles.footerFlex}>
      <Navbar styles={styles} profile={profile} />
      {/* <UserButton /> */}
      <SignOutButton />
    </div>
  );
}

//we can delete the signed in tool from clerk here, as the footer only displays on sign-in anyway, so having additional conditional rendering is redundant
