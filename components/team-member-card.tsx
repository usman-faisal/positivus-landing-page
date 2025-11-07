
interface CardProps {
    imageSrc: string;
    name: string;
    title: string;
    description: string;
    linkedInUrl: string;
}

export default function TeamMemberCard({
    imageSrc,
    name,
    title,
    description,
    linkedInUrl,
}: CardProps) {

    return (
        <div className="border border-dark shadow-[0px_5px_0px_0px_#191A23] rounded-[40px] py-10 px-[35px] flex flex-col h-full">
            <div className="flex justify-between items-start">
                <div className="flex gap-5">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-[106px] h-[106px]"
                    />
                    <div className="mt-auto">
                        <h3 className="text-xl font-medium">{name}</h3>
                        <p className="text-lg">{title}</p>
                    </div>
                </div>

                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
            </div>



            <hr className="my-7 border-dark" />

            <p className="text-lg">
                {description}
            </p>
        </div>
    );
}