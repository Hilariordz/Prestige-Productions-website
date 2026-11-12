import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="w-full bg-[#0a0a0a] px-6 py-7 text-white md:px-12">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-5 md:flex-row">
          <Image
            src="/images/1340.webp"
            alt="Prestige Productions"
            width={160}
            height={50}
            className="h-11 w-auto object-contain"
          />
          <nav className="flex flex-wrap justify-center gap-5 text-xs text-white/80">
            <Link href="/about" className="hover:text-[#d4af37]">About</Link>
            <Link href="/#services" className="hover:text-[#d4af37]">Services</Link>
            <Link href="/#gallery" className="hover:text-[#d4af37]">Gallery</Link>
            <Link href="/#reviews" className="hover:text-[#d4af37]">Reviews</Link>
            <Link href="/#contact" className="hover:text-[#d4af37]">Contact</Link>
          </nav>
          <div className="flex items-center gap-4 text-white/80" aria-label="Social media">
            <a
              href="https://www.instagram.com/prestigeproductionsqc/"
              aria-label="Instagram"
              className="transition-colors hover:text-[#d4af37]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.014-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 12 18.163 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Prestigeproductionsqc/"
              aria-label="Facebook"
              className="transition-colors hover:text-[#d4af37]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="transition-colors hover:text-[#d4af37]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="mt-5 text-center text-[11px] text-white/60">© 2026 Prestige Productions. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-[#0A0A0A] text-white">
      <div className="relative w-full aspect-[6.4/1] min-h-32 max-h-44 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center text-center">
        <Image
          src="/images/prestige-party-closing-banner.webp"
          alt="Party crowd with confetti"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <h2 className="text-2xl md:text-4xl font-serif text-[#D4AF37] leading-tight">
            Your Date Is Waiting. <br />
            Let&apos;s Make It Legendary.
          </h2>

          <div>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89726] text-black font-semibold text-sm transition-all duration-300 shadow-lg hover:brightness-105"
            >
              Book Your Date
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-12">
            <Image
              src="/images/1340.webp"
              alt="Prestige Productions"
              width={160}
              height={50}
              className="h-11 w-auto object-contain"
            />
          </div>

          <div className="md:col-span-4 flex flex-col items-start space-y-3 text-xs text-gray-400">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Contact
            </h3>
            <a href="tel:+15639492762" className="hover:text-white transition-colors">
              563.949.2762
            </a>
            <a href="mailto:PrestigeProductionsqc@gmail.com" className="hover:text-white transition-colors">
              PrestigeProductionsqc@gmail.com
            </a>
            <a
              href="https://prestigeproductionsqc.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Prestigeproductionsqc.com
            </a>
            <p className="max-w-xs leading-relaxed">
              Mobile service with no physical address. Traveling internationally across the USA, Mexico, Canada, and South America.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 md:border-r border-gray-800 pr-4">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 md:border-r border-gray-800 pr-4">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#dj" className="hover:text-white transition-colors">DJ</a></li>
              <li><a href="#mc" className="hover:text-white transition-colors">MC / Emcee</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Event Packages</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 text-gray-300">
              <a href="https://www.instagram.com/prestigeproductionsqc/" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/Prestigeproductionsqc/" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="https://x.com/prestigeprodqc" className="hover:text-white transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 3.926H5.117L17.083 19.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© 2026 Prestige Productions. All rights reserved.</p>
          <div className="flex items-center gap-3 tracking-widest uppercase text-[10px] text-gray-400">
            <span>MUSIC</span>
            <span>|</span>
            <span>PEOPLE</span>
            <span>|</span>
            <span>UNFORGETTABLE NIGHTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}