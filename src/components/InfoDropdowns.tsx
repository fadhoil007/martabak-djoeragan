import DropdownSection from "./DropdownSection";
import Partnership from "./Partnership";
import OrderingDelivery from "./OrderingDelivery";
import ComplaintSection from "./ComplaintSection";

export default function InfoDropdowns() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Informasi Usaha
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Ketahui Lebih{" "}
            <span className="text-brand-golden">Lanjut</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <DropdownSection title="Kerja Sama, Reseller & Kemitraan">
            <Partnership />
          </DropdownSection>

          <DropdownSection title="Pemesanan & Pengiriman Produk">
            <OrderingDelivery />
          </DropdownSection>

          <DropdownSection title="Pengaduan Pelanggan">
            <ComplaintSection />
          </DropdownSection>
        </div>
      </div>
    </section>
  );
}
