import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HenAi - Web Assistant",
  description: "AI web assistant for Henry. Building and shipping useful web apps with modern design.",
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
