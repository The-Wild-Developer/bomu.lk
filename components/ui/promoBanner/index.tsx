"use client";

import Image from "next/image";

import { CallIcon } from "@/ui/assets/svg";
import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function PromoBanner() {
  const { language } = useLanguage();
  const promo = copy[language].promo;
  const sinhala = language === "si";

  return (
    <div className="grid items-stretch overflow-hidden md:grid-cols-2">
      <div className="relative h-full w-full">
        <div className="aspect-[16/9] w-full" aria-hidden />
        <Image
          src="/images/banner.png"
          alt="A night out at the bar"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="order-1 flex h-full w-full bg-[#ffc95c] md:order-2">
        <div className="flex h-full w-full flex-col justify-between gap-8 px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="space-y-4">
            <Text
              weight={700}
              transform="uppercase"
              color="blue"
              className={cn(sinhala && "font-sinhala")}
            >
              {promo.eyebrow}
            </Text>
            <Heading
              as="h2"
              intent="base-section"
              className={cn(sinhala && "font-sinhala")}
            >
              {promo.title}
            </Heading>
            <Text size="sm" className={cn(sinhala && "font-sinhala")}>
              {promo.body}
            </Text>
          </div>
          <Button
            fontSize="sm"
            className={cn(
              "inline-flex items-center gap-2 py-3 md:text-base",
              sinhala && "font-sinhala",
            )}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <CallIcon stroke="#FEFEFE" className="h-5 w-5" />
            {promo.button}
          </Button>
        </div>
      </div>
    </div>
  );
}
