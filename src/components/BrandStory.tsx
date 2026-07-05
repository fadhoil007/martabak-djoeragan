import { storyImage } from "../data/products";

export default function BrandStory() {
  return (
    <section id="cerita" className="relative py-14 sm:py-20 md:py-32 bg-brand-cream/[0.03]">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-brand-golden/10 to-brand-purple/10 rounded-[24px] sm:rounded-[32px] blur-xl" />
              <img
                src={storyImage}
                alt="Berbagai varian martabak Djoeragan Accu"
                className="relative w-full aspect-[4/3] sm:aspect-[4/5] md:aspect-[3/4] object-cover rounded-2xl sm:rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Story side */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <div className="reveal flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
              <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Cerita Kami
              </span>
            </div>

            {/* Headline */}
            <h2 className="reveal font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,2.75rem)] leading-tight">
              Berawal dari Hal Sederhana:{" "}
              <span className="text-brand-golden">Suka Bikin Martabak.</span>
            </h2>

            {/* Body */}
            <div className="reveal mt-5 sm:mt-7 md:mt-9 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-brand-soft/90 leading-relaxed">
              <p>
                Martabak Djoeragan Accu mulai berdiri pada{" "}
                <span className="text-brand-white font-medium">30 Juni 2026</span>.
              </p>
              <p>
                Ceritanya nggak dibuat rumit. Semuanya berawal dari kesukaan sang
                owner dalam memasak martabak.
              </p>
              <p>
                Dari kesenangan itu, muncul keinginan untuk menghadirkan martabak
                yang manis, toppingnya melimpah, dan harganya tetap ramah di
                kantong.
              </p>
              <p>
                Kami percaya, menikmati martabak nggak harus menunggu momen
                spesial. Terkadang, satu potong martabak hangat sudah cukup untuk
                bikin hari terasa lebih menyenangkan.
              </p>
            </div>

            {/* Closing */}
            <div className="reveal mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/5">
              <p className="font-heading font-bold text-brand-white text-base sm:text-lg md:text-xl">
                Martabak Djoeragan Accu —
              </p>
              <p className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-golden to-brand-milk text-lg sm:text-xl md:text-2xl mt-1">
                Manisnya Bikin Mata Merem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
