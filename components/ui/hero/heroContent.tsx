"use client";

import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function HeroContent() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="flex h-full flex-col items-start justify-center gap-4 p-8 text-left sm:max-w-[600px] md:max-w-[600px] md:py-16 lg:order-2 lg:max-w-none lg:px-10 lg:py-8">
      <div className="space-y-2 text-left">
        <Heading
          as="h1"
          intent="hero-section"
          className={cn(
            language === "si" &&
              "font-sinhala text-[26px] leading-tight md:text-[32px] xl:text-[40px]",
          )}
        >
          {text.heroTitleLead}{" "}
          <span className="text-[#377DFF]">{text.heroTitleAccent}</span>
        </Heading>
        <Text
          size="sm"
          className={cn(language === "si" && "font-sinhala")}
        >
          {text.heroBody}
        </Text>
      </div>
      <Button
        fontSize="sm"
        className={cn("px-14 py-3 md:text-lg", language === "si" && "font-sinhala")}
      >
        {text.heroButton}
      </Button>
    </div>
  );
}
