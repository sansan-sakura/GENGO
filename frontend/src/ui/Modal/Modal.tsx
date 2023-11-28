import { ReactNode, useEffect, useState } from "react";

export const Modal = ({ content }: { content: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? setIsOpen(!isOpen) : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [setIsOpen, isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 backdrop-blur bg-zinc-300/30 h-screen w-screen flex items-center justify-center z-50">
      <div className="relative p-9 bg-white border-2 border-black rounded-lg ">
        <div>{content}</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-4xl absolute top-2 right-2">
          &times;
        </button>
      </div>
    </div>
  );
};
