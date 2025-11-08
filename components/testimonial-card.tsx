interface CardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ quote, name, title }: CardProps) {
  return (
    <div className="flex flex-col gap-12 h-full">
      
      <div 
        className="
          border border-brand-lime 
          rounded-[30px]
          text-white text-nav leading-nav
          grow
          pt-12
          px-[52px]
          pb-[52px]
          flex items-center justify-center
        "
      >
        "{quote}"
      </div>

      <div className="ml-20">
        <h4 className="font-bold text-lg text-white">{name}</h4>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  );
}