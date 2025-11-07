import SectionHeader from "./section-header";

function CaseStudyItem({ description, className }: { description: string, className?: string }) {
  return (
    <div className={`flex flex-col justify-between ${className} gap-5`}> 
      <p className="text-lg leading-6">{description}</p>
      <a href="#" className="flex items-center text-nav leading-[28px] text-brand-lime gap-[15px]">
        Learn more 
        <img src="/assets/arrow.png" alt="" className="w-[17px]" /> 
      </a>
    </div>
  )
}
2
export default function CaseStudiesSection() {
  return (
    <section className="mt-[164px] space-y-20">
      
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="
        bg-dark             
        text-white
        rounded-[45px]
        grid grid-cols-1    
        md:grid-cols-3   
        py-[70px]
        px-[60px]   
      ">
        
        <CaseStudyItem
        className="pr-16"
          description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        />

        <div className="md:border-l border-white">
          <CaseStudyItem
          className="px-16"
            description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
          />
        </div>
        
        <div className="md:border-l border-white">
          <CaseStudyItem
          className="pl-16"
            description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
          />
        </div>
      </div>
    </section>
  )
}