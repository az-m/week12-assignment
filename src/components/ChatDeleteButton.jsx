"use client";

import { IconTrash } from "@tabler/icons-react";
import { deleteChat } from "@/actions/chat";

export default function ChatDeleteButton({ chatID }) {
  return (
    <>
      <IconTrash onClick={() => deleteChat(chatID)} />
    </>
  );
}
