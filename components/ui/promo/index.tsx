"use client";

// ui
import { CallIcon, MailIcon } from "@/ui/assets/svg";

// hooks
import { useRootContext } from "@/hooks/rootContext";

// lib
import { cn } from "@/lib/utils";

export default function PromoSection() {
  const isRootPage = useRootContext();
  const iconColor = isRootPage ? "#FEFEFE" : "#343839";

  return (
    <div className={cn(isRootPage ? "bg-[#141718]" : "bg-[#F3F5F7]")}>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-8 py-2">
        <a
          href="mailto:hello@example.com"
          className={cn(
            "flex items-center gap-2 font-inter text-xs font-medium md:text-sm",
            isRootPage ? "text-[#FEFEFE]" : "text-[#343839]",
          )}
        >
          <MailIcon className="h-4 w-4 shrink-0" stroke={iconColor} />
          hello@example.com
        </a>

        <a
          href="tel:+6281234567890"
          className={cn(
            "flex items-center gap-2 font-inter text-xs font-medium md:text-sm",
            isRootPage ? "text-[#FEFEFE]" : "text-[#343839]",
          )}
        >
          <CallIcon className="h-4 w-4 shrink-0" stroke={iconColor} />
          +62 812 3456 7890
        </a>
      </div>
    </div>
  );
}
