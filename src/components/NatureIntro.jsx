//taking the house intro copy sections out of the main page as it was getting too cluttered
import "../styles/homepageCopy.css";
import Image from "next/image";
export default function NatureIntro() {
  return (
    <>
      <Image
        src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
        width={990}
        height={800}
        alt="A pink dragon, representing nature floats in the air. Pink cherry blossom petals fall around it."
        placeholder="empty"
        loading="lazy"
      />
      <div className="copyParagraph">
        <p>
          If you think <span className="spanNat">House Nature</span> is just
          about plants, think again!{" "}
        </p>

        <p>
          In <span className="spanNat">House Nature,</span> our students master
          their control over biomancy: the magic of life.
        </p>
        <p>
          The students from <span className="spanNat">House Nature</span> will
          graduate with the abilities needed make sure new life flourishes.
        </p>
        <p>
          {" "}
          Once a year, students will stay on a local farm and help encourage the
          harvest. The relationships students cultivate during their time at
          <span className="spanNat"> Magic Meadows</span> can blossom into
          fruitful relationships with local business owners.
        </p>
      </div>
    </>
  );
}
