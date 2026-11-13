import Link from "next/link";
import type { ReactNode } from "react";
import FooterSection from "./FooterSection";

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  description,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#252525]">
      <header className="border-b border-[#e7e2d8] bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-serif text-lg tracking-wide text-[#080808] transition-colors hover:text-[#a77d16]"
          >
            Prestige Productions
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-stone-500 transition-colors hover:text-[#a77d16]"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:px-12">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#bd9020]" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bd9020]">
            Legal
          </p>
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-tight text-[#080808] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
          {description}
        </p>

        {lastUpdated && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e7e2d8] bg-white px-4 py-1.5 text-xs text-stone-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd9020]" aria-hidden="true" />
            Last updated: {lastUpdated}
          </p>
        )}

        <div className="mt-14 space-y-12 border-t border-[#e7e2d8] pt-12 text-[15px] leading-7 text-stone-700 [&_a]:font-medium [&_a]:text-[#a77d16] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#80600f]">
          {children}
        </div>

        <aside className="mt-16 rounded-2xl border border-[#eadcb8] bg-[#fbf6e9] p-6 text-xs leading-5 text-stone-600">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#a77d16]">Notice</p>
          <p className="mt-2">
            This page provides general information and is not legal advice. Please have these
            policies reviewed for your business and applicable laws before publishing.
          </p>
        </aside>
      </article>

      <FooterSection compact />
    </main>
  );
}

export function LegalSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-serif text-2xl font-bold text-[#111111]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
