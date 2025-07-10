import { SignUp } from "@clerk/nextjs";
// import { db } from "@/utils/dbConnection";

export default async function SignUpPage() {
    return (
        <>
          <h1>This is the sign-up page</h1>
          <SignUp />
        </>
      );
    }
    