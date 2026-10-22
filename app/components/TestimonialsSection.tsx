export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 0,
      quote: "“”",
      name: "",
      role: ""
    },
    {
      stars: 0,
      quote: "“”",
      name: "",
      role: ""
    },
    {
      stars: 0,
      quote: "“”",
      name: "",
      role: ""
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] text-[#1A1A1A] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#111111]">
            Testimonials
          </h2>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAE5DC] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C59B27]">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base sm:text-lg font-serif text-[#111111]">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-[#E5E0D8] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#8C8275]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#111111]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#888888]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}