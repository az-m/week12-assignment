"use client";

import { interactPet } from "@/actions/naturepet";

export default function NaturePetButtons() {
  function handleClick(act) {
    interactPet(act);
  }
  return (
    <>
      <button onClick={() => handleClick("feed")}>Feed</button>
      <button onClick={() => handleClick("play")}>Play</button>
    </>
  );
}
