import {
  ShoppingBag,
  ClipboardCheck,
  CreditCard,
  ChefHat,
  SearchCheck,
  Package,
  Truck,
  Bell,
  Clock,
  MapPin,
  Shield,
  AlertTriangle,
  CheckCircle,
  Heart,
} from "lucide-react";

const orderSteps = [
  {
    num: 1,
    icon: ShoppingBag,
    title: "Pemesanan Produk",
    text: "Pelanggan dapat melakukan pemesanan melalui Website, WhatsApp, Instagram, TikTok Shop, Shopee, atau platform pemesanan lainnya dengan memilih menu, ukuran, dan varian topping yang diinginkan.",
  },
  {
    num: 2,
    icon: ClipboardCheck,
    title: "Konfirmasi Pesanan",
    text: "Tim Martabak Djoeragan Accu akan memverifikasi ketersediaan menu, detail pesanan, alamat pengiriman (apabila delivery), serta data pelanggan sebelum pesanan diproses.",
  },
  {
    num: 3,
    icon: CreditCard,
    title: "Pembayaran",
    text: "Pelanggan dapat melakukan pembayaran melalui transfer bank, QRIS, DANA, GoPay, atau metode pembayaran lain yang tersedia.",
  },
  {
    num: 4,
    icon: ChefHat,
    title: "Proses Pembuatan",
    text: "Setiap martabak dibuat setelah pesanan diterima (fresh made to order) menggunakan bahan-bahan berkualitas dan diproses secara higienis oleh tim yang berpengalaman.",
  },
];

const qcChecks = [
  "Tingkat kematangan sesuai standar.",
  "Topping sesuai pesanan.",
  "Kebersihan dan kualitas produk terjaga.",
  "Tidak ada kesalahan pada pesanan pelanggan.",
];

const postQcSteps = [
  {
    num: 6,
    icon: Package,
    title: "Pengemasan",
    text: "Martabak dikemas menggunakan kemasan food grade yang aman untuk makanan serta dirancang agar kualitas, rasa, dan tampilan produk tetap terjaga selama perjalanan.",
  },
  {
    num: 7,
    icon: Truck,
    title: "Pengiriman",
    text: "Pesanan dikirim melalui layanan kurir instan, ojek online, atau pickup langsung di outlet, sesuai pilihan pelanggan.",
  },
  {
    num: 8,
    icon: Bell,
    title: "Informasi Pesanan",
    text: "Setelah pesanan dikirim, pelanggan akan memperoleh informasi status pengiriman melalui aplikasi atau media komunikasi yang digunakan saat melakukan pemesanan.",
  },
];

export default function OrderingDelivery() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 bg-brand-secondary/30">
      <div className="mx-auto max-w-[1280px] container-px">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
            <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-golden tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Pemesanan &amp; Pengiriman
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-brand-golden" />
          </div>
          <h2 className="font-heading font-extrabold text-brand-white text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Pemesanan &amp; Pengiriman{" "}
            <span className="text-brand-golden">Produk</span>
          </h2>
          <p className="mt-2 sm:mt-3 font-heading font-bold text-brand-golden/60 text-sm sm:text-base italic">
            "Manisnya Bikin Mata Merem"
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {/* Steps 1–4 */}
          {orderSteps.map((s) => (
            <div
              key={s.num}
              className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center mt-0.5">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-extrabold text-brand-white text-sm sm:text-base md:text-lg flex items-center gap-2">
                    <span className="text-brand-golden">{s.num}.</span> {s.title}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Step 5 — QC */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center mt-0.5">
                <SearchCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden" />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-extrabold text-brand-white text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <span className="text-brand-golden">5.</span> Quality Control (QC)
                </p>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-brand-soft/70 leading-relaxed mb-3">
                  Sebelum dikemas, setiap pesanan diperiksa untuk memastikan:
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {qcChecks.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps 6–8 */}
          {postQcSteps.map((s) => (
            <div
              key={s.num}
              className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-golden/10 flex items-center justify-center mt-0.5">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-golden" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-extrabold text-brand-white text-sm sm:text-base md:text-lg flex items-center gap-2">
                    <span className="text-brand-golden">{s.num}.</span> {s.title}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* === INFORMASI PENGIRIMAN === */}
          <div className="reveal pt-6 sm:pt-10">
            <h3 className="font-heading font-extrabold text-brand-white text-[clamp(1.25rem,4vw,2rem)] text-center mb-6 sm:mb-8">
              Informasi{" "}
              <span className="text-brand-golden">Pengiriman</span>
            </h3>
          </div>

          {/* Estimasi Waktu */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <Clock className="w-5 h-5 text-brand-golden flex-shrink-0" />
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                Estimasi Waktu Pengiriman
              </h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                  <span className="text-brand-white font-medium">Dalam Kota:</span>{" "}
                  sekitar 30–90 menit, tergantung jarak, kondisi lalu lintas, dan
                  ketersediaan kurir.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-golden flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                  <span className="text-brand-white font-medium">Pickup di Outlet:</span>{" "}
                  Pesanan dapat diambil sesuai estimasi waktu yang diinformasikan
                  oleh tim.
                </span>
              </li>
            </ul>
          </div>

          {/* Biaya Pengiriman */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <CreditCard className="w-5 h-5 text-brand-golden flex-shrink-0" />
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                Biaya Pengiriman
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
              Biaya pengiriman mengikuti tarif layanan kurir atau aplikasi yang
              dipilih pelanggan.
            </p>
          </div>

          {/* Alamat Pengiriman */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 text-brand-golden flex-shrink-0" />
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                Alamat Pengiriman
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
              Pesanan akan dikirim ke alamat yang diinput oleh pelanggan. Pastikan
              alamat, titik lokasi, dan nomor telepon sudah benar untuk
              memperlancar proses pengantaran.
            </p>
          </div>

          {/* Tanggung Jawab */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <Shield className="w-5 h-5 text-brand-golden flex-shrink-0" />
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                Tanggung Jawab Pengiriman
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
              Martabak Djoeragan Accu bertanggung jawab memastikan pesanan dibuat
              dengan baik dan dikemas secara aman sebelum diserahkan kepada kurir.
              Setelah pesanan diterima oleh pihak kurir, proses pengantaran
              menjadi tanggung jawab penyedia layanan pengiriman.
            </p>
          </div>

          {/* Pesanan Rusak */}
          <div className="reveal p-4 sm:p-5 md:p-6 bg-brand-dark/50 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <AlertTriangle className="w-5 h-5 text-brand-golden flex-shrink-0" />
              <h4 className="font-heading font-bold text-brand-white text-sm sm:text-base">
                Pesanan Rusak atau Tidak Sesuai
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
              Apabila pesanan diterima dalam kondisi rusak, tumpah, tidak lengkap,
              atau tidak sesuai dengan pesanan, pelanggan dapat segera menghubungi
              Customer Service Martabak Djoeragan Accu dengan menyertakan foto
              atau video sebagai bukti serta nomor pesanan. Tim kami akan membantu
              proses penyelesaian sesuai kebijakan yang berlaku.
            </p>
          </div>

          {/* Jam Operasional & Komitmen */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 bg-brand-dark/50 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden flex-shrink-0" />
                <h4 className="font-heading font-bold text-brand-white text-sm">
                  Hari &amp; Jam Operasional
                </h4>
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
            <div className="p-4 sm:p-5 bg-brand-dark/50 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-brand-golden flex-shrink-0" />
                <h4 className="font-heading font-bold text-brand-white text-sm">
                  Komitmen Pelayanan
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-soft/70 leading-relaxed">
                Martabak Djoeragan Accu berkomitmen menyajikan martabak yang
                fresh, berkualitas, higienis, dan tepat waktu. Kepuasan pelanggan
                merupakan prioritas kami, sehingga setiap pesanan diproses dengan
                standar pelayanan terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
