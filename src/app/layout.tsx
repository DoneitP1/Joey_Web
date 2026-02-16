import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joey Organizasyon | Her Doğum Günü Bir Masal Gibi Olmalı",
  description:
    "Çocuğunuzun gözlerindeki ışıltıyı, unutulmaz bir maceraya dönüştürüyoruz. Safari temalı doğum günü partileri, yüz boyama, atölyeler ve daha fazlası.",
  keywords: [
    "çocuk organizasyon",
    "doğum günü partisi",
    "parti planlama",
    "yüz boyama",
    "çocuk eğlence",
    "safari parti",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
