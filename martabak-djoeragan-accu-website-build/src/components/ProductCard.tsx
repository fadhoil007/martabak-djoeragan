import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className="reveal group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-full bg-brand-secondary/60 border border-white/5 rounded-2xl sm:rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-purple/10 hover:border-white/10">
        {/* Image */}
        <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-secondary/90 to-transparent" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-brand-golden/90 backdrop-blur-sm text-brand-dark text-[9px] sm:text-[10px] md:text-xs font-heading font-bold tracking-wider rounded-full">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-brand-soft/70 leading-relaxed line-clamp-3">
            {product.description}
          </p>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2">
            <span className="font-heading font-extrabold text-brand-golden text-lg sm:text-xl md:text-2xl">
              {product.price}
            </span>
            <span className="text-[10px] sm:text-xs text-brand-soft/50 font-medium flex-shrink-0">
              per porsi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
