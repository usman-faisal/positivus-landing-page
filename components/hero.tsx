import Button from "./ui/button";
import HeroImage from "../assets/hero-image.png"
export default function Hero() {
    return (
        <main className="grid-rows-[min_content] grid grid-cols-2">
            <div className="flex self-start flex-col justify-between h-full gap-[35px] pb-[34px]">
                <h1 className="font-medium text-6xl leading-20">
                    Navigating the <br /> digital landscape <br /> for success
                </h1>
                <p className="text-nav leading-nav max-w-[500px]">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <Button className="bg-dark self-start text-white cursor-pointer">
                    Book a consultation
                </Button>
            </div>
            <img src="/assets/hero-image.png" alt="Hero Image" />
        </main>
    )
}