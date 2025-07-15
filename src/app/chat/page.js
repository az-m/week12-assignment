import ChatList from "@/components/ChatList";
import { ChatPostForm } from "@/components/ChatPostForm";
import natStyles from "@/styles/chatNat.module.css";
import necroStyles from "@/styles/chatNecro.module.css";
import { isTeacher, house } from "@/actions/checkrole";

export default async function ChatPage() {
  const teacher = await isTeacher();
  const houseID = await house();
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
