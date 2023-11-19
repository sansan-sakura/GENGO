import { useEffect, useRef } from "react";
import { getDate } from "../../utils/helpers";
export const Header = () => {
  const {
    current: [weekDay, date, time],
  } = useRef(getDate());
  //   useEffect(() => {
  //     function timer() {}
  //   });
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-10">
            <div className="flex flex-col bg-white p-2  font-bold items-center rounded-lg text-gray-600 shadow-sm ">
              <span>{date}</span>
              <span>{time}</span>
            </div>
            <h2 className="text-[40px] font-bold  text-green-dark font-display">{weekDay}</h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <label className="sr-only" htmlFor="search">
                  Search
                </label>

                <input
                  className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
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
