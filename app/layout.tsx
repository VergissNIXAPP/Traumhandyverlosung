import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traumhandyverlosung",
  description: "Gewinne dein Traum‑Smartphone ab 2,50€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
