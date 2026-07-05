import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-14 sm:py-20 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-brand-purple/5 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-[1280px] container-px">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Menu Djoeragan
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>

          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)]">
            Pilih Manis{" "}
            <span className="text-brand-golden">Favoritmu</span>
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-brand-soft/80 leading-relaxed">
            Empat pilihan martabak dengan topping melimpah. Tinggal pilih yang
            paling bikin kamu merem di gigitan pertama.
          </p>
        </div>

        {/* Product grid — 1 col on small, 2 on sm+, 4 on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
