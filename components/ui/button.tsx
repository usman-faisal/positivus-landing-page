export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`py-5 px-[35px] border rounded-[14px] text-nav ${className}`}>
            {children}
        </button>

    )
}