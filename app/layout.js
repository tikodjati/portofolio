import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GlitchBG from "../components/GlitchBG";
import Boot from "../components/Boot";

const head = Chakra_Petch({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-head" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  title: "Kartiko Damar Jati | Security Engineer",
  description: "Portofolio Security Engineer dan mahasiswa Sistem Informasi UPN Veteran Yogyakarta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${head.variable} ${mono.variable}`}>
      <body>
        <Boot />
        <GlitchBG />
        {children}
      </body>
    </html>
  );
}
