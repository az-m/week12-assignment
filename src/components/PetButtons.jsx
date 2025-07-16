"use client";
import { IconBoom, IconCheese } from "@tabler/icons-react";
import { interactPet } from "@/actions/interactpet";

export default function PetButtons({ houseID, styles }) {
  function handleClick(e, type, houseID) {
    interactPet(type, houseID);
    const el = e.currentTarget;
    setTimeout(
      () => {
        el.blur();
      },
      "1000",
      el
    );
  }
  return (
    <section className={styles.buttonSection}>
      <button
        className={styles.petButton}
        onClick={(e) => handleClick(e, "feed", houseID)}
      >
        <IconCheese className="text-black" />
      </button>
      <button
        className={styles.petButton}
        onClick={(e) => handleClick(e, "play", houseID)}
      >
        <IconBoom className="text-black" />
      </button>
    </section>
  );
}
