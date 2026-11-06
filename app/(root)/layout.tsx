import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "බොමු.lk",
  description:
    "Had a drink? A sober driver comes to you and drives you home, or wherever you need to go, in your own vehicle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={true}>{children}</PageLayout>;
}
