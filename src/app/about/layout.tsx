import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "À propos",
  description: "Page dans un layout spécifique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <h1>LAYOUT de À propos</h1>
        <aside>Sidebar</aside>
        {children}
      </body>
    </html>
  );
}
