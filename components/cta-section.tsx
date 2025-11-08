import Button from "./button";

export default function CtaSection() {
  return (
    <section className="relative mt-30 ">
      
      <div className="bg-light rounded-[30px] p-[60px] grid grid-cols-1 items-center">
        
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h2 className="font-medium text-3xl">
            Let's make things happen
          </h2>
          <p className="text-lg leading-nav">
            Contact us today to learn more about how our digital
            marketing services can help your business grow and
            succeed online.
          </p>
          <Button className="bg-dark text-white self-start">
            Get your free proposal
          </Button>
        </div>
        
        <div></div>

      </div>

      <img 
        src="/assets/cta-illustration.png" 
        alt="Decorative illustration"
        className="absolute w-[360px] -top-4 right-[186px] z-10 hidden lg:block"
      />
    </section>
  );
}