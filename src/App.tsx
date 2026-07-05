import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandIntroduction from "./components/BrandIntroduction";
import BrandStory from "./components/BrandStory";
import MenuSection from "./components/MenuSection";
import BestSellerRack from "./components/BestSellerRack";
import WhyDjoeragan from "./components/WhyDjoeragan";
import OwnerStory from "./components/OwnerStory";
import BusinessLegality from "./components/BusinessLegality";
import LocationSection from "./components/LocationSection";
import OrderingPlatforms from "./components/OrderingPlatforms";
import FinalCTA from "./components/FinalCTA";
import PaymentMethods from "./components/PaymentMethods";
import BusinessPolicy from "./components/BusinessPolicy";
import Partnership from "./components/Partnership";
import OrderingDelivery from "./components/OrderingDelivery";
import ComplaintSection from "./components/ComplaintSection";
import Footer from "./components/Footer";
import MobileWhatsApp from "./components/MobileWhatsApp";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen min-h-[100dvh] bg-brand-dark text-brand-soft overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <BrandIntroduction />
        <BrandStory />
        <MenuSection />
        <BestSellerRack />
        <WhyDjoeragan />
        <OwnerStory />
        <BusinessLegality />
        <LocationSection />
        <OrderingPlatforms />
        <PaymentMethods />
        <Partnership />
        <OrderingDelivery />
        <ComplaintSection />
        <BusinessPolicy />
        <FinalCTA />
      </main>
      <Footer />
      <MobileWhatsApp />
    </div>
  );
}
