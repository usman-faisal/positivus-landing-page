interface CardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ quote, name, title }: CardProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-12 h-full px-2 md:px-4">
      
      <div 
        className="
          border border-brand-lime 
          rounded-[20px]
          md:rounded-[25px]
          lg:rounded-[30px]
          text-white 
          text-sm
          md:text-base
          lg:text-nav 
          leading-relaxed
          md:leading-normal
          lg:leading-nav
          grow
          pt-6
          md:pt-10
          lg:pt-12
          px-6
          md:px-10
          lg:px-[52px]
          pb-6
          md:pb-10
          lg:pb-[52px]
          flex items-center justify-center
        "
      >
        "{quote}"
      </div>

      <div className="ml-6 md:ml-12 lg:ml-20">
        <h4 className="font-bold text-base md:text-lg text-white">{name}</h4>
        <p className="text-sm md:text-base text-gray-400">{title}</p>
      </div>
    </div>
  );
}