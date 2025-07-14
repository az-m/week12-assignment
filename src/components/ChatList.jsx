import { db } from "@/utils/dbConnection";
import { ChatReplyForm } from "./ChatReplyForm";

async function ChatList({ parentId = null }) {
  let query;
  let args = [];

  if (parentId) {
    query = `SELECT post_id, text, first_name, family_name, created_at FROM posts JOIN student ON posts.student_id = student.student_id WHERE parent_post_id = $1`;
    args = [parentId];
  } else {
    query = `SELECT post_id, text, first_name, family_name, created_at FROM posts JOIN student ON posts.student_id = student.student_id WHERE parent_post_id IS NULL ORDER BY created_at DESC`;
  }

  const topChat = (await db.query(query, args)).rows;

  return (
    <>
      <ul>
        {topChat.map((chat) => (
          <li key={chat.post_id}>
            <div>
              <span>{`${chat.first_name} ${chat.family_name}`}</span>
              <span>{parseDate(chat.created_at)}</span>
            </div>
            <div>
              <p>{chat.text}</p>
            </div>
            <ChatReplyForm parentId={chat.post_id} />
            <ChatList parentId={chat.post_id} />
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
