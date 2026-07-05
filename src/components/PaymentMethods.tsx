import { QrCode, Landmark, Smartphone, ExternalLink } from "lucide-react";

const QRIS_URL =
  "https://drive.google.com/file/d/1yXvChLQtkiouzb7TV5vg5wGPxlODiWXK/view?usp=drivesdk";

export default function PaymentMethods() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Metode Pembayaran
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Bayar dengan{" "}
            <span className="text-brand-golden">Cara Mudah</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-soft/70 leading-relaxed">
            Pilih metode pembayaran yang paling nyaman buat kamu.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* QRIS */}
          <a
            href={QRIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex flex-col items-center gap-3 p-5 sm:p-6 bg-brand-secondary/50 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 min-h-[48px]"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center">
              <QrCode className="w-6 h-6 sm:w-7 sm:h-7 text-brand-golden" />
            </div>
            <div className="text-center">
              <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg">
                QRIS
              </p>
              <p className="text-[10px] sm:text-xs text-brand-soft/50 mt-1 flex items-center justify-center gap-1">
                Lihat kode QRIS
                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </p>
            </div>
          </a>

          {/* BSI */}
          <div className="reveal flex flex-col items-center gap-3 p-5 sm:p-6 bg-brand-secondary/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-purple/10 flex items-center justify-center">
              <Landmark className="w-6 h-6 sm:w-7 sm:h-7 text-brand-purple" />
            </div>
            <div className="text-center">
              <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg">
                Bank BSI
              </p>
              <p className="font-heading font-bold text-brand-golden text-sm sm:text-base tracking-wider mt-1">
                7364348252
              </p>
            </div>
          </div>

          {/* GoPay */}
          <div className="reveal flex flex-col items-center gap-3 p-5 sm:p-6 bg-brand-secondary/50 border border-white/5 rounded-2xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#00AED6]/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-[#00AED6]" />
            </div>
            <div className="text-center">
              <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg">
                GoPay
              </p>
              <p className="font-heading font-bold text-brand-golden text-sm sm:text-base tracking-wider mt-1">
                0822-6896-1775
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
