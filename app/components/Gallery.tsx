'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
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
            <button
              type="button"
              onClick={() => setSelectedImage({ src: '/images/866.webp', alt: 'Wedding celebration with confetti' })}
              className="absolute inset-0 cursor-zoom-in"
              aria-label="Open Wedding celebration with confetti"
            >
              <Image
                src="/images/866.webp"
                alt="Wedding celebration with confetti"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </button>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4 h-[400px] md:h-full">
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-sm border border-white/20">
              <button
                type="button"
                onClick={() => setSelectedImage({ src: '/images/568.webp', alt: 'Elegantly decorated venue setup' })}
                className="absolute inset-0 cursor-zoom-in"
                aria-label="Open Elegantly decorated venue setup"
              >
                <Image
                  src="/images/568.webp"
                  alt="Elegantly decorated venue setup"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </button>
            </div>
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-sm border border-white/20">
              <button
                type="button"
                onClick={() => setSelectedImage({ src: '/images/646.webp', alt: 'Crowd enjoying concert lights' })}
                className="absolute inset-0 cursor-zoom-in"
                aria-label="Open Crowd enjoying concert lights"
              >
                <Image
                  src="/images/646.webp"
                  alt="Crowd enjoying concert lights"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative h-[300px] md:h-full rounded-2xl overflow-hidden shadow-sm border border-white/20">
            <button
              type="button"
              onClick={() => setSelectedImage({ src: '/images/IMG_1552.webp', alt: 'Live stage show with audience hands raised' })}
              className="absolute inset-0 cursor-zoom-in"
              aria-label="Open Live stage show with audience hands raised"
            >
              <Image
                src="/images/IMG_1552.webp"
                alt="Live stage show with audience hands raised"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </button>
          </div>

        </div>

      </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 text-2xl text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Close image"
          >
            &times;
          </button>
          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}