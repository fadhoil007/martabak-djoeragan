import { Quote } from "lucide-react";

export default function OwnerStory() {
  return (
    <section id="owner" className="relative py-14 sm:py-20 md:py-32 bg-brand-secondary/30">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          {/* Photo side */}
          <div className="reveal">
            <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              {/* Purple frame accent */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-brand-purple/20 to-brand-golden/10 rounded-[24px] sm:rounded-[32px] blur-lg" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-purple/30 to-brand-golden/20 rounded-[22px] sm:rounded-[28px]" />
              {/* Owner photograph */}
              <img
                src="/images/owner.jpg"
                alt="Owner Martabak Djoeragan Accu"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-[20px] sm:rounded-[26px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Story side */}
          <div>
            {/* Label */}
            <div className="reveal flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
              <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Di Balik Djoeragan Accu
              </span>
            </div>

            {/* Headline */}
            <h2 className="reveal font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,2.75rem)] leading-tight">
              Berawal Karena{" "}
              <span className="text-brand-golden">Suka Masak Martabak.</span>
            </h2>

            {/* Body */}
            <div className="reveal mt-5 sm:mt-7 md:mt-9 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-brand-soft/90 leading-relaxed">
              <p>Nggak ada cerita yang dibuat terlalu rumit.</p>
              <p>
                Martabak Djoeragan Accu bermula dari kesukaan sang owner dalam
                memasak martabak.
              </p>
              <p>
                Dari rasa suka tersebut, muncul keinginan sederhana: membuat
                martabak yang enak, manis, toppingnya melimpah, dan bisa
                dinikmati banyak orang.
              </p>
              <p>
                Pada{" "}
                <span className="text-brand-white font-medium">
                  30 Juni 2026
                </span>
                , Martabak Djoeragan Accu mulai melangkah membawa rasa manisnya
                sendiri.
              </p>
            </div>

            {/* Personal quote */}
            <div className="reveal mt-6 sm:mt-8 md:mt-10 relative pl-4 sm:pl-6 md:pl-8 py-4 sm:py-5 border-l-2 border-brand-golden/40">
              <Quote className="absolute -left-2.5 sm:-left-3 -top-1 w-5 h-5 sm:w-6 sm:h-6 text-brand-golden/40 fill-brand-golden/20" />
              <p className="font-heading font-bold text-brand-white text-base sm:text-lg md:text-xl italic leading-relaxed">
                "Awalnya suka masak martabak. Sekarang pengen lebih banyak orang
                ikut ngerasain."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
