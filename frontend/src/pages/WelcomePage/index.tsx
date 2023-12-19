import { Hanko } from "../../ui/Hanko";
import { welcomeText as text } from "../../statics/texts";
import { Button } from "../../ui/Button";
import { ContentFrame } from "../../ui/ContentFrame";

export const WelcomePage = () => {
  return (
    <section className="flex flex-col items-center min-h-screen gap-6">
      <div className=" my-12 md:my-16">
        <Hanko />
      </div>
      <div className="min-w-80 w-[90%] mx-10 max-w-[600px]">
        <ContentFrame>
          <h2 className="font-display text-4xl mb-4 md:text-5xl md:mb-8">Welcome to GENGO 🗂️</h2>
          <p className="text-base mb-4 leading-7 md:text-xl tracking-widest mb:mb-8 md:leading-9">
            {text.en.text}
          </p>
          <Button text="Start" color=" bg-red-dark " type="link" path="/login" />
        </ContentFrame>
      </div>
    </section>
  );
};
