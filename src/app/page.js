import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";

import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    //this is the home/landing page for our app. it should have a (short) introduction/welcome to the school (maybe the school motto or something) & context on the houses in the school written as though a student is reading it
    //storybook-style static graphics, some animation effects on the text / scrolling
    //log in / sign up component
    // conditionally, a footer with navigation will be displayed (if you are already logged in)

    //image component
    //text component
    //login component

    //each Intro div is 100dvh and animated on scroll - text and maybe an image of the house pet?
    // parallax  ??

    <>
      <section className="introText">
        <div className="panel schoolIntro">
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//logo.png"
            width={500}
            height={500}
            alt="A school logo"
            placeholder="empty"
          />{" "}
          <p>Welcome, dear student, to</p>
          <p className="heroText">Magic Meadows!</p>
        </div>
        <div className="panel natureIntro">
          If you think House Nature is just about plants, think again! In House
          Nature, our students master their control over biomancy: the magic of
          life.
          <p>
            The students from House Nature will graduate with the abilities
            needed make sure new life flourishes. Once a year, students will
            stay on a local farm and help encourage the harvest. The
            relationships students cultivate during their time at Magic Meadows
            can blossom into fruitful relationships with local business owners,
            and job opportunities year after year.
          </p>
        </div>
        <div className="panel natureImage">
          {" "}
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
            width={500}
            height={500}
            alt="A nature dragon"
            placeholder="empty"
          />
        </div>
        <div className="panel necromancyIntro">
          Or you could study in House Necromancy. As a new student, you will
          first take a Do No Harm oath (yes, just like a doctor) before
          unearthing the opportunities that await you.
          <p>
            Students will choose one currently-dead intellect, artist or
            scientist as their mentor, and work toward raising them in time for
            their final presentation. No need to panic, parents! This is a
            years-long aim, and we take great care to teach your child about
            this great responsibility. Many past Magic Meadows students from
            House Necromancy have gone on to become private investigators,
            helping solve years-old cold cases with the help of the victims
            themselves.{" "}
          </p>
        </div>

        <div className="panel logIn">
          Log in here
          <SignInButton />
          <ThemeButton />
        </div>
      </section>
    </>
  );
}
