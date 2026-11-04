// lib
import { cn } from "@/lib/utils";

export default function SectionLayout({
  id,
  bg,
  className,
  children,
}: {
  id?: string;
  bg?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn(id && "scroll-mt-20", bg ? bg : "bg-white")}>
      <div className={cn("mx-auto max-w-[1440px]", className)}>{children}</div>
    </section>
  );
}
