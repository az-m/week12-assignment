import Navbar from "./Navbar";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"; //the auth object contains all user's data eg userid
import "./components.css";

export default async function Footer() {
  const { userId } = await auth();

  // console.log(userId)

  return (
    <div className="footerFlex">
      <Navbar />
    </div>
  );
}

//we can delete the signed in tool from clerk here, as the footer only displays on sign-in anyway, so having additional conditional rendering is redundant
