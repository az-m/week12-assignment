"use client";
import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";

import { SignInButton } from "@clerk/nextjs";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  //this is the GSAP stuff (aka the animations)
  const panelRef = useRef();
  useGSAP(() => {
    gsap.to(panelRef.current, {
      duration: 3,
      ease: "back.out",
      delay: 1,
    });
  });
  const firstpanelRef = useRef();
  useGSAP(() => {
    gsap.to(firstpanelRef.current, {
      scale: 0.4,
      y: -100,
      duration: 3,
      ease: "back.out",
      delay: 1,
    });
  });
  const heroText = useRef();
  useGSAP(() => {
    gsap.to(heroText.current, {
      opacity: 1,
      duration: 2,
      ease: "back.in",
      delay: 1,
      y: -100,
    });
  });
  const heroText2 = useRef();
  useGSAP(() => {
    gsap.to(heroText2.current, {
      opacity: 1,
      duration: 2,
      ease: "back.in",
      delay: 1,
      y: -100,
    });
  });
  const heroText3 = useRef();
  useGSAP(() => {
    gsap.to(heroText3.current, {
      opacity: 1,
      duration: 2,
      delay: 1,
      y: -100,
    });
  });
  return (
    //this is the home/landing page for our app. it should have a (short) introduction/welcome to the school (maybe the school motto or something) & context on the houses in the school written as though a student is reading it
    //storybook-style static graphics, some animation effects on the text / scrolling
    //log in / sign up component
    // conditionally, a footer with navigation will be displayed (if you are already logged in)

    //image component
    //text component
    //login component
    <>
      <section className="homepagebackgroundGradient">
        <div className="panel firstPanel">
          <Image
            src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//logonew.png"
            width={300}
            height={500}
            alt="A school logo"
            placeholder="empty"
            priority
            ref={firstpanelRef}
          />{" "}
          <p className="heroText" ref={heroText3}>
            Welcome, dear student, to
          </p>
          <p className="heroText2" ref={heroText2}>
            Magic
          </p>
          <p className="heroText2" ref={heroText}>
            Meadows!
          </p>
        </div>
        {/* //end of first panel */}
        <section className="panel secondPanel">
          <div>
            {" "}
            <Image
              src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
              width={500}
              height={500}
              alt="A nature dragon"
              placeholder="empty"
            />
          </div>
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
        </section>
        {/* //end of second section */}
        <section className="panel necromancyIntro">
          <div>
            {" "}
            <Image
              src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//nature_dragon.gif"
              width={500}
              height={500}
              alt="A nature dragon"
              placeholder="empty"
            />
          </div>
          Or you could study in House Necromancy. As a new student, you will
          first take a Do No Harm oath before unearthing the opportunities that
          await you.
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
        </section>

        <div className="panel logIn">
          Log in here
          <SignInButton />
        </div>
      </section>
    </>
  );
}
{
  /* <ThemeButton /> */
}
