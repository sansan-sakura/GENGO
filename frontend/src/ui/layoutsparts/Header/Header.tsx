import { useEffect, useRef, useState } from "react";
import { getDate, showTime } from "../../../utils/helpers";
import { SearchInput } from "../../generic/SearchInput/SearchInput";
import { currentThemeAtom, currentUserState } from "../../../states/atoms/userAtoms";
import { useRecoilValue } from "recoil";
import { themeColors, themeNavColors, themeTextColors } from "../../../statics/colors";
import { RxHamburgerMenu } from "react-icons/rx";
import { Aside } from "../Aside/Aside";

export const Header = () => {
  const currentUser = useRecoilValue(currentUserState);
  const theme = useRecoilValue(currentThemeAtom);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen && <Aside setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />}
      <header className="bg-amber-50/50 border-b ">
        <div className="mx-4 sm:mx-auto max-w-[1200px] py-6 sm:py-8 flex justify-center items-center">
          <div className="flex items-center justify-between gap-12 max-w-[1200px] w-full mx-auto px-6">
            <div className="flex items-center gap-10">
              <button
                onClick={() => setIsNavOpen(true)}
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${themeColors[theme]} md:bg-transparent hover:brightness-[90%] transition-all duration-300`}
              >
                <RxHamburgerMenu
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10  ${themeNavColors[theme]}`}
                />
              </button>

              <DatesClock theme={theme} />
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
    </>
  );
};

function DatesClock({ theme }: { theme: string }) {
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
    <div className="items-center  gap-10 hidden lg:flex">
      <div
        className={`text-base flex flex-col bg-white px-1.5 py-1  font-bold items-center rounded-lg  shadow-sm  ${themeTextColors[theme]}`}
      >
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <h2 className={`text-3xl md:text-[40px] font-bold  font-display ${themeTextColors[theme]}`}>
        {weekDay}
      </h2>
    </div>
  );
}
