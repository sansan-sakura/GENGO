import { useUser } from "../../../../hooks/useUser";
import { ContentFrame } from "../../../../ui/ContentFrame";
import ErrorBoundary from "../../../../ui/ErrorBoundary";
import { Spinner } from "../../../../ui/Spinner";
import { GoalInputField } from "./GoalInputField";

export const Goals = () => {
  const { isPending, data } = useUser();
  if (isPending) return <Spinner />;
  const goals = data.data.data;

  return (
    <ErrorBoundary fallback={<p>error</p>}>
      <div className="w-fit mx-auto">
        <ContentFrame>
          <h2 className="font-display font-bold text-4xl text-green-dark mb-4 text-start w-full">
            Goals
          </h2>
          <div className="grid grid-cols-2 gap-y-6 gap-x-3 my-3">
            <div className="w-full min-h-[50px]">
              <GoalInputField
                storedValue={goals.todayGoal}
                label="Today's Goal"
                objKey="todayGoal"
              />
            </div>
            <div className="w-full min-h-[50px]">
              <GoalInputField
                storedValue={goals.weeklyGoal}
                label="Weekly Goal"
                objKey="weeklyGoal"
              />
            </div>
            <div className="w-64 min-h-[50px]">
              <GoalInputField
                storedValue={goals.monthlyGoal}
                label="Monthly Goal"
                objKey="monthlyGoal"
              />
            </div>
            <div className="w-64 min-h-[50px]">
              <GoalInputField
                storedValue={goals.yearlyGoal}
                label="Yearly Goal"
                objKey="yealyGoal"
              />
            </div>
            <div className="col-end-3 col-start-1 min-h-[50px] w-full">
              <GoalInputField
                storedValue={goals.generalGoal}
                label="General Goal"
                objKey="generalGoal"
              />
            </div>
          </div>
        </ContentFrame>
      </div>
    </ErrorBoundary>
  );
};
