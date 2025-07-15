import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <Link href={"/pet"}>Pet</Link>
        <Link href={"/chat"}>Message</Link>
        <div className="">
          <Link href={"/profile"}>Profile</Link>
          {/* <Link href={"/Feeds"}>Feeds</Link> */}
        </div>
      </div>
    </>
  );
}
