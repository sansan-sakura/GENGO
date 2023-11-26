import { Root, createRoot } from "react-dom/client";
import { Modal } from "./Modal";
import { ReactNode } from "react";

declare const window: Window &
  typeof globalThis & {
    modalContainer: Root;
  };

const createModal = (content: ReactNode, options = {}) => {
  if (!window.modalContainer) {
    window.modalContainer = createRoot(document.getElementById("modal-container") as HTMLElement);
  }

  window.modalContainer.render(
    <Modal key={Math.random()} content={content as ReactNode} options={options} />
  );
};
export default createModal;
