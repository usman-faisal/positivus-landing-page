import Button from './ui/button'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mt-[60px] mb-[70px]">
            <img src="/assets/logo.png" alt="Logo" className="h-9" />
            <ul className='flex gap-10 items-center justify-center'>
                <li>
                    <a className='text-nav' href="#">
                        About us
                    </a>
                </li>
                <li>
                    <a className='text-nav' href="#">
                        Services
                    </a>
                </li>
                <li>
                    <a className='text-nav' href="#">
                        Use Cases
                    </a>
                </li>
                <li>
                    <a className='text-nav' href="#">
                        Pricing
                    </a>
                </li>
                <li>
                    <a className='text-nav' href="#">
                        Blog
                    </a>
                </li>
                <li className="-ml-5">
                    <Button>
                        Request a quote
                    </Button>
                </li>
            </ul>
        </nav>
    )
}