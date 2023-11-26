import { EventHandler, ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../states/atoms/commonAtoms";
import ReactDOM from "react-dom";
import { modalPayload } from "../../states/selectors/commonSelectors";
import { useState } from "react";

interface KeyboardEvent {
  key: string;
}

export const Modal = ({ content, options }: { content: ReactNode; options: {} }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  //   const [isOpen, setIsOpen] = useRecoilState(modalState);

  //   useEffect(() => {
  //     const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? setIsOpen(!isOpen) : null);
  //     document.body.addEventListener("keydown", closeOnEscapeKey);
  //     return () => {
  //       document.body.removeEventListener("keydown", closeOnEscapeKey);
  //     };
  //   }, [setIsOpen, isOpen]);

  //   if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 bg-slate-400 h-screen w-screen flex items-center justify-center">
      {/* <button onClick={() => setIsOpen(!isOpen)}>Close</button> */}
      <div>{content}Hi</div>
    </div>
  );
};
