import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white">
      <div className="relative w-full py-16 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center text-center">
        <Image
          src=""
          alt="Party crowd with confetti"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] leading-tight">
            Your Date Is Waiting. <br />
            Let's Make It Legendary.
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
          <div className="md:col-span-4 flex flex-col items-start space-y-3">
            
          </div>

          <div className="md:col-span-3 space-y-3 md:border-r border-gray-800 pr-4">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
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
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.67 2.58-4.8 1.48-1.15 3.38-1.65 5.23-1.43v4.18c-.87-.14-1.78.02-2.52.51-.77.49-1.29 1.32-1.42 2.22-.16.89.1 1.82.72 2.49.62.68 1.54 1.05 2.46.99.97-.02 1.89-.52 2.44-1.32.48-.68.73-1.52.73-2.36V.02z"/>
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