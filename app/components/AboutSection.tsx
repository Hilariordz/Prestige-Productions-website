import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="bg-[#0B0B0B] py-3">
        <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span>DJ • MC / EMCEE • Weddings • Corporate Events • Private Parties</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#F4F0EA]">
        <div className="absolute inset-y-0 right-0 w-full md:w-[45%]">
          <Image
            src="/host.jpg"
            alt="The Host"
            fill
            priority
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0EA] via-[#F4F0EA]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[360px] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-14 md:min-h-[400px] md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.1] text-[#111111] md:text-5xl">
              The Host <br />
              Behind Your Night.
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <h3 className="font-serif text-sm leading-snug text-[#222222] md:text-base">
              Music that moves the room. <br />
              A host who brings it all together.
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#666666] md:text-sm">
              From the first track to the final moment, I create unforgettable experiences with music, energy and a seamless flow.
            </p>
            <a
              href="#host"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2 text-xs text-[#111111] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-white"
            >
              Meet Your Host
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF8F5] text-[#1A1A1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 border-y border-[#E5E0D8] py-8 text-center md:grid-cols-4">
          {[
            { value: '500+', label: 'Events' },
            { value: '10+', label: 'Years of Experience' },
            { value: '250+', label: 'Celebrations' },
            { value: '500+', label: 'Happy Clients' },
          ].map((stat, i) => (
            <div
              key={i}
              className="space-y-1 px-4 py-4 md:border-r md:border-[#E5E0D8] last:border-r-0"
            >
              <span className="block font-serif text-4xl font-semibold text-[#B8921F] md:text-5xl">
                {stat.value}
              </span>
              <p className="text-sm text-[#5C5650]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}