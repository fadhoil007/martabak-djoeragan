import { ChevronDown, Sparkles, Heart, BadgeCheck } from "lucide-react";
import { heroImage } from "../data/products";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex flex-col justify-end md:justify-center overflow-hidden"
    >
      {/* Background Image — covers entire section */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Martabak Djoeragan Accu dengan topping melimpah"
          className="w-full h-full object-cover object-[center_30%] sm:object-center"
          style={{ filter: "brightness(0.45) contrast(1.08) saturate(1.1)" }}
        />
        {/* Stronger gradient on mobile to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark from-[12%] via-brand-dark/80 via-[45%] to-brand-dark/20 md:from-brand-dark md:from-[0%] md:via-brand-dark/60 md:via-[40%] md:to-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-transparent to-transparent hidden md:block" />
      </div>

      {/* Decorative elements — hidden on small screens */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-brand-golden/5 blur-3xl animate-float hidden sm:block" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-brand-purple/10 blur-2xl hidden sm:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] container-px pb-8 sm:pb-16 md:pb-0 pt-[55svh] sm:pt-[45svh] md:pt-0 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="animate-fade-up inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4 sm:mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-golden flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-brand-milk tracking-wider whitespace-nowrap">
              MARTABAK MANIS • TOPPING MELIMPAH
            </span>
          </div>

          {/* Headline — fluid sizing */}
          <h1
            className="animate-fade-up font-heading font-extrabold text-brand-white leading-[1.08]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-[clamp(1.75rem,7vw,4.5rem)]">
              Manisnya Bikin
            </span>
            <span className="block text-[clamp(1.75rem,7vw,4.5rem)] mt-0.5 sm:mt-1 md:mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-golden to-brand-milk">
                Mata Merem.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up mt-3 sm:mt-5 md:mt-7 text-sm sm:text-base md:text-lg text-brand-soft/90 max-w-lg leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Martabak manis dengan topping melimpah, rasa yang bikin nagih, dan
            harga yang tetap ramah di kantong.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-8 md:mt-10"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 bg-brand-purple hover:bg-brand-deep active:bg-brand-deep text-white font-heading font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-0.5 min-h-[48px]"
            >
              Lihat Menu Kami
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 active:bg-white/10 text-brand-white border border-white/10 hover:border-white/20 font-heading font-semibold text-sm sm:text-base rounded-2xl transition-all duration-300 min-h-[48px]"
            >
              Temukan Lokasi
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="animate-fade-up mt-6 sm:mt-10 md:mt-14 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-x-6 sm:gap-y-3"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0" />
              <span className="text-xs sm:text-sm text-brand-soft/80">
                Topping Melimpah
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0" />
              <span className="text-xs sm:text-sm text-brand-soft/80">
                Harga Terjangkau
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0" />
              <span className="text-xs sm:text-sm text-brand-soft/80">
                Dibuat dengan Sepenuh Rasa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-brand-soft/40" />
      </div>
    </section>
  );
}
