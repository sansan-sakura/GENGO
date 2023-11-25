import { ReactNode } from "react";

export const ContentFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 py-8 rounded-lg border-2 border-black shadow-md">
      {children}
    </div>
  );
};
