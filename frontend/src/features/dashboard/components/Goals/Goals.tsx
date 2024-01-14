import { useState } from "react";
import { useUser } from "../../../../hooks/useUser";

import ErrorBoundary from "../../../../ui/generic/ErrorBoundary";
import { Spinner } from "../../../../ui/generic/Spinner";
import { GoalInputField } from "./GoalInputField";

export const Goals = () => {
  const { isPending, data } = useUser();
  const [numCard, setNumCard] = useState(0);
  if (isPending) return <Spinner />;
  const goals = data.data.data;

  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };
  return (
    <ErrorBoundary fallback={<p>error</p>}>
      <div className="w-full mx-2 mb-16 ">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-blue-dark mb-12 text-center w-full">
          My Goals
        </h2>
        <button onClick={() => setNumCard((prev) => prev + 1)}>Create sticker</button>

        <div className="flex flex-col gap-14 md:grid-cols-2 gap-y-6 my-3 w-10/12 h-[60vh] mx-auto relative">
          <GoalInputField storedValue={goals.todayGoal} label="Today's Goal" objKey="todayGoal" />

          <GoalInputField
            storedValue={goals.monthlyGoal}
            label="Monthly Goal"
            objKey="monthlyGoal"
          />

          <GoalInputField
            storedValue={goals.generalGoal}
            label="General Goal"
            objKey="generalGoal"
          />
          {Array.from({ length: numCard }, (_, i) => (
            <GoalInputField
              storedValue={goals.generalGoal}
              label="General Goal"
              objKey="generalGoal"
            />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};
