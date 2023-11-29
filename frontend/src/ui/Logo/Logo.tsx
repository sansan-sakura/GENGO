export const Logo = ({ size = "md" }: { size?: "lg" | "md" }) => {
  return (
    <h2 className={`font-display ${size === "md" ? "text-7xl" : "text-8xl"} text-center font-bold`}>
      GENGO
    </h2>
  );
};
