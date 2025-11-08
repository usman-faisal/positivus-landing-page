import SectionHeader from "./section-header";

function CaseStudyItem({ description, className }: { description: string, className?: string }) {
  return (
    <div className={`flex flex-col justify-between ${className} gap-5`}> 
      <p className="text-base md:text-lg leading-relaxed md:leading-6">{description}</p>
      <a href="#" className="flex items-center text-sm md:text-nav leading-[28px] text-brand-lime gap-[15px]">
        Learn more 
        <img src="/assets/arrow.png" alt="" className="w-[15px] md:w-[17px]" /> 
      </a>
    </div>
  )
}

export default function CaseStudiesSection() {
  return (
    <section className="mt-[60px] md:mt-[100px] lg:mt-[164px] space-y-12 md:space-y-20">
      
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="
        bg-dark             
        text-white
        rounded-[25px]
        md:rounded-[35px]
        lg:rounded-[45px]
        grid 
        grid-cols-1    
        md:grid-cols-3   
        py-[40px]
        md:py-[60px]
        lg:py-[70px]
        px-[30px]
        md:px-[45px]
        lg:px-[60px]
        gap-8
        md:gap-0
      ">
        
        <CaseStudyItem
          className="md:pr-12 lg:pr-16"
          description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        />

        <div className="md:border-l border-white md:border-t-0 border-t pt-8 md:pt-0">
          <CaseStudyItem
            className="md:px-12 lg:px-16"
            description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
          />
        </div>
        
        <div className="md:border-l border-white md:border-t-0 border-t pt-8 md:pt-0">
          <CaseStudyItem
            className="md:pl-12 lg:pl-16"
            description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
          />
        </div>
      </div>
    </section>
  )
}