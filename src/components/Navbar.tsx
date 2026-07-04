import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Cerita Kami", href: "#cerita" },
  { label: "Menu", href: "#menu" },
  { label: "Best Seller", href: "#best-seller" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Owner", href: "#owner" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const savedScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-brand-dark/92 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={closeMenu}
            className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden fill-brand-golden group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <span className="block text-xs sm:text-sm md:text-base font-heading font-extrabold text-brand-white tracking-wide">
                DJOERAGAN
              </span>
              <span className="block text-[8px] sm:text-[10px] md:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em]">
                ACCU
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-brand-soft hover:text-brand-white transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#menu"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-purple hover:bg-brand-deep text-white text-sm font-heading font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-purple/25 flex-shrink-0"
          >
            Lihat Menu
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 -mr-1 text-brand-soft hover:text-brand-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-14 sm:top-16 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-14 sm:top-16 z-10 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="bg-brand-dark/[0.98] backdrop-blur-2xl border-t border-white/5 max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
          <div className="container-px py-3 sm:py-5 space-y-0.5 sm:space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 sm:py-3.5 px-3 sm:px-4 text-[15px] sm:text-base text-brand-soft hover:text-brand-white hover:bg-white/5 rounded-lg sm:rounded-xl transition-all duration-200 font-medium active:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 sm:pt-3 pb-1">
              <a
                href="#menu"
                onClick={closeMenu}
                className="block text-center py-3 sm:py-3.5 bg-brand-purple hover:bg-brand-deep active:bg-brand-deep text-white font-heading font-semibold rounded-xl transition-all duration-200 min-h-[48px] flex items-center justify-center"
              >
                Lihat Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
