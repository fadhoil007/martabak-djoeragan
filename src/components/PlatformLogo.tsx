import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fallbackLabel: string;
}

/**
 * Menampilkan logo PNG dari public/logos/.
 * Jika file belum ada, tampilkan label teks sebagai fallback.
 * Untuk ganti logo: timpa file PNG di public/logos/ — kode tidak perlu diubah.
 */
export default function PlatformLogo({ src, alt, fallbackLabel }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex-shrink-0 h-6 sm:h-7 px-1.5 rounded bg-white/10 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] font-bold text-brand-soft/60 leading-none whitespace-nowrap">
          {fallbackLabel}
        </span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-10 sm:h-12 w-auto flex-shrink-0 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
