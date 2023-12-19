import { useEffect, useRef, useState } from "react";
import { getDate, showTime } from "../../utils/helpers";
import { SearchInput } from "../SearchInput/SearchInput";
import { currentUserState } from "../../states/atoms/userAtoms";
import { useRecoilValue } from "recoil";
export const Header = () => {
  const currentUser = useRecoilValue(currentUserState);
  const [time, setTime] = useState(showTime());

  const {
    current: [weekDay, date],
  } = useRef(getDate());

  useEffect(() => {
    const timer = setInterval(() => {
      const timeNow = showTime();
      setTime(timeNow);
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <header className="bg-gray-50">
      <div className="mx-8 max-w-[1200px] py-8 flex justify-center items-center">
        <div className="flex items-center justify-between gap-12 max-w-[1200px] w-full">
          <div className="flex items-center gap-10">
            <div className="flex flex-col bg-white p-2  font-bold items-center rounded-lg text-gray-600 shadow-sm ">
              <span>{date}</span>
              <span>{time}</span>
            </div>
            <h2 className="text-[40px] font-bold  text-red-dark font-display">{weekDay}</h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <SearchInput />
            </div>

            <span className="shrink-0 bg-red-dark w-10 h-10 rounded-full flex items-center justify-center text-white ">
              <span className="sr-only">Profile</span>
              <p>{currentUser?.name[0]?.toUpperCase()}</p>
            </span>
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </header>
  );
};
