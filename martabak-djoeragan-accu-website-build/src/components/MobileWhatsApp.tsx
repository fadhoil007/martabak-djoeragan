import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/products";

export default function MobileWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-40 md:hidden flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-3 sm:py-3.5 bg-[#25D366] text-white font-heading font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-xl shadow-[#25D366]/30 hover:bg-[#20BD5A] active:scale-95 transition-all duration-300 min-h-[44px] ${
        visible
          ? "bottom-4 right-3 sm:bottom-5 sm:right-5 opacity-100 translate-y-0"
          : "bottom-4 right-3 sm:bottom-5 sm:right-5 opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      <span>Chat</span>
    </a>
  );
}
