import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, ctaImage } from "../data/products";

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Martabak Djoeragan Accu"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ filter: "brightness(0.22) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-purple/30 to-brand-dark" />
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] container-px text-center">
        <div className="reveal max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,6vw,3.75rem)] leading-tight">
            Udah Kebayang{" "}
            <span className="text-brand-golden">Manisnya?</span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-brand-soft/80 leading-relaxed max-w-lg mx-auto">
            Jangan cuma dibayangin. Martabaknya lebih enak kalau langsung
            dicobain.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#20BD5A] text-white font-heading font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/20 hover:-translate-y-0.5 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Chat Djoeragan via WhatsApp</span>
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 active:bg-white/15 text-brand-white border border-white/10 hover:border-white/20 font-heading font-semibold text-sm sm:text-base rounded-2xl transition-all duration-300 min-h-[48px]"
            >
              Lihat Menu Lagi
            </a>
          </div>

          {/* Motto */}
          <div className="mt-10 sm:mt-14 md:mt-20">
            <p className="font-heading font-extrabold text-[clamp(0.9rem,3.5vw,1.875rem)] tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-golden via-brand-milk to-brand-golden">
                MANISNYA BIKIN MATA MEREM.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
