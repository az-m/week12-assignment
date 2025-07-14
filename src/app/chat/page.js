import ChatList from "@/components/ChatList";
import { ChatPostForm } from "@/components/ChatPostForm";

export default function ChatPage() {
  return (
    <>
      <ChatPostForm />
      <ChatList />
    </>
  );
}
