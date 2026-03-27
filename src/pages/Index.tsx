import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PillarsSection from "@/components/PillarsSection";
import Footer from "@/components/Footer";
import DonationModal from "@/components/DonationModal";

const Index = () => {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onDonateClick={() => setDonateOpen(true)} />
      <HeroSection onDonateClick={() => setDonateOpen(true)} />
      <MissionSection />
      <PillarsSection />
      <Footer />
      <DonationModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
};

export default Index;
