import { ContentFrame } from "../../ui/ContentFrame";
import { Hanko } from "../../ui/Hanko";

import { aboutText as text } from "../../statics/texts";

export const About = () => {
  return (
    <section className="section-layout">
      <div>
        <ContentFrame>
          <Hanko />
          <div className=" mt-8">{text.en.text}</div>
          <div className="flex justify-end w-full">
            <Hanko src="/sakura.webp" size="sm" />
          </div>
        </ContentFrame>
      </div>
    </section>
  );
};
