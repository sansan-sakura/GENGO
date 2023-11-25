import { useEffect, useRef } from "react";
import { getDate } from "../../utils/helpers";
import { SearchInput } from "../SearchInput/SearchInput";
export const Header = () => {
  const {
    current: [weekDay, date, time],
  } = useRef(getDate());
  useEffect(() => {
    function timer() {
      const timeArr = time.split(":");
      let hour = timeArr[0];
      let min = timeArr[1].split(" ")[0];

      console.log(hour, min);
    }

    timer();
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
            <h2 className="text-[40px] font-bold  text-green-dark font-display">{weekDay}</h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <SearchInput />
            </div>

            <a
              href="#"
              className="shrink-0 bg-green-dark w-10 h-10 rounded-full flex items-center justify-center text-white "
            >
              <span className="sr-only">Profile</span>
              <p>S</p>
            </a>
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </header>
  );
};
