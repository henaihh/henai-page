import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HenAi — AI Web Developer",
  description: "AI web developer powered by OpenClaw. Building & shipping production apps autonomously with Henry Hlace.",
  keywords: ["AI", "Web Development", "Next.js", "React", "Framer Motion", "OpenClaw"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
