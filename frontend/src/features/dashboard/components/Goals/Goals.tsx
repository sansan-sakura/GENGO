import { useUser } from "../../../../hooks/useUser";

import ErrorBoundary from "../../../../ui/generic/ErrorBoundary";
import { Spinner } from "../../../../ui/generic/Spinner";
import { GoalInputField } from "./GoalInputField";

export const Goals = () => {
  const { isPending, data } = useUser();
  if (isPending) return <Spinner />;
  const goals = data.data.data;

  return (
    <ErrorBoundary fallback={<p>error</p>}>
      <div className="w-full mx-2 mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-blue-dark mb-12 text-center w-full">
          My Goals
        </h2>

        <div className="flex flex-col gap-14 md:grid-cols-2 gap-y-6 my-3 w-10/12 mx-auto">
          <div className="w-full ">
            <GoalInputField storedValue={goals.todayGoal} label="Today's Goal" objKey="todayGoal" />
          </div>

          <div className="w-full ">
            <GoalInputField
              storedValue={goals.monthlyGoal}
              label="Monthly Goal"
              objKey="monthlyGoal"
            />
          </div>

          <div className="col-end-3 col-start-1 w-full">
            <GoalInputField
              storedValue={goals.generalGoal}
              label="General Goal"
              objKey="generalGoal"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
