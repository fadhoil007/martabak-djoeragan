import { Zap, MapPin, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "../data/products";
import TikTokIcon from "./icons/TikTokIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Cerita Kami", href: "#cerita" },
  { label: "Menu", href: "#menu" },
  { label: "Best Seller", href: "#best-seller" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Owner", href: "#owner" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark border-t border-white/5 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-8">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 pb-10 sm:pb-12 md:pb-16 border-b border-white/5">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden fill-brand-golden flex-shrink-0" />
              <div className="leading-tight">
                <span className="block text-sm sm:text-base font-heading font-extrabold text-brand-white tracking-wide">
                  DJOERAGAN
                </span>
                <span className="block text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em]">
                  ACCU
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-soft/60 leading-relaxed mt-2 sm:mt-3 max-w-xs">
              Martabak manis dengan topping melimpah dan harga terjangkau di
              Balai Gadang, Koto Tangah.
            </p>
            <p className="mt-3 sm:mt-4 font-heading font-bold text-brand-golden/60 text-xs sm:text-sm italic">
              Manisnya Bikin Mata Merem.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-2 mt-4 sm:mt-5">
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Martabak Djoeragan Accu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <TikTokIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brand-soft/50 hover:text-brand-white" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Martabak Djoeragan Accu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brand-soft/50 hover:text-brand-white" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Martabak Djoeragan Accu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brand-soft/50 hover:text-brand-white" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-heading font-bold text-brand-white text-xs sm:text-sm mb-4 sm:mb-5 tracking-wider uppercase">
              Navigasi
            </p>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-brand-soft/60 hover:text-brand-white transition-colors duration-200 py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div>
            <p className="font-heading font-bold text-brand-white text-xs sm:text-sm mb-4 sm:mb-5 tracking-wider uppercase">
              Informasi
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-soft/40 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-xs sm:text-sm text-brand-soft/60 leading-relaxed">
                  Perumahan Beringin Indah Lestari 2,
                  <br />
                  Jalan Balai Gadang,
                  <br />
                  Balai Gadang, Koto Tangah
                </address>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-soft/40 flex-shrink-0" />
                <a
                  href="https://wa.me/6282268961775"
                  className="text-xs sm:text-sm text-brand-soft/60 hover:text-brand-white transition-colors"
                >
                  0822-6896-1775
                </a>
              </div>
              <div className="text-xs sm:text-sm text-brand-soft/40 mt-1 sm:mt-2">
                NIB: 2406260004664
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 text-center md:text-left">
          <p className="text-[10px] sm:text-xs text-brand-soft/40">
            © 2026 Martabak Djoeragan Accu.
          </p>
          <p className="text-[10px] sm:text-xs text-brand-soft/30 italic">
            Dibuat dengan rasa, disajikan untuk para Djoeragan.
          </p>
        </div>
      </div>
    </footer>
  );
}
