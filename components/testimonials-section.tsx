'use client';
import React, { useEffect, useState } from 'react';
import SectionHeader from './section-header';
import TestimonialCard from './testimonial-card';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from './ui/carousel';

const testimonials = [
    {
        quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        title: "Marketing Director at XYZ Corp"
    },
    {
        quote: "Positivus has transformed our digital strategy. Their insights and execution have been invaluable. Our ROI has never been better. We're grateful for their partnership and look forward to continued success together.",
        name: "Jane Doe",
        title: "CEO at Example Inc."
    },
    {
        quote: "The team at Positivus is exceptional. They are not only experts in their field but also fantastic collaborators. They took the time to understand our unique needs and delivered a campaign that exceeded all expectations.",
        name: "Michael Brown",
        title: "Founder of Startup Co."
    },
];

export default function TestimonialsSection() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        if (!carouselApi) return;

        setCurrentIndex(carouselApi.selectedScrollSnap());

        const onSelect = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
        };

        carouselApi.on('select', onSelect);

        return () => {
            carouselApi.off('select', onSelect);
        };
    }, [carouselApi]);

    return (
        <section className="mb-[60px] md:mb-[100px] lg:mb-[140px] space-y-12 md:space-y-20">
            <SectionHeader
                title="Testimonials"
                description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More About Our Digital Marketing Services"
            />

            <div className="bg-dark rounded-[25px] md:rounded-[35px] lg:rounded-[40px] pt-[40px] md:pt-[60px] lg:pt-[84px] pb-[40px] md:pb-[54px] lg:pb-[68px] px-4 md:px-6 lg:px-0">

                <Carousel setApi={setCarouselApi} opts={{ loop: true }}>
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="basis-full lg:basis-1/2">
                                <TestimonialCard
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center items-center mt-[60px] md:mt-[90px] lg:mt-[124px] gap-[60px] md:gap-[120px] lg:gap-[200px]">
                        <button 
                            disabled={currentIndex === 0} 
                            onClick={() => carouselApi?.scrollPrev()}
                            className="flex-shrink-0"
                            aria-label="Previous testimonial"
                        >
                            <svg width="20" height="20" className="md:w-[23px] md:h-[23px]" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 12.5459C22.3284 12.5459 23 11.8743 23 11.0459C23 10.2175 22.3284 9.5459 21.5 9.5459L21.5 11.0459L21.5 12.5459ZM0.439341 9.98524C-0.146446 10.571 -0.146446 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439296C11.5208 -0.146491 10.5711 -0.146491 9.98528 0.439296L0.439341 9.98524ZM21.5 11.0459L21.5 9.5459L1.5 9.5459L1.5 11.0459L1.5 12.5459L21.5 12.5459L21.5 11.0459Z" fill="white" fillOpacity={currentIndex === 0 ? '0.3': '1'} />
                            </svg>
                        </button>

                        <div className='flex gap-[12px] md:gap-[19px]'>
                            {testimonials.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            carouselApi?.scrollTo(index)
                                        }}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    >
                                        <svg width="12" height="12" className="md:w-[14px] md:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" className={`${currentIndex === index ? 'fill-brand-lime' : 'fill-white'}`} />
                                        </svg>
                                    </button>
                                )
                            })}
                        </div>
                        
                        <button 
                            disabled={currentIndex === testimonials.length - 1} 
                            onClick={() => carouselApi?.scrollNext()}
                            className="flex-shrink-0"
                            aria-label="Next testimonial"
                        >
                            <svg width="20" height="20" className='rotate-180 md:w-[23px] md:h-[23px]' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 12.5459C22.3284 12.5459 23 11.8743 23 11.0459C23 10.2175 22.3284 9.5459 21.5 9.5459L21.5 11.0459L21.5 12.5459ZM0.439341 9.98524C-0.146446 10.571 -0.146446 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439296C11.5208 -0.146491 10.5711 -0.146491 9.98528 0.439296L0.439341 9.98524ZM21.5 11.0459L21.5 9.5459L1.5 9.5459L1.5 11.0459L1.5 12.5459L21.5 12.5459L21.5 11.0459Z" fill="white" fillOpacity={currentIndex === testimonials.length - 1 ? '0.3': '1'} />
                            </svg>
                        </button>
                    </div>
                </Carousel>

            </div>
        </section>
    );
}