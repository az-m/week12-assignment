"use client";

import { saveChat } from "@/actions/chat";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { ChatSubmitButton } from "./ChatSubmitButton";
// import styles from "@/styles/chat.module.css";

export function ChatReplyForm({ parentId, styles }) {
  const [state, dispatch, isPending] = useActionState(saveChat, {
    parentId,
  });

  const boundDispatch = dispatch.bind({ parentId });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
    }
  }, [state.success]);

  return (
    <div className={styles.reply}>
      <button onClick={() => setOpen(!isOpen)} className={styles.replyBtn}>
        {isOpen ? "Close" : "Reply"}
      </button>
      {isOpen ? (
        <>
          <form action={boundDispatch} className={styles.replyForm}>
            <textarea name="text" placeholder="" className={styles.replytext} />
            <ChatSubmitButton isPending={isPending} />
          </form>
        </>
      ) : null}
    </div>
  );
}
