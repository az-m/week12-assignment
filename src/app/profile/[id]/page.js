import necroStyles from "@/styles/profileNecro.module.css";
import natStyles from "@/styles/profileNat.module.css";
import ThemeButtons from "@/components/ThemeButtons";
import { notFound } from "next/navigation";
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function ProfilePage({ params }) {
  const thisuser = (await params).id;

  if (!parseInt(thisuser)) {
    notFound();
  }

  const query = await db.query(
    `SELECT * FROM student FULL OUTER JOIN subjects ON student.house_id = subjects.house_id WHERE student_id = $1`,
    [thisuser]
  );

  if (query.rows.length === 0) {
    notFound();
  }

  const userdata = query.rows[0];
  const lessons = query.rows;

  let styles = {},
    house = "";
  if (userdata.house_id == "4") {
    styles = natStyles;
    house = "nat";
  } else {
    styles = necroStyles;
    house = "necro";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.panelone}>
        {house == "nat" ? (
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
            width={990}
            height={800}
            alt="A pink dragon, representing nature floats in the air. Pink cherry blossom petals fall around it."
            placeholder="empty"
            loading="lazy"
          />
        ) : (
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
            width={990}
            height={800}
            alt="A pink dragon, representing necromancy floats in the air. Pink cherry blossom petals fall around it."
            placeholder="empty"
            loading="lazy"
          />
        )}
      </div>
      <div className={styles.paneltwo}>
        <h1>
          Welcome {userdata.first_name} {userdata.family_name}!
        </h1>
      </div>
      <div className={styles.panelfour}>
        <h2 className="text-zinc-900">Class Schedule:</h2>
        <div className={styles.box}>
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.subject_id} className={styles.lesson}>
                {lesson.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.panelthree}>
        <h2 className="text-zinc-900">Accessibility toggles:</h2>
        <ThemeButtons styles={styles} />
      </div>
    </div>
  );
}
