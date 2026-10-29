import MagicButton from "../ui/MagicButton";
import { ChevronsDown } from "lucide-react";
import TextGenerateEffect from "../ui/TextGenerateEffect";

const Hero = () => {
  const tagLine =
    "Empowering your journey through seamless, beautiful experiences";

  const btnNext = (
    <a href="#about">
      <MagicButton
        label="Learn about me"
        iconPosition="right"
        className="mt-7"
        icon={<ChevronsDown className="text-primary" width={16} />}
      />
    </a>
  );

  return (
    <section className="relative w-full items-center justify-center bottom-14">
      <div className="hidden md:block relative bottom-0 h-screen">
        <div className="flex flex-col absolute bottom-0 left-[40%] -translate-x-[18vw]  leading-12">
          <div className="flex flex-col text-end font-bold -left-[40%] lg:-left-[50%] relative animate-fade-in">
            <h1 className={`text-[5vw] leading-[5vw]`}>Prasanti</h1>
            <h1 className="text-[4vw]">Hikmatullisan</h1>
            <h1 className="text-title-1 font-bold -mt-4">
              Mobile Developer | Software Engineer
            </h1>
          </div>
          <div className="h-[32vw] w-[30vw] bg-cream rounded-t-[64px] " />
        </div>
        <img
          src="/profile/profile-pic.png"
          alt="profile"
          className="absolute bottom-0 left-[40%] -translate-x-[40%] h-[95%] w-[40%] object-contain object-bottom"
        />
        <div className="absolute bottom-[10vh] right-8 items-end justify-end flex flex-col">
          <TextGenerateEffect
            words={tagLine}
            highlightWordIndex={[4, 5, 6]}
            className="text-end md:max-w-[65%]"
          />

          {btnNext}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex flex-col gap-6 items-center justify-center h-screen ">
        <div className="animate-fade-in-up rounded-full border border-cream bg-background/90 overflow-hidden w-32 h-32 object-cover">
          <img src="/profile/profile-pic.png" alt="profile" />
        </div>
        <div className="leading-5 text-center">
          <h1 className="text-title-1 font-bold">Prasanti Hikmatullisan</h1>
          <p className="text-title-2 font-semibold">
            Mobile Developer | Software Engineer
          </p>
        </div>
        <TextGenerateEffect
          words={tagLine}
          highlightWordIndex={[4, 5, 6]}
          className="text-center"
        />

        {btnNext}
      </div>
    </section>
  );
};

export default Hero;
