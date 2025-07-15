import ChatList from "@/components/ChatList";
import { ChatPostForm } from "@/components/ChatPostForm";
import styles from "@/styles/chat.module.css";
import { isTeacher } from "@/actions/checkrole";

export default async function ChatPage() {
  const teacher = await isTeacher();
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <ChatList />
      </div>
      {!teacher && <ChatPostForm />}
    </div>
  );
}
