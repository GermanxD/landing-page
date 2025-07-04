import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import UnionSection from "../components/UnionSection";
import DirectorsSection from "../components/DirectorsSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--baby-powder)' }}>
      <Header />
      
      <main className="pb-8 md:pb-16">
        <HeroSection />
        <UnionSection />
        <DirectorsSection />
        <SocialSection />
      </main>
      
      <Footer />
    </div>
  );
}
