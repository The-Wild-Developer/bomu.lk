"use client";

import SectionLayout from "@/layouts/sectionLayout";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const vehicleImages: Record<string, string> = {
  bike: "/images/bike.svg",
  threeWheeler: "/images/threewheeler.svg",
  car: "/images/car.svg",
  jeep: "/images/jeep.svg",
  van: "/images/van.svg",
  lorry: "/images/lorry.svg",
};

const flipped = new Set(["threeWheeler", "car", "van", "lorry"]);

export default function DriveSection() {
  const { language } = useLanguage();
  const drive = copy[language].drive;
  const sinhala = language === "si";

  return (
    <SectionLayout id="drive">
      <div className="space-y-8 px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl space-y-3 text-center xl:pb-20">
          <div className="mx-auto flex w-fit items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-8 rounded-full bg-[#ffc95c] sm:w-12"
            />
            <Heading
              as="h2"
              intent="base-section"
              className={cn(
                "font-semibold leading-[1.15]",
                sinhala ? "font-sinhala" : "tracking-tight",
              )}
            >
              {drive.title}
            </Heading>
            <span
              aria-hidden
              className="h-1.5 w-8 rounded-full bg-[#ffc95c] sm:w-12"
            />
          </div>
          <Text
            size="sm"
            color="gray"
            className={cn(sinhala && "font-sinhala")}
          >
            {drive.lead}
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-4 xl:hidden">
          {drive.types.map((type) => (
            <article
              key={type.id}
              className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-3 rounded-3xl border border-[#CBCBCB] bg-[#F3F5F7] px-4 py-6 text-center md:w-[calc(33.333%-0.75rem)]"
            >
              <img
                src={vehicleImages[type.id]}
                alt=""
                className={cn(
                  "h-20 w-20 object-contain",
                  flipped.has(type.id) && "-scale-x-100",
                )}
              />
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className={cn(sinhala && "font-sinhala")}
              >
                {type.title}
              </Text>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto pb-14 xl:block">
          <div className="mx-auto flex w-max items-end gap-10 border-b-2 border-[#6C7275]">
            {drive.types.map((type) => (
              <div key={type.id} className="relative">
                <img
                  src={vehicleImages[type.id]}
                  alt=""
                  className={cn(
                    "block h-24 w-auto",
                    flipped.has(type.id) && "-scale-x-100",
                  )}
                />
                <Text
                  size="sm"
                  weight={600}
                  family="poppins"
                  color="black/800"
                  className={cn(
                    "absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap lg:text-lg",
                    sinhala && "font-sinhala",
                  )}
                >
                  {type.title}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
