export const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-full min-w-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-green-dark border-t-transparent"></div>
      </div>
    </div>
  );
};
