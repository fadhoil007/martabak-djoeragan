import { Sparkles, Heart, Wallet } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Topping Nggak Pelit",
    description:
      "Kami percaya martabak yang nikmat harus terasa sampai topping terakhir.",
  },
  {
    icon: Heart,
    title: "Manisnya Pas",
    description:
      "Rasa manis yang dibuat buat nemenin waktu santai dan momen berbagi.",
  },
  {
    icon: Wallet,
    title: "Harga Tetap Bersahabat",
    description:
      "Nikmati martabak dengan topping melimpah tanpa bikin kantong ikut merem.",
  },
];

export default function WhyDjoeragan() {
  return (
    <section className="relative py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] container-px">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)]">
            Kenapa Harus{" "}
            <span className="text-brand-golden">Djoeragan Accu?</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-golden/10 mb-4 sm:mb-5">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-golden" />
              </div>
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-soft/70 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
