import { Suspense } from "react";
import { SignUpForm } from "../../features/user";

export const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <Suspense fallback={<p>Loading</p>}>
        <SignUpForm />
      </Suspense>
    </div>
  );
};
