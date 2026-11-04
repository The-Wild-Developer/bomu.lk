// ui
import Logo from "@/ui/assets/logo";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from "@/ui/assets/svg";

// hooks
import { useLanguage } from "@/hooks/languageContext";

// lib
import { sectionLinks } from "@/ui/navbar/definition";
import { navLabel } from "@/lib/copy";
import { cn } from "@/lib/utils";

const links = sectionLinks;

export default function NavMobile({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  const { language } = useLanguage();

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-10 grid min-h-[100dvh] w-full grid-cols-[11fr_1fr] transition-transform duration-100 ease-in md:grid-cols-[10fr_2fr] lg:hidden",
        open ? "transform-none touch-none" : "-translate-x-full",
      )}
    >
      <div className="flex h-full flex-col justify-between bg-white p-6">
        {/* top section */}
        <div className="flex flex-col gap-4">
          {/* logo */}
          <div className="flex items-center justify-between">
            <a href="#home" onClick={onClick}>
              <Logo />
            </a>

            <button onClick={onClick}>
              <CloseIcon className="w-6" />
            </button>
          </div>

          {/* navbar links */}
          <ul className="grid grid-cols-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-b border-[#E8ECEF] first:pt-0"
              >
                <a
                  href={link.path}
                  onClick={onClick}
                  className={cn(
                    "block py-4 text-sm font-medium text-[#141718]",
                    language === "si" ? "font-sinhala" : "font-inter",
                  )}
                >
                  {navLabel(language, link.id)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FacebookIcon className="h-8 w-8" />
          <InstagramIcon className="h-8 w-8" />
          <YoutubeIcon className="h-8 w-8" />
          <XIcon className="h-8 w-8" />
          <LinkedinIcon className="h-8 w-8" />
          <TelegramIcon className="h-8 w-8" />
        </div>
      </div>

      <div className="h-full bg-black/30" onClick={onClick}></div>
    </div>
  );
}
