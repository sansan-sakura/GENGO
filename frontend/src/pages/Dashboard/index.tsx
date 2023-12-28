import { Calendar, Goals } from "../../features/dashboard";

export const Dashboard = () => {
  return (
    <section className="flex flex-col gap-12 section-layout">
      <Goals />
      {/* <Calendar />   Leave this withour calender for v1 */}
    </section>
  );
};
