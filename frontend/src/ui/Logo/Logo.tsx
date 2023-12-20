export const Logo = ({ size = "md" }: { size?: "lg" | "md" }) => {
  return (
    <h2
      className={`font-display ${
        size === "md" ? "md:text-5xl xl:text-7xl" : "md:text-6xl xl:text-8xl"
      } text-center font-bold`}
    >
      GENGO
    </h2>
  );
};
