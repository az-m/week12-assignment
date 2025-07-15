import { db } from "@/utils/dbConnection";
import { ChatReplyForm } from "./ChatReplyForm";
import { isTeacher } from "@/actions/checkrole";
import ChatDeleteButton from "./ChatDeleteButton";
import styles from "@/styles/chat.module.css";
import ChatSpacer from "./ChatSpacer";

async function ChatList({ parentId = null }) {
  const teacher = await isTeacher();

  let query;
  let args = [];

  if (parentId) {
    query = `SELECT post_id, text, first_name, family_name, created_at FROM posts JOIN student ON posts.student_id = student.student_id WHERE parent_post_id = $1`;
    args = [parentId];
  } else {
    query = `SELECT post_id, text, first_name, family_name, created_at FROM posts JOIN student ON posts.student_id = student.student_id WHERE parent_post_id IS NULL ORDER BY created_at ASC`;
  }

  const topChat = (await db.query(query, args)).rows;

  return (
    <>
      <ul>
        {topChat.map((chat) => (
          <li key={chat.post_id}>
            {/* <div className="flex border border-red-800 space-x-3 items-center pb-2">
              
            </div> */}
            <div>
              <div className={styles.chatItem}>
                <div className={styles.chatHeader}>
                  <span
                    className={styles.chatUser}
                  >{`${chat.first_name} ${chat.family_name}`}</span>
                  <span className={styles.chatDate}>
                    {parseDate(chat.created_at)}
                  </span>
                </div>
                <p className={styles.chatText}>{chat.text}</p>
                <div className={styles.chatDelete}>
                  {teacher && <ChatDeleteButton chatID={chat.post_id} />}
                </div>
              </div>
              <div className="ml-4">
                {!teacher ? (
                  <ChatReplyForm parentId={chat.post_id} />
                ) : (
                  <ChatSpacer />
                )}
                <ChatList parentId={chat.post_id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function parseDate(d) {
  let date = new Date(d);
  if (d) {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    date = `${yyyy}-${mm}-${dd}`;
  } else {
    date = "";
  }
  return date;
}

export default ChatList;
