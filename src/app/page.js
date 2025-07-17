"use client";
//imports here - cleaning up a bit and getting rid of GSAP - i think framer motion is a little easier for just text animations
//cleaning up again by getting rid of the pseudo-code that was laying out what should be on this page
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { motion } from "motion/react";
import HeroText from "@/components/HeroText";
import NatureIntro from "@/components/NatureIntro";
import NecroIntro from "@/components/NecromancyIntro";
import HomepageSignup from "@/components/homepageSignup";

//end of imports

export default function HomePage() {
  return (
    <>
      <section className="homepagebackgroundGradient">
        <Image
          src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//headerimagenew.png"
          width={990}
          height={800}
          alt="An illustrated image of 2 dragons in a magical forest. One dragon is pink, and associated with nature. The other is purple and is associated with necromancy."
          className="dragonheader"
          priority
        />{" "}
        {/* //this is where the animation for the text sits */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div className="titleTextline">
            <HeroText />
            {/* //MAGIC (the word) is in a component because of the extra css animation */}
            <h1 className="meadowText">MEADOWS</h1>
          </div>
        </motion.div>
        <div className="intoParagraph">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <p>
              Discover our spell-binding school and allow your young wizard to
              grow!
            </p>{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <p>
              <span className="spanTxt"> Magic Meadows</span> is famed for our
              digital approach to wizard-schoooling. No more will parents need
              to gather the strength to board the House Dragon for a weekend.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <p>
              While Nature and Necros enjoy their new lives in a dragon
              sanctuary, students still have the opportunity to learn teamwork
              and earn prizes for{" "}
              <span className="spanTxt">Magic Meadow&apos;s</span> new
              digi-dragons!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <SignInButton className="SignInButton">
              I&apos;m already a student
            </SignInButton>
          </motion.div>
        </div>
        <NatureIntro />
        <NecroIntro />
        <HomepageSignup />
      </section>
    </>
  );
}
