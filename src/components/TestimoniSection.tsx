import { useState } from "react";
import { MessageSquareQuote } from "lucide-react";

/**
 * Screenshot testimoni disimpan di public/testimoni/.
 * Untuk ganti: timpa file PNG-nya saja, nama harus sama persis.
 * Kode tidak perlu diubah.
 *
 * File yang dibutuhkan:
 *   public/testimoni/testimoni-1.png
 *   public/testimoni/testimoni-2.png
 */
const testimoniImages = [
  {
    src: "/testimoni/testimoni-1.png",
    alt: "Testimoni pelanggan Martabak Djoeragan Accu",
  },
  {
    src: "/testimoni/testimoni-2.png",
    alt: "Testimoni pelanggan Martabak Djoeragan Accu",
  },
];

function TestimoniImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-[3/4] rounded-2xl bg-brand-secondary/50 border border-white/5 flex items-center justify-center">
        <div className="text-center px-4">
          <MessageSquareQuote className="w-8 h-8 text-brand-soft/20 mx-auto mb-2" />
          <p className="text-xs text-brand-soft/30">Testimoni belum tersedia</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full aspect-[3/4] object-cover object-top rounded-2xl border border-white/5"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function TestimoniSection() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 bg-brand-secondary/30">
      <div className="mx-auto max-w-[1280px] container-px">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Testimoni
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Kata Mereka tentang{" "}
            <span className="text-brand-golden">Djoeragan Accu</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-brand-soft/70 leading-relaxed">
            Testimoni asli dari pelanggan yang sudah merasakan manisnya Martabak
            Djoeragan Accu.
          </p>
        </div>

        {/* 2 Testimoni images */}
        <div className="reveal grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
          {testimoniImages.map((img, i) => (
            <TestimoniImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
