import ServiceCard from './service-card';
import SectionHeader from './section-header';

export default function ServicesSection() {
  return (
    <section className="my-[40px] md:my-[70px] space-y-12 md:space-y-20">
      <SectionHeader 
        title="Services" 
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12">
        <ServiceCard
          variant="light"
          illustrationSrc="/assets/seo-illustration.png"
          title={
            <>
              Search engine<br />optimization
            </>
          }
        />

        <ServiceCard
          variant="lime"
          illustrationSrc="/assets/ppc-illustration.png"
          title={
            <>
              Pay-per-click<br />advertising
            </>
          }
        />
        
        <ServiceCard
          variant="dark"
          illustrationSrc="/assets/social-media-illustration.png"
          title={<>Social Media<br />Marketing</>}
        />

        <ServiceCard
          variant="light"
          illustrationSrc="/assets/email-illustration.png"
          title={
            <>
              Email<br />Marketing
            </>
          }
        />

        <ServiceCard
          variant="lime"
          illustrationSrc="/assets/content-illustration.png"
          title={
            <>
              Content<br />Creation
            </>
          }
        />

        <ServiceCard
          variant="dark"
          illustrationSrc="/assets/analytics-illustration.png"
          title={
            <>
              Analytics and<br />Tracking
            </>
          }
        />
      </div>
    </section>
  );
}