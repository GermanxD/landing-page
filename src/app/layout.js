import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URBJJ - Unión Regional Bautista de Jóvenes Jerusalén",
  description: "Unión Regional Bautista de Jóvenes Jerusalén - Comunidad cristiana bautista de jóvenes de Nuevo León. Encuentra tu lugar, crece en fe y crea lazos únicos con jóvenes que comparten tus valores bautistas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
