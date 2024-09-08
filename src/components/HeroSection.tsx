import heroDesktop from "../images/image-hero-desktop.png";
import databizClient from "../images/client-databiz.svg";
import audiophileClient from "../images/client-audiophile.svg";
import meetClient from "../images/client-meet.svg";
import makerClient from "../images/client-maker.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-12 lg:gap-32 md:flex-row-reverse items-center">
      <div className="max-w-[100%] md:max-w-[45%] mx-auto">
        <img src={heroDesktop} />
      </div>
      <div className="space-y-4 md:space-y-8 md:max-w-[500px]">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center md:text-left">
          Make remote work
        </h1>
        <p className="text-med-gray max-w-96 mx-auto md:mx-0 md:max-w-[420px] text-center md:text-left">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-almost-black border-2 border-almost-black font-medium hover:text-almost-black hover:bg-almost-white rounded-2xl px-6 py-3 text-white">
            Learn more
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center md:justify-start py-10">
          <img src={databizClient} className="w-16 sm:w-20 lg:w-24" />
          <img src={audiophileClient} className="w-16 sm:w-20 lg:w-24" />
          <img src={meetClient} className="w-16 sm:w-20 lg:w-24" />
          <img src={makerClient} className="w-16 sm:w-20 lg:w-24" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
