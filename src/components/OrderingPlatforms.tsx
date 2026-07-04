import { MessageCircle, Bike, Search } from "lucide-react";
import { WHATSAPP_URL } from "../data/products";

const platforms = [
  { name: "GrabFood" },
  { name: "GoFood" },
  { name: "ShopeeFood" },
];

export default function OrderingPlatforms() {
  return (
    <section className="relative py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Mau Martabak?
            <br />
            <span className="text-brand-golden">Cari Kami di Sini.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* WhatsApp — Primary */}
          <div className="reveal">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 md:p-6 bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 active:border-[#25D366]/40 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/10"
            >
              <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto">
                <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0 sm:flex-initial">
                  <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl">
                    Chat via WhatsApp
                  </p>
                  <p className="text-xs sm:text-sm text-brand-soft/60 mt-0.5 sm:mt-1">
                    Langsung chat dan tanya menu martabak kami
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-auto sm:ml-auto">
                <span className="flex items-center justify-center gap-1 px-4 py-2.5 sm:py-2 bg-[#25D366] text-white text-sm font-heading font-bold rounded-xl group-hover:shadow-lg transition-all w-full sm:w-auto min-h-[44px]">
                  Chat Sekarang
                </span>
              </div>
            </a>
          </div>

          {/* Delivery Platforms — Informational */}
          <div className="reveal">
            <div className="p-4 sm:p-5 md:p-6 bg-brand-secondary/50 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5">
                <Bike className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
                <p className="font-heading font-bold text-brand-white text-sm sm:text-base">
                  Pesan Antar
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-brand-soft/70 leading-relaxed mb-4 sm:mb-6">
                Tersedia melalui layanan pesan antar. Cari{" "}
                <span className="text-brand-white font-medium">
                  "Martabak Djoeragan Accu"
                </span>{" "}
                di aplikasi pilihanmu.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/5 rounded-lg sm:rounded-xl"
                  >
                    <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-soft/50 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-brand-soft/80 whitespace-nowrap">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
