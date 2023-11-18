import { Aside } from "../Aside/Aside";
import { BreadCrumble } from "../BreadCrumble";
import { Card } from "../Card";
import { Header } from "../Header";

export const AppLayout = () => {
  return (
    <div className="grid grid-cols-8 gap-0">
      <div className="col-span-2">
        <Aside />
      </div>
      <main className="col-span-6">
        <Header />
        <BreadCrumble />
        <Card />
      </main>
    </div>
  );
};
