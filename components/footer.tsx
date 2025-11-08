import { Input } from './ui/input';
import Button from './button';

const navLinks = [
    { href: '#', label: 'About us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Use Cases' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Blog' },
];

export default function Footer() {
    return (
        <footer className="bg-dark text-white rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[45px] pt-10 md:pt-12 lg:pt-[55px] pb-8 md:pb-10 lg:pb-[50px] px-6 md:px-12 lg:px-[60px]">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <img src="/logos/logo-white.png" alt="Logo" className="h-7 md:h-8 lg:h-9" />

                    <ul className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 items-center text-sm md:text-base'>
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a className='text-white hover:text-gray-300 transition-colors' href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 md:gap-4">
                        <a href="#" aria-label="LinkedIn">
                            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src="/icons/facebook.png" alt="Facebook" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img src="/icons/twitter.png" alt="Twitter" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                    <div className="flex flex-col gap-3 md:gap-4 justify-between">
                        <span className="bg-brand-lime text-black font-medium px-[7px] rounded-[7px] self-start text-sm md:text-base">
                            Contact us:
                        </span>
                        <p className="text-base md:text-lg">Email: info@positivus.com</p>
                        <p className="text-base md:text-lg">Phone: 555-567-8901</p>
                        <p className="text-base md:text-lg">
                            Address: 1234 Main St<br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>

                    <div className="bg-[#292A32] p-6 md:p-8 lg:p-10 rounded-[14px] md:rounded-[17px] lg:rounded-[20px] flex flex-col justify-center py-10 md:py-12 lg:py-[58px]">
                        <form className="flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="
                                    border-white text-white 
                                    focus-visible:ring-brand-lime
                                    py-4 md:py-5 lg:py-[22px] 
                                    px-5 md:px-7 lg:px-[35px]
                                    h-auto
                                    text-sm md:text-base
                                "
                            />
                            <Button className="bg-brand-lime text-black hover:bg-lime-400 transition-colors text-sm md:text-base">
                                Subscribe to news
                            </Button>
                        </form>
                    </div>
                </div>

                <hr className="border-white my-8 md:my-10 lg:my-[50px]" />
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
                    <p className="text-gray-400 text-center md:text-left">© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#" className="text-gray-400 hover:text-white underline transition-colors">
                        Privacy Policy
                    </a>
                </div>

            </div>
        </footer>
    );
}