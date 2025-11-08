import Button from "./button";

export default function Hero() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[min_content] gap-8 lg:gap-0">
      <div className="flex self-start flex-col justify-between h-full gap-[20px] md:gap-[35px] pb-[20px] md:pb-[34px] order-2 lg:order-1">
        <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug lg:leading-20">
          Navigating the <br /> digital landscape <br /> for success
        </h1>

        <p className="text-base md:text-nav leading-relaxed md:leading-nav max-w-full lg:max-w-[500px]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>

        <Button className="bg-dark self-start text-white cursor-pointer w-full sm:w-auto">
          Book a consultation
        </Button>
      </div>

      <img 
        src="/assets/hero-image.png" 
        alt="Hero Image" 
        className="w-full h-auto order-1 lg:order-2"
      />
    </main>
  );
}