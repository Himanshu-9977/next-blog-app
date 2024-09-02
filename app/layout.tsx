import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteConfig from "@/config/site";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-40 scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container className="">
            <Header />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
