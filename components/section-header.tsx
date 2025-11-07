interface SectionHeaderProps {
  title: string;
  description: string;
}


export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-10 ">
      <h2 className="bg-brand-lime text-[40px] font-medium px-[7px] rounded-[7px]">
        {title}
      </h2>

      <p className="text-lg leading-nav max-w-[580px]">
        {description}
      </p>
    </div>
  );
}