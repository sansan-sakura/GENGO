import { ReactNode } from "react";

export const ContentFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-[600px] px-10 py-10 rounded-lg border-2 border-black shadow-xl">
      {children}
    </div>
  );
};
