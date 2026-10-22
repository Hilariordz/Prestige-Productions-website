import Image from 'next/image';

export default function GallerySection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#111111]">
            Gallery: Nights Worth Remembering.
          </h2>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[420px]">
          
          <div className="md:col-span-4 relative h-[300px] md:h-full rounded-2xl overflow-hidden shadow-sm border border-white/20">
            <Image
              src=""
              alt="Wedding celebration with confetti"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="md:col-span-3 flex flex-col gap-4 h-[400px] md:h-full">
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-sm border border-white/20">
              <Image
                src=""
                alt="Elegantly decorated venue setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-sm border border-white/20">
              <Image
                src=""
                alt="Crowd enjoying concert lights"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>

          <div className="md:col-span-5 relative h-[300px] md:h-full rounded-2xl overflow-hidden shadow-sm border border-white/20">
            <Image
              src=""
              alt="Live stage show with audience hands raised"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}