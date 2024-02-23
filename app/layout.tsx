import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta 
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
        /></head>
      
      <body className={montserrat.className}> 
      <div>
      <Header/>
      
        <main className="grid-background pt-navigation-height bg-page-gradient">{children}</main>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
