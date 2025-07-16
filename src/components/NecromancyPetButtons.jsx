"use client";
import { IconBoom, IconCheese } from "@tabler/icons-react";
//this needs to be client as the user will interact with it

import { interactPet } from "@/actions/necromancypet";

//we need a function in order to get current stats .. best to write it on this page and map the information using .map(stat)  ?

//one function needed to HANDLE a user clicking > this function is basically the logic written in the necromancy dot js file
export default function NecromancyPetButtons() {
  return (
    <section className="buttonSection">
      <button onClick={() => interactPet("feed")}>
        <IconCheese />
      </button>
      <button onClick={() => interactPet("play")}>
        <IconBoom />
      </button>
    </section>
  );
}
