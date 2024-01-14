import { ContentFrame } from "../../ui/layoutsparts/ContentFrame";
import { Hanko } from "../../ui/generic/Hanko";

import { aboutText as text } from "../../statics/texts";

export const About = () => {
  return (
    <section className="section-layout mx-auto">
      <div>
        <ContentFrame>
          <Hanko />
          <div className="mt-6 sm:mt-8 text-sm leading-6 sm:text-base sm:leading-7  py-4 px-10 md:px-20">
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
