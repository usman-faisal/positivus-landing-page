import Button from "./button";
import SectionHeader from "./section-header";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
    return (
        <section className="mb-[60px] md:mb-[100px] lg:mb-[140px]">

            <SectionHeader
                title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
            />

            <div className="
                mt-8 md:mt-12 
                bg-light 
                rounded-[25px] md:rounded-[35px] lg:rounded-[40px] 
                pt-10 md:pt-16 lg:pt-20
                px-6 md:px-12 lg:px-[100px] 
                pb-10 md:pb-16 lg:pb-20
                grid grid-cols-1 lg:grid-cols-2 
                gap-8 md:gap-12 lg:gap-16
                relative overflow-hidden
            ">

                <form className="flex flex-col gap-5 md:gap-[25px] z-10">
                    <RadioGroup defaultValue="say-hi" className="flex flex-col sm:flex-row gap-4 sm:gap-[35px] mb-2 md:mb-[15px]">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="say-hi" className="w-5 h-5 md:w-7 md:h-7" id="r1" />
                            <Label htmlFor="r1" className="font-normal text-base md:text-lg">Say Hi</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="get-quote" className="w-5 h-5 md:w-7 md:h-7" id="r2" />
                            <Label htmlFor="r2" className="font-normal text-base md:text-lg">Get a Quote</Label>
                        </div>
                    </RadioGroup>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name" className="font-normal text-sm md:text-base">Name</Label>
                        <Input 
                            type="text" 
                            className="bg-white py-3 md:py-[18px] px-5 md:px-[30px] text-sm md:text-base" 
                            id="name" 
                            placeholder="Name" 
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email" className="font-normal text-sm md:text-base">Email*</Label>
                        <Input 
                            type="email" 
                            className="bg-white py-3 md:py-[18px] px-5 md:px-[30px] text-sm md:text-base" 
                            id="email" 
                            placeholder="Email" 
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="message" className="font-normal text-sm md:text-base">Message*</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Message" 
                            className="min-h-[120px] md:min-h-[150px] bg-white py-3 md:py-[18px] px-5 md:px-[30px] text-sm md:text-base resize-none" 
                        />
                    </div>

                    <Button className="bg-dark text-white self-stretch text-sm md:text-base">
                        Send Message
                    </Button>

                </form>

                <img
                    src="/illustrations/contact-illustration.png"
                    alt=""
                    className="
                        absolute -right-20 md:-right-40 lg:-right-75 
                        top-4 md:top-6 lg:top-7 
                        w-[400px] md:w-[500px] lg:w-[650px]
                        hidden lg:block
                        opacity-90 lg:opacity-100
                    "
                />
            </div>
        </section>
    );
}