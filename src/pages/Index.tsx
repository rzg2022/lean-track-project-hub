import { Navigation } from "@/components/Navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { PainPoints } from "@/components/PainPoints";
import { ProductIntro } from "@/components/ProductIntro";
import { CoreFeatures } from "@/components/CoreFeatures";
import { CustomerSuccess } from "@/components/CustomerSuccess";
import { Pricing } from "@/components/Pricing";
import { Registration } from "@/components/Registration";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroBanner />
      <PainPoints />
      <ProductIntro />
      <CoreFeatures />
      <CustomerSuccess />
      <Pricing />
      <Registration />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
