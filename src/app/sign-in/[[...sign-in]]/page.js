import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {


    return(
        <>

            <h1> This is the sign-In page</h1>
            <SignIn />
        
        </>
    )
}