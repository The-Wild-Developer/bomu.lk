// package
import Image from "next/image";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import HeroContent from "@/ui/hero/heroContent";
import Features from "@/ui/features";
import AboutSection from "@/ui/about";
import DriveSection from "@/ui/drive";
import TeamSection from "@/ui/team";
import ContactForm from "@/ui/contact";
import PromoBanner from "@/ui/promoBanner";
import BannerVideo from "@/ui/bannerVideo";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <SectionLayout
        id="home"
        bg="bg-[#ffc95c]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center"
      >
        <HeroContent />

        {/* Image content */}
        <div className="flex w-full items-end justify-center lg:order-1">
          <Image
            src="/images/hero.png"
            width={1600}
            height={1067}
            alt="Getting someone who has been drinking home safely"
            className="h-auto w-full object-contain"
          />
        </div>
      </SectionLayout>

      {/* Features section */}
      <Features />

      {/* About us section */}
      <AboutSection />

      <DriveSection />

      <BannerVideo />

      <TeamSection />

      <PromoBanner />

      <ContactForm />
    </>
  );
}
