export const getDate = () => {
  const now = new Date();
  const today = now.toLocaleDateString("en", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const dateArr = today.split(",");
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const [weekday, dates] = [...dateArr];

  return [weekday, dates, time];
};
