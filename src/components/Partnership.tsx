import {
  Handshake,
  Users,
  Store,
  CheckCircle,
  ClipboardList,
  ShieldCheck,
  Heart,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "../data/products";

const highlights = [
  {
    icon: Handshake,
    title: "Kerja Sama",
    description:
      "Peluang kolaborasi untuk acara, kegiatan komunitas, atau project bersama.",
  },
  {
    icon: Users,
    title: "Reseller",
    description:
      "Jual martabak Djoeragan Accu di lingkungan kamu dan dapatkan keuntungan.",
  },
  {
    icon: Store,
    title: "Kemitraan",
    description:
      "Bangun bisnis martabak bersama Djoeragan Accu dengan dukungan dari kami.",
  },
];

const resellerBenefits = [
  "Harga khusus untuk reseller.",
  "Margin keuntungan yang kompetitif.",
  "Produk berkualitas dengan cita rasa khas dan konsisten.",
  "Pilihan varian topping yang lengkap dan diminati pelanggan.",
  "Dukungan materi promosi berupa foto, video, katalog, dan konten media sosial.",
  "Pendampingan pemasaran serta konsultasi bisnis.",
  "Tanpa biaya pendaftaran.",
];

const resellerRequirements = [
  "Mengisi formulir pendaftaran.",
  "Memiliki komitmen untuk memasarkan produk Martabak Djoeragan Accu.",
  "Bersedia mengikuti kebijakan harga dan etika penjualan yang berlaku.",
  "Memenuhi minimum pembelian sesuai ketentuan (jika diterapkan).",
];

const partnershipTargets = [
  "Agen dan distributor.",
  "Kedai atau outlet makanan.",
  "Kafe dan coffee shop.",
  "Kantin sekolah, kampus, maupun perkantoran.",
  "Layanan katering dan penyelenggara acara.",
  "Instansi, komunitas, serta pelaku usaha lainnya.",
];

const partnershipRules = [
  "Menjaga nama baik dan reputasi Martabak Djoeragan Accu.",
  "Tidak menggunakan nama atau logo Martabak Djoeragan Accu tanpa izin resmi.",
  "Mematuhi kebijakan harga yang telah ditetapkan.",
  "Menjaga kualitas produk dan standar pelayanan kepada pelanggan.",
  "Memberikan pelayanan yang ramah, cepat, dan profesional.",
];

const joinSteps = [
  "Hubungi Admin Martabak Djoeragan Accu melalui WhatsApp atau media sosial.",
  "Isi formulir pendaftaran kemitraan.",
  "Lakukan proses verifikasi data.",
  "Pilih skema kerja sama yang sesuai.",
  "Mulai memasarkan produk dan berkembang bersama Martabak Djoeragan Accu.",
];

export default function Partnership() {
  return (
    <div>
        {/* 3 Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {highlights.map((f, i) => (
            <div
              key={i}
              className="reveal text-center p-5 sm:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-golden/10 mb-4">
                <f.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-golden" />
              </div>
              <h3 className="font-heading font-extrabold text-brand-white text-base sm:text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-soft/60 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* Tentang Program Kemitraan */}
          <div className="reveal">
            <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Tentang Program Kemitraan
            </h3>
            <p className="text-sm sm:text-base text-brand-soft/80 leading-relaxed">
              Program Kemitraan Martabak Djoeragan Accu hadir untuk memberikan
              peluang usaha bagi individu maupun pelaku bisnis yang ingin menjadi
              bagian dari berkembangnya brand Martabak Djoeragan Accu. Kami
              mengedepankan kerja sama yang profesional, transparan, dan saling
              menguntungkan demi menciptakan pertumbuhan usaha yang berkelanjutan.
            </p>
          </div>

          {/* Program Reseller */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
                Program Reseller
              </h3>
            </div>
            <p className="text-sm sm:text-base text-brand-soft/80 leading-relaxed mb-5 sm:mb-6">
              Program Reseller memberikan kesempatan kepada mitra untuk menjual
              kembali produk Martabak Djoeragan Accu dengan harga khusus tanpa
              perlu membangun merek sendiri. Program ini cocok bagi pelajar,
              mahasiswa, ibu rumah tangga, karyawan, hingga pelaku UMKM yang ingin
              memperoleh penghasilan tambahan.
            </p>

            {/* Keuntungan */}
            <div className="mb-5 sm:mb-6">
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base mb-3">
                Keuntungan Menjadi Reseller
              </h4>
              <ul className="space-y-2">
                {resellerBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Syarat */}
            <div>
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base mb-3">
                Syarat Menjadi Reseller
              </h4>
              <ul className="space-y-2">
                {resellerRequirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ClipboardList className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Program Kerja Sama */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
                Program Kerja Sama
              </h3>
            </div>
            <p className="text-sm sm:text-base text-brand-soft/80 leading-relaxed mb-4 sm:mb-5">
              Martabak Djoeragan Accu membuka peluang kerja sama dengan:
            </p>
            <ul className="space-y-2">
              {partnershipTargets.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ketentuan Kemitraan */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
                Ketentuan Kemitraan
              </h3>
            </div>
            <ul className="space-y-2">
              {partnershipRules.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cara Bergabung */}
          <div className="reveal p-5 sm:p-6 md:p-8 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
                Cara Bergabung
              </h3>
            </div>
            <ol className="space-y-2.5">
              {joinSteps.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-golden/10 flex items-center justify-center font-heading font-bold text-brand-golden text-xs sm:text-sm">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed pt-0.5 sm:pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Komitmen */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden flex-shrink-0" />
              <h3 className="font-heading font-extrabold text-brand-white text-lg sm:text-xl md:text-2xl">
                Komitmen Martabak Djoeragan Accu
              </h3>
            </div>
            <p className="text-sm sm:text-base text-brand-soft/80 leading-relaxed">
              Martabak Djoeragan Accu berkomitmen membangun hubungan kemitraan
              yang jujur, profesional, dan saling menguntungkan. Kami siap
              menyediakan produk berkualitas, pelayanan terbaik, serta dukungan
              promosi agar setiap mitra dapat mengembangkan usahanya dengan lebih
              mudah dan sukses.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal text-center pt-4 sm:pt-6">
            <p className="text-sm sm:text-base text-brand-soft/70 mb-5 sm:mb-6">
              Tertarik bekerja sama? Hubungi kami langsung untuk informasi lebih
              lanjut.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-brand-purple hover:bg-brand-deep active:bg-brand-deep text-white font-heading font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-0.5 min-h-[48px]"
            >
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Hubungi untuk Partnership
            </a>
          </div>
        </div>
    </div>
  );
}
