"use client";

// package
import { useEffect, useState } from "react";

// ui
import Logo from "@/ui/assets/logo";
import { HamburgerMenu } from "@/ui/assets/svg";
import NavLinks from "@/ui/navbar/navLinks";
import NavMobile from "@/ui/navbar/navMobile";
import PromoSection from "@/ui/promo";

// hooks
import { useLanguage } from "@/hooks/languageContext";
import { useRootContext } from "@/hooks/rootContext";

// lib
import { cn } from "@/lib/utils";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const isRootPage = useRootContext();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleOnScroll = () => {
    window.scrollY >= 32 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      {!open && <PromoSection />}
      <div
        className={cn(
          "sticky top-0 z-[100]",
          isRootPage ? "bg-[#ffc95c]" : "bg-white",
          scroll && "bg-white shadow transition-colors duration-200 ease-in",
        )}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4 lg:justify-normal">
          <div className="flex items-center gap-1 lg:basis-1/4">
            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <HamburgerMenu className="w-6" />
            </button>

            <a href="#home">
              <Logo />
            </a>
          </div>

          <div className="hidden basis-2/4 lg:block">
            <NavLinks />
          </div>

          <div className="flex items-center lg:basis-1/4 lg:justify-end">
            <div className="flex items-center gap-2 font-inter text-sm font-medium text-[#141718]">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={cn(language === "en" ? "opacity-100" : "opacity-50")}
              >
                English
              </button>
              <span aria-hidden="true" className="opacity-40">
                |
              </span>
              <button
                type="button"
                onClick={() => setLanguage("si")}
                aria-pressed={language === "si"}
                className={cn(
                  "font-sinhala",
                  language === "si" ? "opacity-100" : "opacity-50",
                )}
              >
                සිංහල
              </button>
            </div>
          </div>

          {/* mobile navbar  */}
          <NavMobile open={open} onClick={() => setOpen(false)} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
