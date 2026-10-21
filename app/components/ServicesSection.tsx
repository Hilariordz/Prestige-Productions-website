import Image from 'next/image';

type ServiceCardProps = {
  src: string;
  title: string;
  subtitle?: string;
  large?: boolean;
  className?: string;
};

function ServiceCard({ src, title, subtitle, large = false, className = '' }: ServiceCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[4px] bg-[#111111] ${className}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 ${
          large
            ? 'bg-gradient-to-t from-black/80 via-black/30 to-black/10'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-black/70'
        }`}
      />

      {large ? (
        <div className="relative flex h-full flex-col justify-end gap-6 p-6 md:p-8">
          <h3 className="max-w-md font-serif text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Extraordinary nights.
            <br />
            Effortlessly delivered.
          </h3>
          <div className="flex justify-end">
            <ArrowButton />
          </div>
        </div>
      ) : (
        <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
          <div>
            <h3 className="font-serif text-2xl leading-tight text-white md:text-3xl">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-xs leading-relaxed text-white/85 md:text-sm">{subtitle}</p>
            )}
          </div>
          <div className="flex justify-end">
            <ArrowButton />
          </div>
        </div>
      )}
    </article>
  );
}

function ArrowButton() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F4F0EA] px-5 py-14 md:px-12 md:py-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4 md:mb-10">
          <h2 className="font-serif text-4xl text-[#111111] md:text-5xl">Our Services</h2>
          <div className="h-px w-16 bg-[#D4AF37] md:w-24" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <ServiceCard
            large
            src="/services/dj.jpg"
            title="Extraordinary nights."
            className="min-h-[340px] sm:min-h-[400px] md:min-h-[480px]"
          />

          <div className="flex flex-col gap-4 md:gap-5">
            <ServiceCard
              src="/services/sound.jpg"
              title="The Sound"
              subtitle="DJ • Music that moves you."
              className="h-[200px] md:h-[225px]"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
              <ServiceCard
                src="/services/voice.jpg"
                title="The Voice"
                subtitle="MC / Emcee • Every moment, connected."
                className="h-[220px] md:h-[240px]"
              />
              <ServiceCard
                src="/services/experience.jpg"
                title="The Full Experience"
                subtitle="Event Packages • Seamless from start to finish."
                className="h-[220px] md:h-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}