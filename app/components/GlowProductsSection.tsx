import Image from 'next/image';

export default function GlowProductsSection() {
  const products = [
    {
      title: "LED Glasses",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Glow Sticks",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "LED Balloons",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500&auto=format&fit=crop",
    },
    {
      title: "Neon Light Signs",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0C] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-4 space-y-6">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            LED and neon party essentials to light up your celebration.
          </p>

          <div>
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89726] text-black font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-105"
            >
              Shop the Glow
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative h-48 sm:h-56 rounded-xl overflow-hidden border border-white/10 bg-black/50 cursor-pointer transition-all duration-300 hover:border-[#D4AF37]/60"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 640px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                  {item.title}
                </span>

                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}