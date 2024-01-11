import { ContentFrame } from "../../ui/layoutsparts/ContentFrame";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogo } from "react-icons/pi";

export const Contact = () => {
  return (
    <section className="section-layout">
      <ContentFrame>
        <h3 className="mb-10 text-lg sm:text-2xl">Contact:</h3>

        <address className="text-sm sm:text-base">
          <a href="to:sito6496@gmail.com">
            <p>Email : sito6496@gmail.com</p>
          </a>
        </address>
        <div className="flex gap-8 mt-8">
          <a href="https://github.com/sansan-sakura" target="_blank" rel="noopener noreferrer">
            <VscGithub className="text-xl sm:text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sakura-tanaka-251a36247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogo className="text-xl sm:text-4xl invert-[0.2]  transition hover:translate-y-0.5 hover:invert-[0.5]" />
          </a>
        </div>
      </ContentFrame>
    </section>
  );
};
