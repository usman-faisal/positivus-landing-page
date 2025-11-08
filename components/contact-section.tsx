import Button from "./button";
import SectionHeader from "./section-header";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
    return (
        <section className="mb-[140px]">

            <SectionHeader
                title="Contact Us"
                description="Connect with Us: Let’s Discuss Your Digital Marketing Needs"
            />

            <div className="
        mt-12 bg-light rounded-[40px] pt-20
        px-[100px] pb-20
        grid grid-cols-1 md:grid-cols-2 gap-16
        relative overflow-hidden
      ">

                <form className="flex flex-col gap-[25px]">
                    <RadioGroup defaultValue="say-hi" className="flex gap-[35px] mb-[15px]">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="say-hi" className="w-7 h-7" id="r1" />
                            <Label htmlFor="r1" className="font-normal text-lg">Say Hi</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="get-quote" className="w-7 h-7" id="r2" />
                            <Label htmlFor="r2" className="font-normal text-lg">Get a Quote</Label>
                        </div>
                    </RadioGroup>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name" className="font-normal">Name</Label>
                        <Input type="text" className="bg-white py-[18px] px-[30px]" id="name" placeholder="Name" />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email" className="font-normal">Email*</Label>
                        <Input type="email" className="bg-white py-[18px] px-[30px]" id="email" placeholder="Email" />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="message" className="font-normal">Message*</Label>
                        <Textarea id="message" placeholder="Message" className="min-h-[150px] bg-white py-[18px] px-[30px]" />
                    </div>

                    <Button className="bg-dark text-white self-stretch">
                        Send Message
                    </Button>

                </form>
                <img
                    src="/illustrations/contact-illustration.png"
                    alt=""
                    className="
            absolute -right-75 top-7 w-[650px]
            hidden md:block
          "
                />
            </div>
        </section>
    );
}