export const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent"></div>
      </div>
    </div>
  );
};
