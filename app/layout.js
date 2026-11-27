import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "../components/SiteProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchDialog from "../components/SearchDialog";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Kartiko Damar Jati | Security Engineer & /learn Notebook",
  description:
    "Monochrome portfolio and public /learn notebook of Kartiko Damar Jati: penetration testing, Wazuh SIEM, CPTS, Rust/Solana smart contract auditing, and AWS Red Teaming.",
};

const THEME_INIT_SCRIPT =
  "(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}var l=localStorage.getItem('portfolio-lang');if(l==='en'||l==='id'){document.documentElement.lang=l;}}catch(e){}})();";

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <SiteProvider>
          <Navbar />
          <div className="site-shell">{children}</div>
          <Footer />
          <SearchDialog />
        </SiteProvider>
      </body>
    </html>
  );
}
