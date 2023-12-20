import { ContentFrame } from "../../ui/ContentFrame";
import { Hanko } from "../../ui/Hanko";

import { aboutText as text } from "../../statics/texts";

export const About = () => {
  return (
    <section className="section-layout">
      <div>
        <ContentFrame>
          <Hanko />
          <div className="mt-6 sm:mt-8 text-sm leading-6 sm:text-base sm:leading-7">
            {text.en.text}
          </div>
          <div className="flex justify-end w-full">
            <Hanko src="/sakura.webp" size="sm" />
          </div>
        </ContentFrame>
      </div>
    </section>
  );
};
