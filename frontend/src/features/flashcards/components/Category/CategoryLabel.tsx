export const CategoryLabel = ({ category, bgColor }: { category: string; bgColor: string }) => {
  return <p className={`bg-${bgColor} w-fit px-1 rounded`}>{category}</p>;
};
