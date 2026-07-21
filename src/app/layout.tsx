import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafael-holos.neomac.io"),
  title: "Rafael Álvarez · Sonoterapia & Baños de Gong — Casa Holos",
  description:
    "Neurosonicidad, cuencos tibetanos y baños de gong para plenitud, bienestar y prosperidad. Sesiones dirigidas por Rafael Cristóbal Álvarez en Casa Holos.",
  openGraph: {
    title: "Rafael Álvarez · Sonoterapia & Baños de Gong — Casa Holos",
    description:
      "Neurosonicidad, cuencos tibetanos y baños de gong para plenitud, bienestar y prosperidad. Sesiones dirigidas por Rafael Cristóbal Álvarez en Casa Holos.",
    url: "https://rafael-holos.neomac.io",
    siteName: "Casa Holos",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Álvarez · Sonoterapia & Baños de Gong — Casa Holos",
    description:
      "Neurosonicidad, cuencos tibetanos y baños de gong para plenitud, bienestar y prosperidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
