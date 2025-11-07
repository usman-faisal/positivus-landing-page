const logos = [
  { src: '/assets/amazon.png', alt: 'Amazon' },
  { src: '/assets/dribble.png', alt: 'Dribbble' },
  { src: '/assets/hubspot.png', alt: 'HubSpot' },
  { src: '/assets/notion.png', alt: 'Notion' },
  { src: '/assets/netflix.png', alt: 'Netflix' },
  { src: '/assets/zoom.png', alt: 'Zoom' },
];

export default function LogoCloud() {
  return (
    <div className='my-[70px]'>
      <div className="flex justify-between items-center gap-8">
        {logos.map((logo) => (
          <img 
            key={logo.alt} 
            src={logo.src} 
            alt={logo.alt} 
            className="h-12 w-auto grayscale" 
          />
        ))}
      </div>
    </div>
  );
}