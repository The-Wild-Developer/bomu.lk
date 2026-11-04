// ui
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

// hooks
import { LanguageProvider } from "@/hooks/languageContext";
import { RootContextProvider } from "@/hooks/rootContext";

interface PageLayoutProps {
  root: boolean;
  children: React.ReactNode;
}

export default function PageLayout({ root, children }: PageLayoutProps) {
  return (
    <LanguageProvider>
      <RootContextProvider root={root}>
        <Navbar />
      </RootContextProvider>
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
