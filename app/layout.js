import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/public/css/custom-style.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const metadata = {
  title: "Softograph Ltd.",
  description: "Official page of Softograph Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-gradient-to-b from-[#11192F] to-[#03050A] text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
