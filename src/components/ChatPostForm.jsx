"use client";

import { saveChat } from "@/actions/chat";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { ChatSubmitButton } from "./ChatSubmitButton";
import styles from "@/styles/chat.module.css";

export function ChatPostForm() {
  const parentId = null;
  const [state, dispatch, isPending] = useActionState(saveChat, { parentId });
  const boundDispatch = dispatch.bind({ parentId });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
    }
  }, [state.success]);

  return (
    <div className={styles.post}>
      <button
        onClick={() => setOpen(!isOpen)}
        className={!isOpen ? styles.postBtn : styles.closepostBtn}
      >
        {isOpen ? "Close" : "Post"}
      </button>
      {isOpen ? (
        <>
          <form action={boundDispatch} className={styles.postForm}>
            <textarea name="text" placeholder="" className={styles.replytext} />
            <ChatSubmitButton isPending={isPending} />
          </form>
        </>
      ) : null}
    </div>
  );
}
