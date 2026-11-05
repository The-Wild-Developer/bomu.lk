import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "බොමු.lk",
  description:
    "A driver for your car, or a ride in ours, after you've been drinking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={true}>{children}</PageLayout>;
}
