'use client';
import { useState } from 'react';
import SectionHeader from './section-header';
import AccordionItem from './accordion-item';

const processSteps = [
    {
        id: 1,
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        id: 2,
        title: 'Research and Strategy Development',
        description: 'Our team will conduct in-depth research to develop a customized strategy for your business.'
    },
    {
        id: 3,
        title: 'Implementation',
        description: 'We will execute the planned strategy, whether it involves SEO, PPC, or content creation.'
    },
    {
        id: 4,
        title: 'Monitoring and Optimization',
        description: 'We continuously monitor the performance of our campaigns and make necessary adjustments to optimize results.'
    }, {
        id: 5,
        title: 'Reporting and Communication',
        description: 'We provide regular reports detailing the performance of our marketing efforts, along with insights and recommendations for future strategies.'
    },
    {
        id: 6,
        title: 'Continual Improvement',
        description: 'We believe in continual improvement and will work closely with you to refine and enhance our strategies to ensure sustained success.'
    }
];

export default function WorkingProcessSection() {
    const [openItemId, setOpenItemId] = useState(1);

    return (
        <section className="my-[140px] space-y-20">
            <SectionHeader
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals"
            />

            <div className="mt-12 flex flex-col gap-[30px]">
                {processSteps.map((step) => (
                    <AccordionItem
                        key={step.id}
                        number={`0${step.id}`}
                        title={step.title}
                        isOpen={openItemId === step.id}
                        onToggle={() => {
                            setOpenItemId(openItemId === step.id ? 0 : step.id);
                        }}
                    >
                        {step.description}
                    </AccordionItem>
                ))}
            </div>
        </section>
    );
}