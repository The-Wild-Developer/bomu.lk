"use client";

import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function BannerVideo() {
  const { language } = useLanguage();
  const sinhala = language === "si";
  const [lead, accent = ""] = copy[language].bannerCaption.split("\n");

  return (
    <div className="relative">
      <video
        className="block h-auto w-full border-0 outline-none"
        src="/videos/banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={copy[language].bannerCaption.replace("\n", " ")}
      />
      <p
        className={cn(
          "pointer-events-none absolute inset-x-0 top-2 px-4 text-center text-xl font-semibold leading-tight text-[#141718] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] lg:top-16 lg:text-6xl xl:text-7xl",
          sinhala ? "font-sinhala" : "font-poppins",
        )}
      >
        {lead}
        <br />
        <span className="text-[#d85018]">{accent}</span>
      </p>
    </div>
  );
}
