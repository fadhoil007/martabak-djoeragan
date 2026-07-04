import imgKejuCoklat from "../assets/keju-coklat.jpg";
import imgKacangCoklat from "../assets/kacang-coklat.jpg";
import imgJagungSusu from "../assets/jagung-susu.jpg";
import imgCampuran from "../assets/campuran.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  badge?: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: "keju-coklat",
    name: "Keju Coklat",
    price: "Rp22.000",
    priceNumber: 22000,
    description:
      "Perpaduan gurihnya keju dan manisnya coklat dalam satu martabak lembut dengan topping melimpah.",
    badge: "FAVORIT DJOERAGAN",
    image: imgKejuCoklat,
    alt: "Martabak Keju Coklat Djoeragan Accu dengan topping melimpah",
  },
  {
    id: "kacang-coklat",
    name: "Kacang Coklat",
    price: "Rp20.000",
    priceNumber: 20000,
    description:
      "Coklat manis bertemu kacang dengan tekstur khas. Kombinasi klasik yang selalu punya tempat di hati pecinta martabak.",
    image: imgKacangCoklat,
    alt: "Martabak Kacang Coklat Djoeragan Accu",
  },
  {
    id: "jagung-susu",
    name: "Jagung Susu",
    price: "Rp18.000",
    priceNumber: 18000,
    description:
      "Manis dan lembut dengan perpaduan jagung serta susu yang creamy. Pilihan ringan buat nemenin waktu santai.",
    image: imgJagungSusu,
    alt: "Martabak Jagung Susu Djoeragan Accu",
  },
  {
    id: "campuran",
    name: "Campuran",
    price: "Rp35.000",
    priceNumber: 35000,
    description:
      "Satu martabak buat kamu yang susah memilih. Beragam topping favorit hadir dalam satu sajian spesial Djoeragan.",
    badge: "TOPPING MELIMPAH",
    image: imgCampuran,
    alt: "Martabak Campuran Djoeragan Accu dengan berbagai topping",
  },
];

// Image exports for reuse in other sections
export const heroImage = imgKejuCoklat;
export const storyImage = imgCampuran;
export const ctaImage = imgKacangCoklat;
export const ownerImage = "/images/owner.jpg";

export const WHATSAPP_URL =
  "https://wa.me/6282268961775?text=Halo%20Djoeragan%20Accu%2C%20saya%20mau%20tanya%20menu%20martabaknya.";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/Perumahan+Beringin+Indah+Lestari+2+Jalan+Balai+Gadang+Balai+Gadang+Koto+Tangah";
