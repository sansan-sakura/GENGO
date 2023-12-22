import { Input } from "@mui/joy";
import { ContentFrame } from "../../../../ui/ContentFrame";
import ErrorBoundary from "../../../../ui/ErrorBoundary";
import { InputLabel } from "@mui/material";

export const Goals = () => {
  return (
    <ErrorBoundary fallback={<p>error</p>}>
      <div className="w-fit mx-auto">
        <ContentFrame>
          <h2 className="font-display font-bold text-4xl text-green-dark">Goals</h2>
          <div className="grid grid-cols-2 gap-2 my-3">
            <div>
              <InputLabel>Today's Goal</InputLabel>
              <Input variant="outlined" defaultValue="hello" />
            </div>
            <div>
              <InputLabel>Weekly Goal</InputLabel>
              <Input variant="outlined" defaultValue="hello" />
            </div>
            <div>
              <InputLabel>Monthly Goal</InputLabel>
              <Input variant="outlined" defaultValue="hello" />
            </div>
            <div>
              <InputLabel>Yearly Goal</InputLabel>
              <Input variant="outlined" defaultValue="hello" />
            </div>
            <div className="col-end-3 col-start-1">
              <InputLabel>General Goal</InputLabel>
              <Input variant="outlined" defaultValue="hello" />
            </div>
          </div>
        </ContentFrame>
      </div>
    </ErrorBoundary>
  );
};
