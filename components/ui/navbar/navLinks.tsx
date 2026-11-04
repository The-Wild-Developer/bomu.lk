"use client";

import { useEffect, useState } from "react";

import { sectionLinks } from "@/ui/navbar/definition";
import { useLanguage } from "@/hooks/languageContext";
import { navLabel } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const { language } = useLanguage();
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "#home");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <ul className="flex lg:justify-center lg:gap-10">
      {sectionLinks.map((link) => (
        <li
          key={link.id}
          className={cn(
            "text-sm font-medium text-[#141718] hover:opacity-100",
            language === "si" ? "font-sinhala" : "font-inter",
            hash !== link.path && "opacity-70",
          )}
        >
          <a href={link.path}>{navLabel(language, link.id)}</a>
        </li>
      ))}
    </ul>
  );
}
