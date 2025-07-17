import "../styles/homepageCopy.css";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
export default function HomepageSignup() {
  return (
    <div className="signupDiv">
      <Image
        src="https://sptoozvtpevrsloyzajw.supabase.co/storage/v1/object/public/assets//logonew.png"
        width={100}
        height={50}
        alt="A school crest, displaying a skull wearing a witch hat, with flowers growing from the eye-holes. There are sparkles over the skull signifying magic."
        placeholder="empty"
        loading="lazy"
      />
      <SignedOut>
        <SignUpButton className="SignUpButton">Create Profile</SignUpButton>
      </SignedOut>
      {/* you should only be able to see the sign up button if you are not already signed in */}
    </div>
  );
}
