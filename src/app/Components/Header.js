import Navbar from "./Navbar";
import { UserButton,SignedIn,SignedOut,SignInButton,SignUpButton } from "@clerk/nextjs";
import {auth} from "@clerk/nextjs/server" //the auth object contains all user's data eg userid 

export default async function Header (){

    const {userId} = await auth()

    // console.log(userId)

    return (
        <>
            <Navbar /> 
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal"/>
                <SignUpButton />


            </SignedOut>
        </>
    )
}