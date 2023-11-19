import { Calendar, Chart, Goals } from "../../../features/dashboard";

export const Dashboard = () => {
  return (
    <section className="flex flex-col gap-12 section-layout">
      <Goals />
      <Calendar />
      <Chart />
    </section>
  );
};
