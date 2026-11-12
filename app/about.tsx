import Image from "next/image";

export default function AboutSectionModerna() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#faf9f7] px-6 py-16 font-sans text-[#252525] md:px-12 md:py-[4.5rem]"
      style={{ backgroundImage: "url('/images/prestige-hero-white-gold-marble.webp')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/70" />

      {/* Grid principal */}
      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
        
        {/* ===== Columna de Texto Principal ===== */}
        {/* En móvil: aparece abajo de la foto (order-2). En desktop: a la izquierda (md:col-span-7 md:order-1) */}
        <div className="order-2 md:order-1 md:col-span-7 flex flex-col">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#bd9020]">
            About Prestige Productions
          </p>

          <h1 className="font-serif text-[42px] font-normal leading-[1.02] tracking-tight text-[#080808] sm:text-[54px] md:text-[58px]">
            Your Night.<br />
            Our Prestige.
          </h1>

          {/* En mobile, colocamos un bloque de texto introductorio corto aquí si se desea, o pasamos directo a los bloques */}
          <div className="mb-6 mt-6 h-[4px] w-20 bg-[#c89c26]" />

          <div className="space-y-4 text-[15px] leading-[1.35] text-[#303030] md:text-[16px]">
            <p>
              Every celebration has its own story. We help you bring yours to
              life through music, hosting and live entertainment that set the
              tone and bring people together.
            </p>
            <p>
              From weddings and corporate events to private celebrations, our
              approach combines polished presentation with a personal
              touch—creating an atmosphere that feels right for you and your
              guests.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-[25px] font-bold leading-tight text-[#0d0d0d] md:text-[27px]">
              The People. The Music. The Moment.
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.35] text-[#303030] md:text-[16px]">
              <p>
                A memorable event is about more than a great playlist. It’s
                knowing when to build the energy, when to let a moment breathe
                and how to keep the celebration flowing.
              </p>
              <p>
                Our DJ and MC / Emcee services bring those elements together,
                connecting the music, the announcements and the moments that
                matter.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-[25px] font-bold leading-tight text-[#0d0d0d] md:text-[27px]">
              Your Vision Takes Center Stage.
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.35] text-[#303030] md:text-[16px]">
              <p>
                Elegant and intimate. Bold and energetic. Or a little of both. We
                start by understanding the atmosphere you want to create, then
                help shape the entertainment around your style.
              </p>
              <p>
                You bring the reason to celebrate. We help bring the room to
                life.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Columna de la Imagen (Tendencia Mobile-First) ===== */}
        {/* En móvil: se muestra PRIMERO (order-1) para enganchar al usuario visualmente. En desktop: va a la derecha (md:order-2 md:col-span-5) */}
        <figure className="order-1 md:order-2 flex flex-col items-center mx-auto w-full max-w-[390px] md:max-w-none md:sticky md:top-24 md:col-span-5 mb-6 md:mb-0">
          <div className="w-full bg-stone-900 shadow-lg">
            <Image
              src="/images/1338.webp"
              alt="The Host Behind Your Night"
              width={900}
              height={1200}
              className="w-full h-auto object-cover grayscale contrast-110"
              priority
            />
          </div>
          <figcaption className="mt-2 text-center font-serif text-sm italic tracking-wide text-stone-600">
            The Host Behind Your Night.
          </figcaption>
        </figure>

      </div>

      {/* ===== Divisor con rombo e hilos laterales ===== */}
      <div className="relative mx-auto mt-16 flex max-w-[1080px] items-center gap-3">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c89c26]/60" />
        <div className="h-2.5 w-2.5 rotate-45 bg-[#c89c26]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c89c26]/60" />
      </div>

      {/* ===== Llamado a la acción (CTA) ===== */}
      <div className="relative mx-auto max-w-[800px] pt-10 text-center">
        <h2 className="font-serif text-[34px] font-normal leading-tight tracking-tight text-[#0d0d0d] sm:text-[42px] md:text-[46px]">
          Let’s Make Your Night Unforgettable.
        </h2>
        <p className="mt-3 text-base text-stone-600 md:text-lg">
          Tell us what you’re planning, and let’s explore the possibilities.
        </p>
        <a  
          href="#contact"
          className="mt-7 inline-block bg-[#c89c26] px-8 py-3.5 font-sans text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#b08820]"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}