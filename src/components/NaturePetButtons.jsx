"use client";

import { interactPet } from "@/actions/naturepet";

export default function NaturePetButtons() {
  return (
    <>
      <button onClick={() => interactPet("feed")}>Feed</button>
      <button onClick={() => interactPet("play")}>Play</button>
    </>
  );
}
