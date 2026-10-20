import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 px-6 md:px-16 lg:px-24 min-h-[500px] flex items-center justify-center overflow-hidden">
      {}
      <div className="absolute inset-0 bg-[radial-gradient(#EADECB_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {}
        <div className="lg:col-span-6 space-y-6">
          
          {}
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.2em] font-semibold text-[#8C8275] uppercase">
              YOUR NIGHT. OUR PRESTIGE.
            </span>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>

          {}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight text-[#111111]">
            Make Your Night <br />
            Unforgettable.
          </h1>

          {}
          <p className="text-[#666666] text-base md:text-lg max-w-lg leading-relaxed font-light">
            Premium DJ, MC & live entertainment for weddings, corporate events and celebrations.
          </p>

          {}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {}
            <a
              href="#availability"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89726] text-black font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-105"
            >
              Check Availability
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {}
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#D4AF37]/50 text-[#222222] font-medium text-sm transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
            >
              Explore Services
            </a>
          </div>
        </div>

        {}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end min-h-[380px] sm:min-h-[440px]">
          
          {}
          <div className="absolute top-0 right-4 sm:right-8 z-30 text-right">
            <div className="flex items-center gap-3 justify-end">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                500+
              </span>
            </div>
            <div className="flex items-center gap-2 justify-end mt-1">
              <span className="text-xs font-medium text-[#777777]">Events</span>
              <div className="h-[1px] w-10 bg-[#D4AF37]" />
            </div>
          </div>

          {}
          <div className="absolute top-8 left-0 sm:left-6 w-[220px] sm:w-[280px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-xl z-10 border border-white/20">
            <Image
              src="" 
              alt="DJ Mixing Board"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 220px, 280px"
              priority
            />
          </div>

          {}
          <div className="absolute bottom-0 right-0 sm:right-4 w-[240px] sm:w-[310px] h-[300px] sm:h-[370px] rounded-2xl overflow-hidden shadow-2xl z-20 border-2 border-white">
            <Image
              src="/"
              alt="Wedding Celebration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 240px, 310px"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}