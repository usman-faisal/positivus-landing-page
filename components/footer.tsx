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
        <footer className="bg-dark text-white rounded-t-[45px] pt-[55px] pb-[50px] px-[60px] md:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <img src="/logos/logo-white.png" alt="Logo" className="h-9" />

                    <ul className='flex flex-wrap justify-center gap-6 md:gap-10 items-center'>
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a className='text-white hover:text-gray-300' href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        {/* <a href="#"><img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src={FacebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={TwitterIcon} alt="Twitter" className="w-6 h-6" /></a> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-16 mt-20">
                    <div className="flex flex-col gap-4 justify-between">
                        <span className="bg-brand-lime text-black font-medium px-[7px] rounded-[7px] self-start">
                            Contact us:
                        </span>
                        <p className="text-lg">Email: info@positivus.com</p>
                        <p className="text-lg">Phone: 555-567-8901</p>
                        <p className="text-lg">
                            Address: 1234 Main St<br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>

                    <div className="bg-[#292A32] p-8 rounded-[20px] flex flex-col justify-center py-[58px] px-10">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="
                  border-white text-white 
                  focus-visible:ring-brand-lime
                  py-[22px] px-[35px]
                  h-auto
                "
                            />
                            <Button className="bg-brand-lime  text-black  hover:bg-lime-400 ">
                                Subscribe to news
                            </Button>
                        </form>
                    </div>
                </div>

                <hr className="border-white my-[50px]" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
                    <p className="text-gray-400">© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#" className="text-gray-400 hover:text-white underline">
                        Privacy Policy
                    </a>
                </div>

            </div>
        </footer>
    );
}