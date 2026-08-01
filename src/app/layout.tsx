import type { Metadata } from "next";
import { DM_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refine Energy Consulting | Building Energy Optimization",
  description:
    "REC helps Sacramento small and midsize commercial property owners cut HVAC energy waste with smart controls and building automation optimization — without replacing the entire system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-offwhite font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
