interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
      <h2 className="bg-brand-lime text-3xl md:text-[40px] inline md:block font-medium px-[7px] rounded-[7px] whitespace-nowrap">
        {title}
      </h2>

      <p className="text-base md:text-lg leading-relaxed md:leading-nav max-w-full md:max-w-[580px]">
        {description}
      </p>
    </div>
  );
}