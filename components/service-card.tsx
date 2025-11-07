import type React from "react";
export default function ServiceCard(
    { title, illustrationSrc, variant }: { title: React.ReactNode, illustrationSrc: string, variant: 'light' | 'dark' | 'lime' }
) {
    const colors = {
        light: {
            bgColor: 'bg-light',
            textColor: 'text-black',
            arrow: '/assets/arrow-v1.png',
            textBgColor: 'bg-brand-lime'
        },
        dark: {
            bgColor: 'bg-dark',
            arrow: '/assets/arrow-v2.png',
            textColor: 'text-black',
            textBgColor: 'bg-white'
        },
        lime: {
            bgColor: 'bg-brand-lime',
            arrow: '/assets/arrow-v1.png',
            textColor: 'text-black',
            textBgColor: 'bg-white'
        }
    }

    return (
        <div
            className={`rounded-[30px] p-[50px] shadow-[0px_5px_0px_0px_#191A23] flex ${colors[variant].bgColor}`}
            style={{ height: '310px' }}
        >
            <div className="flex flex-col justify-between">
                <h3 className={`text-3xl font-medium ${colors[variant].textColor} leading-tight`}>
                    <span
                        className={`${colors[variant].textBgColor} px-[7px] rounded-md box-decoration-clone`}
                        style={{
                            display: 'inline',
                            lineHeight: '1.3',
                            boxDecorationBreak: 'clone',
                            WebkitBoxDecorationBreak: 'clone'
                        }}
                    >
                        {title}
                    </span>
                </h3>
                <div className="flex items-center gap-[15px]">
                    <img src={colors[variant].arrow} className="w-[41px]" alt="Arrow" />
                    <span className={`${colors[variant].textColor}`}>
                        Learn More
                    </span>
                </div>
            </div>

            <img src={illustrationSrc} className="self-center ml-auto w-[210px]" />

        </div>
    )
}