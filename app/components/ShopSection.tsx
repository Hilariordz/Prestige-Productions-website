import Image from 'next/image';

const products = [
  { src: '/glow/led-glasses.jpg', title: 'LED Glasses' },
  { src: '/glow/glow-sticks.jpg', title: 'Glow Sticks' },
  { src: '/glow/led-balloons.jpg', title: 'LED Balloons' },
  { src: '/glow/neon-signs.jpg', title: 'Neon Light Signs' },
];

export default function GlowSection() {
  return (
    <section className="w-full bg-[#0B0B0B] px-5 py-14 text-white md:px-12 md:py-20 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
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
          <a
            href="#shop"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8921F] px-6 py-3 text-sm font-medium text-[#0B0B0B] transition-opacity duration-300 hover:opacity-90"
          >
            Shop the Glow
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:col-span-8">
          {products.map((item) => (
            <a
              key={item.title}
              href="#shop"
              className="group relative h-[200px] overflow-hidden rounded-[4px] border border-[#2A2412] bg-[#111111] sm:h-[240px] lg:h-[260px]"
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