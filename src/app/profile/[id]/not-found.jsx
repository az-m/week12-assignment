import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function NotFound() {
  const { userId } = await auth();

  const result = await db.query(
    `SELECT student_id FROM student WHERE clerk_id = $1`,
    [userId]
  );

  const studentID = result.rows[0]?.student_id;

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <p className="text-3xl mb-4">No profile found.</p>

      {studentID ? (
        <Link
          href={`/profile/${studentID}`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Back to Profile
        </Link>
      ) : (
        <Link
          href="/create-profile"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Create Your Profile
        </Link>
      )}
    </div>
  );
}

