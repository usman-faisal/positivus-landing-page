"use client"

import { useState } from 'react'
import Button from './button'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center mt-[40px] md:mt-[60px] mb-[40px] md:mb-[70px] relative">
            <img src="/assets/logo.png" alt="Logo" className="h-7 md:h-9 z-20" />
            
            <button 
                className="lg:hidden z-20 flex flex-col gap-1.5 w-8 h-8 justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-full bg-dark transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-dark transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-dark transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <ul className='hidden lg:flex gap-10 items-center justify-center'>
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

            <div className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out z-10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-8 items-center justify-center h-full pt-20'>
                    <li>
                        <a className='text-nav text-xl' href="#" onClick={() => setIsMenuOpen(false)}>
                            About us
                        </a>
                    </li>
                    <li>
                        <a className='text-nav text-xl' href="#" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a className='text-nav text-xl' href="#" onClick={() => setIsMenuOpen(false)}>
                            Use Cases
                        </a>
                    </li>
                    <li>
                        <a className='text-nav text-xl' href="#" onClick={() => setIsMenuOpen(false)}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a className='text-nav text-xl' href="#" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </a>
                    </li>
                    <li className="mt-4">
                        <Button >
                            Request a quote
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}