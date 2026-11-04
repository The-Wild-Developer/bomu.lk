"use client";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import {
  CallIcon,
  DeliveryIcon,
  LockIcon,
  MoneyIcon,
} from "@/ui/assets/svg";

// hooks
import { useLanguage } from "@/hooks/languageContext";

// lib
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const icons = [DeliveryIcon, MoneyIcon, LockIcon, CallIcon];

export default function Features() {
  const { language } = useLanguage();
  const features = copy[language].features;

  return (
    <SectionLayout>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 p-8 md:grid-cols-4 lg:gap-6 lg:py-10">
        {features.map((feature, index) => {
          const Icon = icons[index];

          return (
            <div
              key={feature.title}
              className="space-y-4 overflow-hidden rounded-xl bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12"
            >
              <Icon className="h-12 w-12" />
              <div className="space-y-1 md:space-y-2">
                <Text
                  size="sm"
                  weight={600}
                  family="poppins"
                  color="black/800"
                  className={cn(
                    "lg:text-xl",
                    language === "si" && "font-sinhala",
                  )}
                >
                  {feature.title}
                </Text>
                <Text
                  size="sm"
                  color="gray"
                  className={cn(language === "si" && "font-sinhala")}
                >
                  {feature.body}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
