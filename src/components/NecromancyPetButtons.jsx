"use client";
//this needs to be client as the user will interact with it

import { interactionNecromancy } from "@/actions/necromancy";
import { db } from "@/utils/dbConnection";

//we need a function in order to get current stats .. best to write it on this page and map the information using .map(stat)  ?

//one function needed to HANDLE a user clicking > this function is basically the logic written in the necromancy dot js file
export default function NecromancyPetButtons() {
  function handleClick(act) {
    interactionNecromancy(act);
  }
  return (
    <>
      <button onClick={() => handleClick("feed")}>feed the dragon</button>
      <button onClick={() => handleClick("play")}>play with the dragon</button>
    </>
  );
}
