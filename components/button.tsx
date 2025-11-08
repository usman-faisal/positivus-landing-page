export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`py-3 px-[18px]  xl:py-5 xl:px-[35px] border rounded-[14px] border-dark cursor-pointer text-nav ${className}`}>
            {children}
        </button>

    )
}