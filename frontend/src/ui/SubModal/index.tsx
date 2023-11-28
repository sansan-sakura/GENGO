import { Root, createRoot } from "react-dom/client";
import { SubModal } from "./SubModal";
import { ReactNode } from "react";

declare const window: Window &
  typeof globalThis & {
    modalContainer: Root;
  };

const createSubModal = (content: ReactNode) => {
  if (!window.modalContainer) {
    window.modalContainer = createRoot(
      document.getElementById("subModal-container") as HTMLElement
    );
  }

  window.modalContainer.render(<SubModal key={Math.random()} content={content as ReactNode} />);
};
export default createSubModal;
