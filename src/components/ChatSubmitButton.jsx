"use client";

export function ChatSubmitButton({ isPending }) {
  return (
    <button type="submit" disabled={isPending}>
      {isPending ? "Submitting..." : "Submit"}
    </button>
  );
}
