"use client";

import SectionLayout from "@/layouts/sectionLayout";
import { CallIcon, WhatsAppIcon } from "@/ui/assets/svg";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function TeamSection() {
  const { language } = useLanguage();
  const team = copy[language].team;
  const sinhala = language === "si";

  return (
    <SectionLayout id="team">
      <div className="grid items-center gap-10 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
        <div className="space-y-4 text-left">
          <div className="flex w-fit items-center gap-3">
            <span
              aria-hidden
              className="w-1.5 self-stretch rounded-full bg-[#ffc95c]"
            />
            <Heading
              as="h2"
              intent="base-section"
              className={cn(
                "font-semibold leading-[1.15]",
                sinhala ? "font-sinhala" : "tracking-tight",
              )}
            >
              {team.title}
            </Heading>
          </div>
          <Text
            size="lg"
            weight={500}
            family="poppins"
            color="black/800"
            className={cn(sinhala && "font-sinhala")}
          >
            {team.lead}
          </Text>
          {team.paragraphs.map((paragraph) => (
            <Text
              key={paragraph}
              size="sm"
              color="gray"
              className={cn("leading-6", sinhala && "font-sinhala")}
            >
              {paragraph}
            </Text>
          ))}
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:justify-self-end">
          {team.members.map((member) => (
            <article
              key={member.email}
              className="flex flex-col items-center gap-5 rounded-3xl border border-[#CBCBCB] bg-[#F3F5F7] px-4 py-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                width={512}
                height={512}
                className="h-64 w-64 rounded-full object-cover object-top"
              />
              <div className="space-y-1">
                <Text
                  size="lg"
                  weight={600}
                  family="poppins"
                  color="black/800"
                >
                  {member.name}
                </Text>
                <Text
                  size="sm"
                  weight={500}
                  color="gray"
                  className={cn(sinhala && "font-sinhala")}
                >
                  {member.designation[language]}
                </Text>
                <a
                  href={`mailto:${member.email}`}
                  className="block break-all font-inter text-sm text-[#6C7275] hover:text-[#141718]"
                >
                  {member.email}
                </a>
              </div>

              <div className="mt-auto flex w-full gap-2">
                <a
                  href={`tel:+${member.phone}`}
                  className={cn(
                    "inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#141718] px-3 py-2.5 text-sm font-medium text-white",
                    sinhala ? "font-sinhala" : "font-inter",
                  )}
                >
                  <CallIcon stroke="#FEFEFE" className="h-6 w-6 shrink-0" />
                  {team.call}
                </a>
                <a
                  href={`https://wa.me/${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2.5 text-sm font-medium text-[#141718]",
                    sinhala ? "font-sinhala" : "font-inter",
                  )}
                >
                  <WhatsAppIcon className="h-6 w-6 shrink-0" />
                  {team.whatsapp}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
