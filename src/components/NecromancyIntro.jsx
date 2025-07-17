//taking the house intro copy sections out of the main page as it was getting too cluttered
import "../styles/homepageCopy.css";
import Image from "next/image";
export default function NecroIntro() {
  return (
    <>
      {" "}
      {/* IMAGE NEEDS TO BE REPLACED */}
      <Image
        src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
        width={990}
        height={800}
        alt="A pink dragon, representing nature floats in the air. Pink cherry blossom petals fall around it."
        placeholder="empty"
        loading="lazy"
      />
      <div className="copyNParagraph">
        <p>
          {" "}
          Or you could study in{" "}
          <span className="spanNe">House Necromancy!</span>
        </p>
        <p>
          {" "}
          As a new student, you will first take a Do No Harm oath before
          unearthing the opportunities that await you.
        </p>
        <p>
          Students will choose one currently-dead intellect, artist or scientist
          as their mentor, and work toward raising them in time for their final
          presentation.
        </p>

        <p>
          {" "}
          No need to panic, parents! This is a years-long aim, and we take care
          to teach your child about this great responsibility.{" "}
        </p>

        <p>
          Many past students from{" "}
          <span className="spanNe">House Necromancy</span> have gone on to
          become private investigators, helping solve years-old cold cases with
          the help of the victims themselves.{" "}
        </p>
      </div>
    </>
  );
}
