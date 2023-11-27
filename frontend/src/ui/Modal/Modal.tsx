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
    <div className="fixed top-0 left-0 bg-slate-400 h-screen w-screen flex items-center justify-center">
      <button onClick={() => setIsOpen(!isOpen)}>Close</button>
      <div>{content}</div>
    </div>
  );
};
