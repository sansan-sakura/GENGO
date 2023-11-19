export const Logo = ({ size = "md" }: { size?: "lg" | "md" }) => {
  return (
    <h2 className={`font-display ${size === "md" ? "text-5xl" : "text-6xl"} text-center`}>GENGO</h2>
  );
};
