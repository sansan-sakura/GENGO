import { Hanko } from "../../ui/Hanko";
import { Logo } from "../../ui/Logo";
import { welcomeText as text } from "../../statics/texts";
import { Button } from "../../ui/Button";
import { ContentFrame } from "../../ui/ContentFrame";

export const WelcomePage = () => {
  return (
    <section className="flex flex-col items-center min-h-screen pt-20">
      <div className="flex flex-col items-center gap-8 mb-10">
        <Logo size="lg" />
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
