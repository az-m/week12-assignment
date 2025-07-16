"use client";
import { IconBoom, IconCheese } from "@tabler/icons-react";
import { interactPet } from "@/actions/interactpet";

export default function PetButtons({ houseID, styles }) {
  return (
    <section className="buttonSection">
      <button
        className="petButton"
        onClick={() => interactPet("feed", houseID)}
      >
        <IconCheese />
      </button>
      <button
        className="petButton"
        onClick={() => interactPet("play", houseID)}
      >
        <IconBoom />
      </button>
    </section>
  );
}
