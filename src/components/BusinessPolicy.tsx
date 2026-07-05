import { FileText, ExternalLink } from "lucide-react";

const POLICY_URL =
  "https://drive.google.com/file/d/10VDgwD22M5_bXxG9H4Ke9122DoihNcL3/view?usp=drivesdk";

export default function BusinessPolicy() {
  return (
    <section className="relative py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="reveal max-w-3xl mx-auto">
          <a
            href={POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-5 sm:p-6 md:p-8 bg-brand-secondary/50 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-purple/10 flex items-center justify-center">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-brand-purple" />
            </div>
            <div className="flex-1 text-center sm:text-left min-w-0">
              <p className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl">
                Kebijakan Usaha
              </p>
              <p className="text-xs sm:text-sm text-brand-soft/60 mt-1 leading-relaxed">
                Baca kebijakan usaha Martabak Djoeragan Accu untuk informasi
                lengkap terkait layanan dan ketentuan kami.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-purple/10 text-brand-purple text-sm font-heading font-bold rounded-xl group-hover:bg-brand-purple/20 transition-all flex-shrink-0 min-h-[44px]">
              Baca Dokumen
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
