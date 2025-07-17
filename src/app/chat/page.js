import ChatList from "@/components/ChatList";
import { ChatPostForm } from "@/components/ChatPostForm";
import natStyles from "@/styles/chatNat.module.css";
import necroStyles from "@/styles/chatNecro.module.css";
import { isTeacher, house, hasRecord } from "@/actions/checkrole";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  const teacher = await isTeacher();
  const houseID = await house();
  const hasprofile = await hasRecord();

  if (!hasprofile) {
    redirect("/create-profile");
  }

  let styles = {};

  if (houseID === "4") {
    styles = natStyles;
  } else {
    styles = necroStyles;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <ChatList styles={styles} />
      </div>
      {!teacher && <ChatPostForm styles={styles} />}
    </div>
  );
}
