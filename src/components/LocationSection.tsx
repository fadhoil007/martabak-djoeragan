import { MapPin, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_URL } from "../data/products";

export default function LocationSection() {
  return (
    <section id="lokasi" className="relative py-14 sm:py-20 md:py-32 bg-brand-secondary/30">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          {/* Info side */}
          <div>
            <div className="reveal flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
              <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Mampir ke Tempat Kami
              </span>
            </div>

            <h2 className="reveal font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
              Martabak Hangat{" "}
              <span className="text-brand-golden">Menunggumu</span>
            </h2>

            <div className="reveal mt-6 sm:mt-8 flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center mt-0.5">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden" />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-brand-white text-base sm:text-lg mb-1.5 sm:mb-2">
                  Alamat Lengkap
                </p>
                <address className="not-italic text-sm sm:text-base text-brand-soft/80 leading-relaxed">
                  Perumahan Beringin Indah Lestari 2
                  <br />
                  Jalan Balai Gadang
                  <br />
                  Balai Gadang, Koto Tangah
                </address>
              </div>
            </div>

            <p className="reveal mt-4 sm:mt-6 text-sm sm:text-base text-brand-soft/70 leading-relaxed">
              Datang langsung dan nikmati martabak yang baru selesai dibuat.
            </p>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal inline-flex items-center gap-2 mt-6 sm:mt-8 px-5 sm:px-7 py-3.5 sm:py-4 bg-brand-purple hover:bg-brand-deep active:bg-brand-deep text-white font-heading font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-0.5 min-h-[48px]"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            </a>
          </div>

          {/* Map visual */}
          <div className="reveal">
            <div className="relative bg-brand-dark border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3]">
              <iframe
                title="Lokasi Martabak Djoeragan Accu"
                src="https://www.google.com/maps?q=Perumahan+Beringin+Indah+Lestari+2+Jalan+Balai+Gadang+Balai+Gadang+Koto+Tangah&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
