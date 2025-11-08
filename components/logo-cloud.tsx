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
    <div className="my-[70px] w-full overflow-hidden">
      <div className="flex gap-8 md:gap-12 lg:gap-16 animate-marquee hover:[animation-play-state:paused]">
        {logos.map((logo, index) => (
          <div key={`${logo.alt}-1-${index}`} className="shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`${logo.alt}-2-${index}`} className="shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}