"use client";
import { rewardPet } from "@/actions/teacherpet";

export default function TeacherPetButtons({ natPet, necroPet, styles }) {
  return (
    <div className={styles.teacherOptions}>
      <h2 className={styles.nathead}>House Nature</h2>
      <section className={styles.awards}>
        <button
          className={styles.button}
          onClick={() => rewardPet(3, "ribbon")}
        >
          {natPet.acc_ribbon ? "Remove Ribbon" : "Give Ribbon"}
        </button>
        <button className={styles.button} onClick={() => rewardPet(3, "party")}>
          {natPet.acc_party ? "Stop Party" : "Throw Party"}
        </button>
      </section>
      <h2 className={styles.necrohead}>House Necromancy</h2>
      <section className={styles.awards}>
        <button
          className={styles.button}
          onClick={() => rewardPet(4, "ribbon")}
        >
          {necroPet.acc_ribbon ? "Remove Ribbon" : "Give Ribbon"}
        </button>
        <button className={styles.button} onClick={() => rewardPet(4, "party")}>
          {necroPet.acc_party ? "Stop Party" : "Throw Party"}
        </button>
      </section>
    </div>
  );
}
