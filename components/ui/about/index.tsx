"use client";

import Image from "next/image";

import SectionLayout from "@/layouts/sectionLayout";
import { ClockIcon, LeaveCarIcon, RidersIcon } from "@/ui/assets/svg";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const detailIcons = [ClockIcon, RidersIcon, LeaveCarIcon];

export default function AboutSection() {
  const { language } = useLanguage();
  const about = copy[language].about;
  const sinhala = language === "si";

  return (
    <SectionLayout id="about">
      <div className="grid items-start gap-10 px-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="space-y-4 text-left">
          <Heading
            as="h2"
            intent="base-section"
            className={cn(sinhala && "font-sinhala")}
          >
            {about.title}
          </Heading>
          <Text
            size="lg"
            weight={500}
            family="poppins"
            color="black/800"
            className={cn(sinhala && "font-sinhala")}
          >
            {about.lead}
          </Text>
          {about.paragraphs.map((paragraph) => (
            <Text
              key={paragraph}
              size="sm"
              color="gray"
              className={cn("leading-6", sinhala && "font-sinhala")}
            >
              {paragraph}
            </Text>
          ))}
          <ul className="space-y-5 pt-2">
            {about.details.map((detail, index) => {
              const Icon = detailIcons[index];

              return (
                <li key={detail.title} className="flex items-center gap-4">
                  <Icon className="h-8 w-8 shrink-0" />
                  <div className="space-y-1">
                    <Text
                      size="sm"
                      weight={600}
                      color="black/800"
                      className={cn(sinhala && "font-sinhala")}
                    >
                      {detail.title}
                    </Text>
                    <Text
                      size="sm"
                      color="gray"
                      className={cn("leading-6", sinhala && "font-sinhala")}
                    >
                      {detail.body}
                    </Text>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/about.png"
            alt="A driver holding the door for a rider"
            width={1024}
            height={768}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
