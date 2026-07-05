import { ShieldCheck } from "lucide-react";

export default function BusinessLegality() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.25rem,4vw,2.25rem)] mb-3 sm:mb-4">
            Usaha yang Tumbuh dengan Serius
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-soft/70 leading-relaxed mb-6 sm:mb-8">
            Martabak Djoeragan Accu hadir sebagai usaha yang terus berkembang dan
            membangun kepercayaan pelanggan.
          </p>

          {/* NIB Card — stacks on very small screens */}
          <div className="inline-flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-brand-secondary/50 border border-white/5 rounded-xl sm:rounded-2xl w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-purple/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple" />
            </div>
            <div className="text-center sm:text-left min-w-0">
              <p className="text-[10px] sm:text-xs font-heading font-bold text-brand-soft/50 tracking-wider uppercase">
                Nomor Induk Berusaha
              </p>
              <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl tracking-wide mt-0.5 break-all sm:break-normal">
                NIB 2406260004664
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
