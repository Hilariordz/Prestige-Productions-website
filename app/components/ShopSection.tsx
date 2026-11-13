import Image from 'next/image';

const products = [
  {
    src: '/images/led-glasses.webp',
    title: 'LED Glasses',
    href: 'https://www.amazon.com/dp/B0BM446W9M?lv=shuf&linkCode=ml1&ascsubtag=srctok-4fb5cd4d65b3de0d&btn_type=ss&linkId=0470918743fd8725c8e4d8ec91a44a14&gaOptInStatus=true&tag=prestigepro0f-20&btn_ref=srctok-4fb5cd4d65b3de0d&channelId=704&ref_=cm_sw_r_as_gl_api_gl_i_31APPTP9TV0F7Z91ME75&plpRedirect=mhFallback',
  },
  {
    src: '/images/glow-sticks.webp',
    title: 'Glow Sticks',
    href: 'https://www.amazon.com/dp/B0DNW1HJ2J?lv=shuf&linkCode=ml1&ascsubtag=srctok-6d2000a8389f0869&btn_type=ss&linkId=8c5d4002c8e1d63b1fb109431933597b&gaOptInStatus=true&tag=prestigepro0f-20&btn_ref=srctok-6d2000a8389f0869&channelId=704&ref_=cm_sw_r_as_gl_api_gl_i_GF72R27TH9Z352FGJJDJ&plpRedirect=mhFallback&th=1',
  },
  {
    src: '/images/led-fiber-optic-wands.webp',
    title: 'LED Fiber Optic Wands',
    href: 'https://www.amazon.com/dp/B0B2WCNCV3?lv=shuf&linkCode=ml1&ascsubtag=srctok-17864ba6ea7a24f5&btn_type=ss&linkId=5a6186fb38392d64303b1ef026bb726a&gaOptInStatus=true&tag=prestigepro0f-20&btn_ref=srctok-17864ba6ea7a24f5&channelId=704&ref_=cm_sw_r_as_gl_api_gl_i_KPV9ZN2MRYJAYSKXXKCR&plpRedirect=mhFallback&th=1',
  },
  {
    src: '/images/glow-party-bundle.webp',
    title: '150-Piece Glow Party Bundle',
    href: 'https://www.amazon.com/dp/B0CWNTL35B?lv=shuf&linkCode=ml1&ascsubtag=srctok-4f90d6af80ebe747&btn_type=ss&linkId=551e0a5c58adb376811dfde2a6f5ff69&gaOptInStatus=true&tag=prestigepro0f-20&btn_ref=srctok-4f90d6af80ebe747&channelId=704&ref_=cm_sw_r_as_gl_api_gl_i_AM784MCMJRNXQ99AX998&plpRedirect=mhFallback',
  },
];

export default function GlowSection() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-14 text-white md:px-12 md:py-20 lg:px-24">
      <Image
        src="/images/prestige-glow-party-background-v2.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-4">
          <p className="font-serif text-lg italic text-[#D4AF37]">Shop</p>
          <h2 className="mt-2 font-serif text-4xl leading-[1.1] text-white md:text-5xl">
            Glow Up
            <br />
            Your Party.
          </h2>
          <div className="mt-5 h-px w-12 bg-[#D4AF37]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#A8A29A]">
            LED and neon party essentials to light up your celebration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:col-span-8">
          {products.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[200px] overflow-hidden rounded-[4px] border border-[#2A2412] bg-[#111111] sm:h-[240px] lg:h-[340px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 md:p-4">
                <span className="text-xs text-white md:text-sm">{item.title}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] text-white transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}