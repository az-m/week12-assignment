"use client";

import { useActionState } from "react";

export function ChatSubmitButton() {
  const { pending } = useActionState();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
