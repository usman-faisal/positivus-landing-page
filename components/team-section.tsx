import SectionHeader from './section-header';
import TeamMemberCard from './team-member-card';
import Button from './button'; // Your reusable button

const teamMembers = [
  {
    id: 1,
    imageSrc: '/team/john-smith.png',
    name: 'John Smith',
    title: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    linkedInUrl: '#',
  },
  {
    id: 2,
    imageSrc: '/team/jane-doe.png',
    name: 'Jane Doe',
    title: 'Director of Operations',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    linkedInUrl: '#',
  },
  {
    id: 3,
    imageSrc: '/team/michael-brown.png',
    name: 'Michael Brown',
    title: 'Senior SEO Specialist',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    linkedInUrl: '#',
  },
  {
    id: 4,
    imageSrc: '/team/emily-johnson.png',
    name: 'Emily Johnson',
    title: 'PPC Manager',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    linkedInUrl: '#',
  },
  {
    id: 5,
    imageSrc: '/team/brian-williams.png',
    name: 'Brian Williams',
    title: 'Social Media Specialist',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    linkedInUrl: '#',
  },
  {
    id: 6,
    imageSrc: '/team/sarah-kim.png',
    name: 'Sarah Kim',
    title: 'Content Creator',
    description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    linkedInUrl: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="mb-[100px] ">
      
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            imageSrc={member.imageSrc}
            name={member.name}
            title={member.title}
            description={member.description}
            linkedInUrl={member.linkedInUrl}
          />
        ))}
      </div>

      <div className="text-end mt-10">
        <Button className="bg-dark text-white">
          See all team
        </Button>
      </div>
    </section>
  );
}