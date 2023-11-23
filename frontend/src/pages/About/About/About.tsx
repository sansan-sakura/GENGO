import { ContentFrame } from "../../../ui/ContentFrame";
import { Hanko } from "../../../ui/Hanko";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogo } from "react-icons/pi";
import { aboutText as text } from "../../../statics/texts";

export const About = () => {
  return (
    <section className="section-layout">
      <div>
        <ContentFrame>
          <Hanko />
          <div className=" mt-8">{text.en.text}</div>
          <div className="flex gap-8 mt-8">
            <VscGithub className="text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
            <PiLinkedinLogo className="text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
          </div>
          <div className="flex justify-end w-full">
            <Hanko src="/sakura.webp" size="sm" />
          </div>
        </ContentFrame>
      </div>
    </section>
  );
};
