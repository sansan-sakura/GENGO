import { ContentFrame } from "../../../ui/ContentFrame";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogo } from "react-icons/pi";

export const Contact = () => {
  return (
    <section className="section-layout">
      <ContentFrame>
        <h3 className="mb-10 text-2xl">Contact:</h3>
        <p></p>
        <address>
          <a href="to:sito6496@gmail.com">
            <p>Email : sito6496@gmail.com</p>
          </a>
        </address>
        <div className="flex gap-8 mt-8">
          <VscGithub className="text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
          <PiLinkedinLogo className="text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
        </div>
      </ContentFrame>
    </section>
  );
};
