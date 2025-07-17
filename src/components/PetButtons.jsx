"use client";

import { interactPet } from "@/actions/interactpet";
import Image from "next/image";

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
          {" "}
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//apple2.png"
            width={80}
            height={100}
            alt="A red apple with a bite taken out of it"
            placeholder="empty"
            loading="lazy"
          />
        </button>
        <button
          className={styles.petButton}
          onClick={(e) => handleClick(e, "play", houseID)}
        >
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//Pipes3.png"
            width={80}
            height={100}
            alt="A panpipe with music notes around it"
            placeholder="empty"
            loading="lazy"
          />
        </button>
      </section>
    </>
  );
}
