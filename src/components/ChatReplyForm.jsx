"use client";

import { saveChat } from "@/actions/chat";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { ChatSubmitButton } from "./ChatSubmitButton";

export function ChatReplyForm({ parentId }) {
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
    <div>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Close" : "Reply"}
      </button>
      {isOpen ? (
        <>
          <form action={boundDispatch}>
            <textarea name="text" placeholder="Reply..." />
            <ChatSubmitButton isPending={isPending} />
          </form>
        </>
      ) : null}
    </div>
  );
}
