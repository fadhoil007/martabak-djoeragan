import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function DropdownSection({ title, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="reveal border border-white/5 rounded-2xl overflow-hidden bg-brand-secondary/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left hover:bg-white/[0.02] active:bg-white/[0.03] transition-colors min-h-[56px]"
        aria-expanded={open}
      >
        <span className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl leading-snug">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${
          open ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
