import { ReactNode, useEffect, useState } from "react";

export const SubModal = ({ content }: { content: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    const closeOnKey = (e: KeyboardEvent) =>
      e.key === "Escape" || e.key === "shift" ? setIsOpen(!isOpen) : null;
    document.body.addEventListener("keydown", closeOnKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnKey);
    };
  }, [setIsOpen, isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 backdrop-blur bg-zinc-300/30  h-screen w-screen flex items-center justify-center">
      <div className="relative p-8">
        <div>{content}</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl absolute top-0 right-0  text-red-dark"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
