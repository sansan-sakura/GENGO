export const Hanko = ({ size = 14, src = "/gengo_logo.webp" }: { size?: number; src?: string }) => {
  return (
    <div className="w-fit">
      <img src={src} className={`w-${size}`} />
    </div>
  );
};
