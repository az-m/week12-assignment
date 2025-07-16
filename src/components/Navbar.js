import Link from "next/link";
import { IconDog, IconMessage, IconHome } from "@tabler/icons-react";
import "./components.css";

export default function Navbar() {
  return (
    <>
      <div className="footerFlex">
        <Link href={"/chat"}>
          <IconMessage />
        </Link>
        <div className="">
          <Link href={"/pet"}>
            <IconDog />
          </Link>
        </div>
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
