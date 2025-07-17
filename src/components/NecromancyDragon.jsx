//this is the component where the animation frames will be stored

import "../styles/necromancyDragon.css";
import RewardRibbon from "./RewardRibbon";

export default function NecromancyDragon({ ribbon }) {
  return (
    <div className="backgroundImage">
      <div className="spriteContainer"></div>
      {ribbon && <RewardRibbon />}
    </div>
  );
}
