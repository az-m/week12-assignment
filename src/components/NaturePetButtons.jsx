"use client";
import { IconBoom, IconCheese } from "@tabler/icons-react";

import { interactPet } from "@/actions/naturepet";

export default function NaturePetButtons() {
  return (
    <section className="buttonSection">
      <button className="petButton" onClick={() => interactPet("feed")}>
        <IconCheese />
      </button>
      <button className="petButton" onClick={() => interactPet("play")}>
        <IconBoom />
      </button>
    </section>
  );
}
