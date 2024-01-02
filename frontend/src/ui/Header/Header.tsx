import { useEffect, useRef, useState } from "react";
import { getDate, showTime } from "../../utils/helpers";
import { SearchInput } from "../SearchInput/SearchInput";
import { currentUserState } from "../../states/atoms/userAtoms";
import { useRecoilValue } from "recoil";
import { useUser } from "../../hooks/useUser";
import { Spinner } from "../Spinner";
import { themeColors, themeTextColors, themebgColors } from "../../statics/colors";
export const Header = () => {
  const currentUser = useRecoilValue(currentUserState);
  const [time, setTime] = useState(showTime());
  const { isPending, data } = useUser();

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

  if (isPending) return <Spinner />;

  const theme = data.data.data.theme;

  return (
    <header className={`${themebgColors[theme]}`}>
      <div className="mx-4 sm:mx-8 max-w-[1200px] py-6 sm:py-8 flex justify-center items-center">
        <div className="flex items-center justify-end sm:justify-between gap-12 max-w-[1200px] w-full">
          <div className="items-center  gap-4 md:gap-10 hidden sm:flex">
            <div className="text-xs flex flex-col bg-white p-1.5 sm:p-2  font-bold items-center rounded-lg text-gray-600 shadow-sm ">
              <span>{date}</span>
              <span>{time}</span>
            </div>
            <h2
              className={`text-3xl md:text-[40px] font-bold  font-display ${themeTextColors[theme]}`}
            >
              {weekDay}
            </h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <SearchInput />
            </div>

            <span
              className={`shrink-0  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white ${themeColors[theme]}`}
            >
              <span className="sr-only">Profile</span>
              <p className="text-sm sm:text-2xl">{currentUser?.name[0]?.toUpperCase()}</p>
            </span>
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </header>
  );
};
