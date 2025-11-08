interface AccordionItemProps {
  number: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  number,
  title,
  children,
  isOpen,
  onToggle
}: AccordionItemProps) {

  const bgClass = isOpen ? 'bg-brand-lime' : 'bg-light';

  return (
    <div
      className={`border space-y-[60px] shadow-[0px_5px_0px_0px_#191A23] border-light rounded-[45px] py-10 px-[60px] ${bgClass} transition-all duration-300`}
    >
      <button
        className="flex justify-between border-black items-center w-full cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-[25px]">
          <span className={`text-6xl font-medium block`}>{number}</span>
          <h3 className={`text-3xl font-medium`}>{title}</h3>
        </div>

        <div className="rounded-full p-4 border border-black bg-light flex items-center justify-center w-[57px] h-[57px]">
          {isOpen ? (
            <svg width="25" height="5" viewBox="0 0 25 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="5" fill="black" />
            </svg>
          ) : (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0V25M0 12.5H25" stroke="black" strokeWidth="5" />
            </svg>
          )}
        </div>

      </button>

      {isOpen && <div className="border-t border-black" />}

      {isOpen && (
        <div className="">
          <p className="text-lg ">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}