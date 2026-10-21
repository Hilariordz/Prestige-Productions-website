import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0B0B0B] text-white">
      <div className="flex items-center justify-center gap-4 border-b border-[#2A2412] py-3 text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <span>DJ • MC / EMCEE • Weddings • Corporate Events • Private Parties</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>

      <div className="relative h-[330px] md:h-[400px] w-full overflow-hidden">
        <Image
          src="/host.jpg"
          alt="The Host"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent" />

        <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white">
              The Host <br />
              Behind Your Night.
            </h2>
            <div className="mt-6 space-y-3">
              <h3 className="font-serif text-base md:text-lg text-[#E8E2D6]">
                Music that moves the room. <br />
                A host who brings it all together.
              </h3>
              <p className="text-sm leading-relaxed text-[#A8A29A] max-w-sm">
                From the first track to the final moment, I create unforgettable experiences with music, energy and a seamless flow.
              </p>
            </div>
            <a
              href="#host"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Meet Your Host
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 border-y border-[#2A2412] py-8 text-center">
        {[
          { value: '500+', label: 'Events' },
          { value: '10+', label: 'Years of Experience' },
          { value: '250+', label: 'Celebrations' },
          { value: '500+', label: 'Happy Clients' },
        ].map((stat, i) => (
          <div
            key={i}
            className="space-y-1 px-4 py-4 md:border-r md:border-[#2A2412] last:border-r-0"
          >
            <span className="block font-serif text-4xl md:text-5xl font-semibold text-[#C9A227]">
              {stat.value}
            </span>
            <p className="text-sm text-[#CFC8BC]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}