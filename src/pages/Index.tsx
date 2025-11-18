import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import MarketIntelligence from "@/components/MarketIntelligence";
import AgniLab from "@/components/AgniLab";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <MarketIntelligence />
        <AgniLab />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
