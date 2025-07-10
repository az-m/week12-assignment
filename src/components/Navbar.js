import Link from "next/link";

export default function Navbar() {
    return(
        <>


            <div>
                <Link href={"/"}>School</Link>

                <div className="">
                    <Link href={"/"}>HomePage</Link>
                    {/* <Link href={"/Feeds"}>Feeds</Link> */}
                </div>

               


            </div>
        </>
    )
}