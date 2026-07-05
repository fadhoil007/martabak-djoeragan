import { useRef } from "react";
import { ChevronLeft, ChevronRight, Crown, Star } from "lucide-react";
import { products } from "../data/products";

const bestSellers = [
  {
    ...products[0], // Keju Coklat
    rackBadge: "BEST SELLER",
  },
  {
    ...products[3], // Campuran
    rackBadge: "REKOMENDASI DJOERAGAN",
  },
];

export default function BestSellerRack() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    const amount = dir === "left" ? -containerWidth * 0.85 : containerWidth * 0.85;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="best-seller" className="relative py-14 sm:py-20 md:py-32 bg-brand-secondary/30">
      {/* Warm spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-brand-golden/[0.04] rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14 container-px">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Paling Sering Dilirik
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>

          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)]">
            Rak Para{" "}
            <span className="text-brand-golden">Djoeragan</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-brand-soft/80">
            Kalau masih bingung pilih yang mana, mulai dari rak favorit para
            Djoeragan.
          </p>
        </div>

        {/* Desktop navigation arrows */}
        <div className="hidden md:flex justify-end gap-2 mb-4 sm:mb-6 container-px">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Geser ke kiri"
          >
            <ChevronLeft className="w-5 h-5 text-brand-soft" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Geser ke kanan"
          >
            <ChevronRight className="w-5 h-5 text-brand-soft" />
          </button>
        </div>

        {/* Scrollable rack */}
        <div
          ref={scrollRef}
          className="reveal flex gap-4 sm:gap-5 md:gap-8 overflow-x-auto snap-rack hide-scrollbar pb-4 pl-4 sm:pl-5 md:pl-8 pr-4 sm:pr-5 md:pr-8"
        >
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[calc(100vw-2.5rem)] sm:w-[340px] md:w-[420px] lg:w-[480px] max-w-[480px] group"
            >
              <div className="relative bg-brand-dark border border-brand-golden/20 rounded-2xl sm:rounded-[28px] overflow-hidden transition-all duration-500 hover:border-brand-golden/40 hover:shadow-2xl hover:shadow-brand-golden/10">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

                  {/* Rack badge */}
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-brand-golden text-brand-dark text-[10px] sm:text-xs font-heading font-bold tracking-wider rounded-full shadow-lg shadow-brand-golden/30">
                      {item.rackBadge === "BEST SELLER" ? (
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      ) : (
                        <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      )}
                      {item.rackBadge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-heading font-extrabold text-brand-white text-xl sm:text-2xl md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-brand-soft/70 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 sm:mt-5 flex items-end justify-between gap-2">
                    <span className="font-heading font-extrabold text-brand-golden text-xl sm:text-2xl md:text-3xl">
                      {item.price}
                    </span>
                    <span className="text-[10px] sm:text-xs text-brand-golden/60 font-medium uppercase tracking-wider flex-shrink-0">
                      per porsi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 sm:mt-6 text-brand-soft/40 container-px">
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-[10px] sm:text-xs">Geser untuk lihat lainnya</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
