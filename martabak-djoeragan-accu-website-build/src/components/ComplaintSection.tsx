import {
  AlertCircle,
  MessageCircle,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  FileText,
  ExternalLink,
} from "lucide-react";
import { WHATSAPP_URL, SOCIAL_LINKS } from "../data/products";
import InstagramIcon from "./icons/InstagramIcon";

const complaintFlow = [
  "Pelanggan menghubungi Customer Service melalui WhatsApp, Instagram, atau media sosial resmi Martabak Djoeragan Accu.",
  "Pelanggan menyampaikan nama, nomor pesanan, kronologi permasalahan, serta melampirkan foto atau video apabila diperlukan.",
  "Tim Martabak Djoeragan Accu melakukan verifikasi terhadap laporan yang diterima.",
  "Pengaduan diproses sesuai dengan kebijakan usaha yang berlaku.",
  "Pelanggan akan memperoleh solusi berupa penggantian produk, pembuatan ulang pesanan, pengembalian dana (apabila memenuhi ketentuan), atau bentuk penyelesaian lain sesuai hasil verifikasi.",
];

const complaintReasons = [
  "Pesanan tidak sesuai dengan yang dipesan.",
  "Produk diterima dalam kondisi rusak atau tidak layak konsumsi.",
  "Kesalahan varian rasa atau topping.",
  "Keterlambatan pesanan akibat kesalahan dari pihak Martabak Djoeragan Accu.",
  "Kendala pelayanan yang diberikan oleh tim.",
];

export default function ComplaintSection() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] container-px">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Pengaduan Usaha
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Pengaduan{" "}
            <span className="text-brand-golden">Pelanggan</span>
          </h2>
          <p className="mt-2 sm:mt-3 font-heading font-bold text-brand-golden/60 text-sm sm:text-base italic">
            "Manisnya Bikin Mata Merem"
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* 1. Petugas */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-secondary/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-golden/10 flex items-center justify-center font-heading font-bold text-brand-golden text-sm sm:text-base">
                1
              </div>
              <h3 className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl">
                Petugas yang Melayani Pengaduan
              </h3>
            </div>
            <p className="text-sm sm:text-base text-brand-soft/80 leading-relaxed">
              Seluruh pengaduan pelanggan ditangani langsung di bawah pengawasan
              owner{" "}
              <span className="text-brand-white font-medium">
                Zikri Rahmatullah
              </span>
              . Kami berkomitmen memberikan pelayanan yang ramah, profesional,
              cepat, dan bertanggung jawab hingga setiap permasalahan pelanggan
              terselesaikan dengan baik.
            </p>
          </div>

          {/* 2. Alur & Penjelasan */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-secondary/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-golden/10 flex items-center justify-center font-heading font-bold text-brand-golden text-sm sm:text-base">
                2
              </div>
              <h3 className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl">
                Alur Pengaduan dan Penjelasan
              </h3>
            </div>

            {/* Alur */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden flex-shrink-0" />
                <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                  Alur Pengaduan
                </h4>
              </div>
              <ol className="space-y-2.5">
                {complaintFlow.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center font-heading font-bold text-brand-purple text-[10px] sm:text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Penjelasan */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden flex-shrink-0" />
                <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                  Penjelasan Pengaduan
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed mb-3">
                Pengaduan dapat diajukan apabila terjadi:
              </p>
              <ul className="space-y-2">
                {complaintReasons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-brand-soft/60 leading-relaxed mt-4 italic">
                Setiap pengaduan akan diproses secara adil, transparan, dan
                mengutamakan kepuasan pelanggan.
              </p>
            </div>
          </div>

          {/* 3. Kontak & Waktu Respons */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-secondary/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-golden/10 flex items-center justify-center font-heading font-bold text-brand-golden text-sm sm:text-base">
                3
              </div>
              <h3 className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl">
                Kontak Pengaduan dan Waktu Respons
              </h3>
            </div>

            <p className="font-heading font-bold text-brand-white text-sm sm:text-base mb-4">
              Customer Service Martabak Djoeragan Accu
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-6 sm:mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm sm:text-base text-brand-soft/70 hover:text-brand-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-golden flex-shrink-0" />
                <span>
                  WhatsApp:{" "}
                  <span className="text-brand-white font-medium">
                    0822-6896-1775
                  </span>
                </span>
              </a>
              <a
                href="mailto:zikrirahmatullah09@gmail.com"
                className="flex items-center gap-3 text-sm sm:text-base text-brand-soft/70 hover:text-brand-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-golden flex-shrink-0" />
                <span className="break-all sm:break-normal">
                  Email:{" "}
                  <span className="text-brand-white font-medium">
                    zikrirahmatullah09@gmail.com
                  </span>
                </span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm sm:text-base text-brand-soft/70 hover:text-brand-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-brand-golden flex-shrink-0" />
                <span>
                  Instagram:{" "}
                  <span className="text-brand-white font-medium">
                    @martabakdjoeraganaccu1
                  </span>
                </span>
              </a>
            </div>

            {/* Jam Operasional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="p-4 bg-brand-dark/50 border border-white/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-brand-golden flex-shrink-0" />
                  <p className="font-heading font-bold text-brand-white text-sm">
                    Jam Operasional
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                  Senin – Minggu
                  <br />
                  Pukul{" "}
                  <span className="text-brand-white font-medium">
                    16.00 – 23.00 WIB
                  </span>
                </p>
              </div>
              <div className="p-4 bg-brand-dark/50 border border-white/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-brand-purple flex-shrink-0" />
                  <p className="font-heading font-bold text-brand-white text-sm">
                    Waktu Respons
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                  Tanggapan awal maksimal{" "}
                  <span className="text-brand-white font-medium">
                    1 × 24 jam
                  </span>{" "}
                  pada hari operasional. Proses penyelesaian disesuaikan dengan
                  jenis permasalahan, dengan mengutamakan solusi yang adil bagi
                  pelanggan.
                </p>
              </div>
            </div>
          </div>

          {/* Kop Surat */}
          <div className="reveal">
            <div className="mb-4 sm:mb-5 flex items-center gap-3">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-base sm:text-lg md:text-xl italic">
                Kop Surat
              </h3>
            </div>
            <div className="relative bg-brand-secondary/50 border border-white/5 rounded-2xl overflow-hidden">
              {/* Iframe preview */}
              <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                <iframe
                  title="Kop Surat Martabak Djoeragan Accu"
                  src="https://drive.google.com/file/d/1gdXGMN1Q0N83I9NxRvy2HIwotopatRPM/preview"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allow="autoplay"
                />
              </div>
              {/* Open in new tab button */}
              <div className="p-3 sm:p-4 border-t border-white/5 flex justify-end">
                <a
                  href="https://drive.google.com/file/d/1gdXGMN1Q0N83I9NxRvy2HIwotopatRPM/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-golden/10 hover:bg-brand-golden/20 text-brand-golden text-xs sm:text-sm font-heading font-bold rounded-xl transition-all min-h-[40px]"
                >
                  Buka Dokumen
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
