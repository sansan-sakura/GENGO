import { Hanko } from "../../ui/Hanko";
import { welcomeText as text } from "../../statics/texts";
import { Button } from "../../ui/Button";
import { ContentFrame } from "../../ui/ContentFrame";

export const WelcomePage = () => {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center gap-8 my-16">
        <Hanko />
      </div>
      <div className=" w-[600px]">
        <ContentFrame>
          <h2 className="font-display text-5xl mb-8">Welcome to GENGO 🗂️</h2>
          <p className="text-xl tracking-widest mb-8">{text.en.text}</p>
          <Button text="Start" color="blue" type="link" path="/dashboard" />
        </ContentFrame>
      </div>
    </section>
  );
};
