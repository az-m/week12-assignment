import styles from "@/styles/profile.module.css";
import ThemeButton from "@/components/ThemeButton";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function ProfilePage({ params }) {
  const param = await params;
  const { userId } = await auth();

  if (!userId) {
    return <div>Please sign in to view your profile.</div>;
  }

  const query = await db.query(
    `SELECT * FROM student FULL OUTER JOIN subjects ON student.house_id = subjects.house_id WHERE clerk_id = $1`,
    [userId]
  );

  if (query.rows.length === 0) {
    return <div>Profile not found.</div>;
  }

  const userdata = query.rows[0];

  return (
    <>
      <div className={`${styles.panel} ${styles.panelone}`}>
        IMAGE HERE (conditionally rendered for house?)
      </div>
      <div className={`${styles.panel} ${styles.paneltwo}`}>
        <h1>
          Welcome {userdata.first_name} {userdata.family_name}!
        </h1>
      </div>
      <div className={`${styles.panel} ${styles.panelthree}`}>
        <h2>Accessibility toggles:</h2>
        <ThemeButton />
      </div>
      <div className={`${styles.panel} ${styles.panelfour}`}>
        <h2>Class Schedule:</h2>
        <div className={styles.box}></div>
        {userdata.classes}
      </div>
    </>
  );
}
