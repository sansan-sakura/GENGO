import { useRef } from "react";
import { useUser } from "../../../../hooks/useUser";

import ErrorBoundary from "../../../../ui/generic/ErrorBoundary";
import { Spinner } from "../../../../ui/generic/Spinner";
import { GoalInputField } from "./GoalInputField";
import Draggable, { DraggableCore } from "react-draggable";
export const Goals = () => {
  const { isPending, data } = useUser();
  const nodeRef = useRef(null);
  const goalRef = useRef(null);
  const generalRef = useRef(null);
  if (isPending) return <Spinner />;
  const goals = data.data.data;

  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };
  return (
    <ErrorBoundary fallback={<p>error</p>}>
      <div className="w-full mx-2 mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-blue-dark mb-12 text-center w-full">
          My Goals
        </h2>

        <div className="flex flex-col gap-14 md:grid-cols-2 gap-y-6 my-3 w-10/12 mx-auto">
          <Draggable bounds={{ top: 0 }}>
            <div className="bg-amber-50 w-fit  mx-auto hover:cursor-pointer" ref={nodeRef}>
              <GoalInputField
                storedValue={goals.todayGoal}
                label="Today's Goal"
                objKey="todayGoal"
              />
            </div>
          </Draggable>
          <Draggable>
            <div className="w-ft bg-amber-50 mx-auto hover:cursor-pointer " ref={goalRef}>
              <GoalInputField
                storedValue={goals.monthlyGoal}
                label="Monthly Goal"
                objKey="monthlyGoal"
              />
            </div>
          </Draggable>
          <Draggable bounds={{ bottom: 0 }}>
            <div className=" w-fit bg-amber-50 mx-auto hover:cursor-pointer" ref={generalRef}>
              <GoalInputField
                storedValue={goals.generalGoal}
                label="General Goal"
                objKey="generalGoal"
              />
            </div>
          </Draggable>
        </div>
      </div>
    </ErrorBoundary>
  );
};
