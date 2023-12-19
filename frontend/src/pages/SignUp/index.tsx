import { Suspense } from "react";
import { SignUpForm } from "../../features/user";
import { Spinner } from "../../ui/Spinner";

export const SignUp = () => {
  return (
    <div className="pt-20 md:min-h-screen flex  justify-center md:pt-44 pb-14 md:pb-0">
      <Suspense fallback={<Spinner />}>
        <SignUpForm />
      </Suspense>
    </div>
  );
};
