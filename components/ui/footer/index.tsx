"use client";

// package
import { sectionLinks } from "@/ui/navbar/definition";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";

// hooks
import { useLanguage } from "@/hooks/languageContext";

// lib
import { copy, navLabel } from "@/lib/copy";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from "@/ui/assets/svg";

const links = sectionLinks;

const Footer = () => {
  const { language } = useLanguage();
  const sinhala = language === "si";

  return (
    <SectionLayout bg="bg-[#141718]">
      <div className="space-y-10 px-8 py-12 lg:space-y-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
            <h3 className="font-sinhala text-2xl font-semibold text-white lg:border-r lg:border-[#6C7275] lg:pr-8">
              බොමු.lk
            </h3>
            <span className="h-[1px] w-8 rounded-full bg-[#6C7275] lg:hidden"></span>
            <Text
              size="sm"
              color="white/900"
              className={cn("lg:pl-8", sinhala && "font-sinhala")}
            >
              {copy[language].footerSlogan}
            </Text>
          </div>

          <ul className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {links.map((link) => (
              <li
                key={link.id}
                className={cn(
                  "text-center text-sm font-normal text-[#FEFEFE]",
                  sinhala ? "font-sinhala" : "font-inter",
                )}
              >
                <a href={link.path}>{navLabel(language, link.id)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8 border-t border-[#6C7275] py-6 lg:flex-row lg:justify-between lg:gap-0 lg:py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:order-2">
            <FacebookIcon stroke="#FEFEFE" className="h-8 w-8" />
            <InstagramIcon stroke="#FEFEFE" className="h-8 w-8" />
            <YoutubeIcon stroke="#FEFEFE" className="h-8 w-8" />
            <XIcon stroke="#FEFEFE" className="h-8 w-8" />
            <LinkedinIcon stroke="#FEFEFE" className="h-8 w-8" />
            <TelegramIcon stroke="#FEFEFE" className="h-8 w-8" />
          </div>

          <div className="flex flex-col gap-7 lg:order-1 lg:flex-row">
            <div className="flex justify-center gap-7 lg:order-2">
              <Text size="xs" weight={600} family="poppins" color="white/900">
                Privacy Policy
              </Text>
              <Text size="xs" weight={600} family="poppins" color="white/900">
                Term of Use
              </Text>
            </div>

            <Text
              family="poppins"
              size="xs"
              color="white/800"
              className="text-center font-sinhala lg:order-1 lg:text-left"
            >
              Copyright © {new Date().getFullYear()} බොමු.lk. All rights
              reserved
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
