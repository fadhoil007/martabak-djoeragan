import { MessageCircle, Bike } from "lucide-react";
import { WHATSAPP_URL, SOCIAL_LINKS } from "../data/products";
import TikTokIcon from "./icons/TikTokIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import PlatformLogo from "./PlatformLogo";

/**
 * Logo PNG disimpan di public/logos/.
 * Untuk ganti logo: timpa file PNG-nya saja, nama harus sama persis.
 * Kode tidak perlu diubah.
 *
 * File yang dibutuhkan:
 *   public/logos/tokopedia.png
 *   public/logos/gofood.png
 *   public/logos/shopee.png
 *   public/logos/tiktok.png
 */
const platforms = [
  {
    name: "Tokopedia",
    href: "",
    logo: "/logos/tokopedia.png",
  },
  {
    name: "GoFood",
    href: "",
    logo: "/logos/gofood.png",
  },
  {
    name: "Shopee",
    href: "https://id.shp.ee/VUDbqEGw",
    logo: "/logos/shopee.png",
  },
  {
    name: "TikTok Shop",
    href: "https://shop-id.tokopedia.com/view/product/1736390616314644444?encode_params=MIIBPwQM1Z30G7uhX7gDKtzrBIIBG3Mt-pUvp7TgIg4JBB_yb-rtseqK1abe4M8oEzm8CpzZ4Nd4vFwS9Q5s9EzwWo6SMIc07leHm_gOE8fpzyWrbu6cy_L3O_XAUXRlNnB4Xwm0ThrdXFJcvogjcR-Nw2dn-0ZN7u7wDwx82NPurjnT2ArnBisfSd3h9sS7GNFo9YL-NA79YX1gpzrCYLvhIzbiL5UNLEYnVD8LVD0fUCAakS9mbK2di_hi1J3QLi7qRIVUiomwPW_AuafClR2uoGk3_1BwPJ2JmohN5wBH4_60s3N2lbqIDBAM1iE4sPGzD56d_1qbIUX0nsCURmCR6A-UgtaU5SRZyFh8c-RCOoGV6OW1P_g-tzAnJPmsReIaPf4V15Qkorv4M0zFBUcEEGoAWGOXMaq9jSUfiKSYV1I%3D",
    logo: "/logos/tiktok.png",
  },
];

const socials = [
  {
    name: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: TikTokIcon,
    label: "@martabak.djoeragan",
  },
  {
    name: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: InstagramIcon,
    label: "@martabakdjoeraganaccu1",
  },
  {
    name: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: FacebookIcon,
    label: "Martabak Djoeragan Accu",
  },
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

          {/* Social Media */}
          <div className="reveal">
            <div className="p-4 sm:p-5 md:p-6 bg-brand-secondary/50 border border-white/5 rounded-2xl">
              <p className="font-heading font-bold text-brand-white text-sm sm:text-base mb-4 sm:mb-5">
                Ikuti Kami
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 active:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 group min-h-[48px]"
                  >
                    <s.icon className="w-5 h-5 text-brand-soft/60 group-hover:text-brand-white transition-colors flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-white leading-tight">
                        {s.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-brand-soft/40 truncate leading-tight mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Platforms & Marketplace */}
          <div className="reveal">
            <div className="p-4 sm:p-5 md:p-6 bg-brand-secondary/50 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5">
                <Bike className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
                <p className="font-heading font-bold text-brand-white text-sm sm:text-base">
                  Pesan Antar &amp; Marketplace
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-brand-soft/70 leading-relaxed mb-4 sm:mb-6">
                Tersedia melalui layanan pesan antar dan marketplace. Cari{" "}
                <span className="text-brand-white font-medium">
                  "Martabak Djoeragan Accu"
                </span>{" "}
                di aplikasi pilihanmu.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {platforms.map((p) => {
                  const content = (
                    <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                        <PlatformLogo
                          src={p.logo}
                          alt={`Logo ${p.name}`}
                          fallbackLabel={p.name}
                        />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-brand-soft/70 whitespace-nowrap">
                        {p.name}
                      </span>
                    </div>
                  );

                  return p.href ? (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-4 sm:py-5 bg-white/5 hover:bg-white/10 active:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={p.name}
                      className="flex items-center justify-center px-3 py-4 sm:py-5 bg-white/5 border border-white/5 rounded-xl opacity-70"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
