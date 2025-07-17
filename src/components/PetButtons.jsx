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

  //function to animate when eating

  //function to animate when playing

  //function to animate when eating is clicked (handleclickEating)()

  return (
    <>
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
    </>
  );
}
