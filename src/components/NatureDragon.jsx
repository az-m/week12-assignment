//this is the component where the animation frames will be stored
import "../styles/natureDragon.css";
import RewardRibbon from "./RewardRibbon";

export default function NatureDragon({ ribbon }) {
  return (
    <div className="background">
      <div className="dragonContainer"></div>
      {ribbon && <RewardRibbon />}
    </div>
  );
}
