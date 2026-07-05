import { Zap } from "lucide-react";

export default function BrandIntroduction() {
  return (
    <section className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-purple/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] container-px">
        <div className="max-w-3xl mx-auto">
          {/* Label */}
          <div className="reveal flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Kenalan Dulu
            </span>
          </div>

          {/* Headline */}
          <h2 className="reveal font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Ini Bukan Sekadar Martabak.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-golden">
              Ini Djoeragan Accu.
            </span>
          </h2>

          {/* Body text */}
          <div className="reveal mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-brand-soft/90 leading-relaxed">
            <p>
              Martabak Djoeragan Accu hadir membawa martabak manis dengan
              karakter rasa yang sederhana, memuaskan, dan penuh topping.
            </p>
            <p>
              Nama <span className="text-brand-white font-semibold">Djoeragan</span>{" "}
              menggambarkan karakter yang percaya diri dan punya standar terhadap
              rasa. Ejaan klasiknya bikin identitas brand ini jadi beda dan mudah
              diingat.
            </p>
            <p>
              Sedangkan <span className="text-brand-white font-semibold">Accu</span>{" "}
              adalah energi. Kayak accu yang nyimpan dan nyalurkan energi, kami
              percaya sesuatu yang manis terkadang jadi energi sederhana buat
              bikin hari terasa lebih baik.
            </p>
          </div>

          {/* Brand meaning summary */}
          <div className="reveal mt-8 sm:mt-10 md:mt-14 p-4 sm:p-6 md:p-8 bg-brand-secondary/50 border border-white/5 rounded-2xl sm:rounded-3xl">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs md:text-sm font-heading font-bold text-brand-golden tracking-wider uppercase mb-1.5 sm:mb-2 leading-snug">
                  Djoeragan adalah Karakter. Accu adalah Energi.
                </p>
                <p className="text-brand-soft/80 text-xs sm:text-sm md:text-base leading-relaxed">
                  Djoeragan Accu adalah tempat isi energi manis. Tempat kamu
                  menikmati martabak yang bikin hari terasa lebih menyenangkan.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial quote */}
          <div className="reveal mt-10 sm:mt-12 md:mt-16">
            <blockquote className="relative">
              <div className="absolute -left-3 sm:-left-4 md:-left-6 top-0 bottom-0 w-[3px] sm:w-1 bg-gradient-to-b from-brand-golden to-brand-purple rounded-full" />
              <p className="pl-4 sm:pl-6 md:pl-10 font-heading font-extrabold text-[clamp(1.15rem,4vw,2.5rem)] text-brand-white leading-snug">
                "Isi energi manismu
                <br />
                <span className="text-brand-golden">bersama Djoeragan Accu."</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
