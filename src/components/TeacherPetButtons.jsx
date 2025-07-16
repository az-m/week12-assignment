"use client";
import { rewardPet } from "@/actions/teacherpet";

export default function TeacherPetButtons({ natPet, necroPet, styles }) {
  console.log(natPet);
  return (
    <>
      <h2>House Nature</h2>
      <section className="">
        <button className="" onClick={() => rewardPet(3, "ribbon")}>
          {natPet.acc_ribbon ? "Remove Ribbon" : "Give Ribbon"}
        </button>
        <button className="" onClick={() => rewardPet(3, "party")}>
          {natPet.acc_party ? "Stop Party" : "Throw Party"}
        </button>
      </section>
      <h2>House Necromancy</h2>
      <section className="">
        <button className="" onClick={() => rewardPet(4, "ribbon")}>
          {necroPet.acc_ribbon ? "Remove Ribbon" : "Give Ribbon"}
        </button>
        <button className="" onClick={() => rewardPet(4, "party")}>
          {necroPet.acc_party ? "Stop Party" : "Throw Party"}
        </button>
      </section>
    </>
  );
}
