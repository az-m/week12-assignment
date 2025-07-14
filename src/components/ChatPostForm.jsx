"use client";

import { saveChat } from "@/actions/chat";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { ChatSubmitButton } from "./ChatSubmitButton";

export function ChatPostForm() {
  const [state, dispatch] = useActionState(saveChat);

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Close" : "Reply"}
      </button>
      {isOpen ? (
        <>
          <form action={dispatch}>
            <textarea name="text" placeholder="Reply..." />
            <ChatSubmitButton />
          </form>
        </>
      ) : null}
    </div>
  );
}
