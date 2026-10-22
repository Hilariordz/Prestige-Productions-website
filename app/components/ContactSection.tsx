"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#1A1A1A] py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#111111]">
              Let's Plan Your Night.
            </h2>
            <div className="h-[2px] w-12 bg-[#D4AF37]" />
          </div>

          <p className="text-[#666666] text-sm md:text-base leading-relaxed font-light">
            Tell us about your celebration. <br />
            We'll help bring your night to life.
          </p>

          <div className="space-y-4 pt-4 text-sm font-medium text-[#222222]">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center gap-3 hover:text-[#C59B27] transition-colors"
            >
              <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@example.com
            </a>

            <a 
              href="tel:0000000000" 
              className="flex items-center gap-3 hover:text-[#C59B27] transition-colors"
            >
              <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (000) 000-0000
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#F4EFEC] p-6 sm:p-8 rounded-2xl border border-[#EBE3D8] shadow-sm relative">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <svg className="w-48 h-48 text-[#111111]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9 7H3l4 4-2 6 7-4 7 4-2-6 4-4h-6l-3-5z"/>
            </svg>
          </div>

          <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#E2DAD0] text-sm text-[#111111] placeholder-[#A0988E] focus:outline-none focus:border-[#C59B27] transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#E2DAD0] text-sm text-[#111111] placeholder-[#A0988E] focus:outline-none focus:border-[#C59B27] transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Event Date"
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#E2DAD0] text-sm text-[#111111] placeholder-[#A0988E] focus:outline-none focus:border-[#C59B27] transition-colors"
              />
              <svg className="w-5 h-5 text-[#A0988E] absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#E2DAD0] text-sm text-[#111111] placeholder-[#A0988E] focus:outline-none focus:border-[#C59B27] transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#B89726] text-black font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-105"
              >
                Send
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}