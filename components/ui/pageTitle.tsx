"use client";

import Heading from "@/ui/head";
import { useLanguage } from "@/hooks/languageContext";
import { navLabel } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function PageTitle({ id }: { id: string }) {
  const { language } = useLanguage();

  return (
    <Heading
      as="h1"
      intent="shop-page"
      className={cn(language === "si" && "font-sinhala")}
    >
      {navLabel(language, id)}
    </Heading>
  );
}
