import Link from "next/link";
import {
  IconDog,
  IconMessage,
  IconHome,
  IconUserCircle,
} from "@tabler/icons-react";

export default function Navbar({ styles, profile }) {
  return (
    <>
      <div className={styles.nav}>
        <Link href={"/chat"}>
          <IconMessage />
        </Link>
        <div className="">
          <Link href={"/pet"}>
            <IconDog />
          </Link>
        </div>
        {profile && (
          <div className="">
            <Link href={profile}>
              <IconUserCircle />
            </Link>
          </div>
        )}
        <div className="">
          <Link href={"/"}>
            <IconHome />
          </Link>
        </div>
      </div>
    </>
  );
}

//the footer should have icons that represent the pages - for now these will be just from tabler but with time they can be replaced with custom assets
